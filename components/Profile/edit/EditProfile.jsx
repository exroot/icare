/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect, useCallback } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import ReactTags from "react-tag-autocomplete";
import { useToasts } from "react-toast-notifications";
import FormGroup from "../../FormsProfile/FormGroup";
import FormLabel from "../../FormsProfile/FormLabel";
import FormField from "../../FormsProfile/FormField";
import { ButtonCTA as SubmitButton } from "../../Buttons/ButtonCTA";
import ProfileSchema from "../../../validations/profile.schema";
import ValidationErrorMessage from "../../FormsProfile/FormErrorField";
import axios from "../../../lib/client";
import useUser from "../../../lib/useUser";
import redirectTo from "../../../utils/redirectTo";
import PictureCropperModal from "../../Modals/PictureCropperModal";
import "twin.macro";
import Description from "../../Description";

const EditProfile = ({ user: userData }) => {
  const { user, mutateUser } = useUser({ initialData: userData });
  const [tagsSuggestions, setTagsSuggestions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [croppedImageUrl, setCroppedImageUrl] = useState(null);
  const [croppedCoverUrl, setCroppedCoverUrl] = useState(null);
  const [src, setSrc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showModalCover, setShowModalCover] = useState(false);
  const [imageCropped, setImageCropped] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profileCrop, setProfileCrop] = useState({
    unit: "%",
    aspect: 1 / 1,
    width: 90,
    x: 5,
    y: 5,
  });
  const [cropCover, setCropCover] = useState({
    unit: "%",
    aspect: 16 / 9,
    width: 90,
    x: 5,
    y: 5,
  });
  const imageRef = useRef(null);
  const { addToast } = useToasts();

  const handleSubmit = async (values, { setFieldError }) => {
    setLoading(true);
    try {
      // values.tags = tags.map((tag) => tag.name);
      delete values.image_avatar;
      delete values.image_cover;
      if (user.profile.username === values.username) {
        delete values.username;
      }
      const { data } = await axios({
        method: "PUT",
        url: `/profiles/${user.profile.username}`,
        body: values,
      });
      await mutateUser(
        { is_logged_in: user.is_logged_in, profile: data.data },
        false
      );
      // redirectTo('/profile')
      addToast("Información del perfil actualizada.", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (err) {
      console.error({ ...err });
      console.log("error: ", err.response.data.message);
      if (err.message) {
        setFieldError("username", err.response.data.message);
      }
    }
  };
  // const onDeleteTag = (i) => {
  //   const tagsResult = tags.slice(0)
  //   tagsResult.splice(i, 1)
  //   setTags(tagsResult)
  // }
  // const onAdditionTag = (tag) => {
  //   const tagsResult = [].concat(tags, tag)
  //   setTags(tagsResult)
  // }
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setShowModal(true);
    }
  };

  const onSelectCoverFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setShowModalCover(true);
    }
  };

  const onImageLoaded = useCallback((image) => {
    imageRef.current = image;
    const width =
      image.width > image.height ? (image.height / image.width) * 100 : 100;
    const height =
      image.height > image.width ? (image.width / image.height) * 100 : 100;
    const x = width === 100 ? 0 : (100 - width) / 2;
    const y = height === 100 ? 0 : (100 - height) / 2;

    const newCrop = {
      unit: "%",
      aspect: 1,
      width: width,
      height: height,
      x,
      y,
    };

    const pixelCrop = {
      unit: "px",
      aspect: newCrop.aspect,
      x: (newCrop.x * image.width) / 100,
      y: (newCrop.y * image.height) / 100,
      width: (newCrop.width * image.width) / 100,
      height: (newCrop.height * image.height) / 100,
    };

    setProfileCrop(newCrop);
    makeClientCrop(pixelCrop);
    return false;
  }, []);

  const onCoverLoaded = (image) => {
    imageRef.current = image;
    return makeClientCoverCrop(cropCover);
  };

  const onCropComplete = (crop) => {
    return makeClientCrop(crop);
  };

  const onCropCoverComplete = (crop) => {
    return makeClientCoverCrop(crop);
  };

  const onCropChange = (crop, percentCrop) => {
    return setProfileCrop(crop);
  };

  const onCropCoverChange = (crop, percentCrop) => {
    return setCropCover(crop);
  };

  const makeClientCrop = async (avatarCrop) => {
    if (imageRef.current && avatarCrop.width && avatarCrop.height) {
      const croppedImageUrl = await getCropped(
        imageRef.current,
        avatarCrop,
        `profile_avatar.jpg`
      );

      return setCroppedImageUrl(croppedImageUrl);
    }
  };

  const makeClientCoverCrop = async (cropCover) => {
    if (imageRef.current && cropCover.width && cropCover.height) {
      const croppedImageUrl = await getCropped(
        imageRef.current,
        cropCover,
        `profile_cover.jpg`
      );
      console.log(("AC", croppedImageUrl));
      return setCroppedCoverUrl(croppedImageUrl);
    }
  };

  const getCropped = (image, crop, fileName) => {
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = Math.ceil(crop.width * scaleX);
    tmpCanvas.height = Math.ceil(crop.height * scaleY);

    const ctx = tmpCanvas.getContext("2d");
    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    return new Promise((resolve, reject) => {
      tmpCanvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        setImageCropped(blob);
        resolve(window.URL.createObjectURL(blob));
      }, "image/jpeg");
    });
  };

  const saveImage = async (field) => {
    console.log("FIEEEELD: ", field);
    try {
      setLoadingImage(true);
      const form = new FormData();
      form.append("username", user.profile.username);
      form.append("imagetype", field === "image_cover" ? "cover" : "avatar");
      form.append("image", new File([imageCropped], imageCropped.name));

      const { data } = await axios({
        method: "POST",
        url: `/profiles/${user.profile.username}`,
        body: form,
        contentType: "multipart/form-data",
      });
      console.log("data: ", data);
      console.log("image_avatar: ", data.data.image_avatar);
      const fieldName = field === "image_cover" ? "portada" : "perfil";
      if (fieldName === "portada") {
        setTimeout(() => {
          setShowModalCover(false);
          mutateUser(
            {
              ...user,
              profile: { ...user.profile, image_cover: data.data.image_cover },
            },
            false
          );
          setLoadingImage(false);
        }, 500);
      } else {
        setTimeout(() => {
          setShowModal(false);
          mutateUser(
            {
              ...user,
              profile: {
                ...user.profile,
                image_avatar: data.data.image_avatar,
              },
            },
            false
          );
          setLoadingImage(false);
        }, 500);
      }
      addToast(`Imagen de ${fieldName} actualizada satisfactoriamente.`, {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (err) {
      console.error(err);
      setLoadingImage(false);
    }
  };

  return (
    <>
      {/* FORM START */}
      <Formik
        initialValues={{
          username: user.profile.username,
          first_name: user.profile.first_name || "",
          last_name: user.profile.last_name || "",
          location_country: user.profile.location_country || "",
          location_city: user.profile.location_city || "",
          image_avatar: user.profile.image_avatar || "",
          image_cover: user.profile.image_cover || "",
          // category: user.profile.category || null,
          website: user.profile.website || "",
          // tags: tags.map((tag) => tag.name),
          bio: user.profile.bio || "",
        }}
        validationSchema={ProfileSchema}
        validateOnBlur={false}
        onSubmit={handleSubmit}
      >
        {({
          errors,
          touched,
          isSubmitting,
          values,
          handleChange,
          handleBlur,
        }) => (
          <Form tw="w-full rounded-lg">
            <FormGroup>
              <div tw="mt-6 mb-8">
                <h2 tw="text-2xl text-primary-200 font-bold">
                  Información del perfil
                </h2>
                <Description tw="text-primary-400 text-sm flex justify-between">
                  Actualiza tu información del perfil, imagen de perfil, nombre,
                  descripcion, país, locación, etc. Eres libre de personalizarlo
                  como gustes.
                </Description>
              </div>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormField name="username" errors={errors} touched={touched} />
              <ErrorMessage
                name="username"
                render={(msg) => (
                  <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                )}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="image_avatar">Foto de perfil</FormLabel>
              <div tw="w-full flex items-center">
                <div tw="w-16 h-16 border rounded-full relative bg-primary-800 mb-4 shadow">
                  <img
                    tw="object-cover w-full h-full rounded-full"
                    src={
                      user.profile.image_avatar
                        ? user.profile.image_avatar
                        : "/img/avatar_placeholder.png"
                    }
                    key={
                      user.profile.image_avatar
                        ? user.profile.image_avatar
                        : "/img/avatar_placeholder.png"
                    }
                    alt={`${user.username} profile`}
                  />
                </div>
                <FormLabel
                  htmlFor="image_avatar"
                  type="button"
                  onChange={onSelectFile}
                >
                  <span tw="cursor-pointer inline-block  ml-4 mb-2 rounded-lg py-2 px-4 bg-primary-800 text-button hover:bg-primary-700 shadow font-medium  focus:outline-none duration-75 ease-in-out">
                    <CamIcon />
                    Cambiar
                  </span>
                </FormLabel>

                <input
                  id="image_avatar"
                  accept="image/*"
                  tw="hidden"
                  type="file"
                  onChange={onSelectFile}
                />
              </div>
              {showModal && (
                <PictureCropperModal
                  showModal={showModal}
                  setShowModal={setShowModal}
                  onImageLoaded={onImageLoaded}
                  onComplete={onCropComplete}
                  onChange={onCropChange}
                  croppedImageUrl={croppedImageUrl}
                  src={src}
                  crop={profileCrop}
                  onSave={saveImage}
                  loading={loadingImage}
                />
              )}
            </FormGroup>
            <FormGroup>
              <div tw="my-4 py-4 text-center rounded-lg border-dashed border-4 border-primary-800 hover:border-accent duration-75 ease-in-out">
                <div tw="mx-auto h-32 w-full md:w-64 border relative bg-primary-800 mb-4">
                  {/* <img
                        tw="object-cover h-32 w-64 w-full"
                        src={user.image_cover || "/img/cover_placeholder.jpg"}
                        alt="cover photo"
                      /> */}
                  {/* <Image
                        layout="fill"
                        quality={75}
                        objectFit="cover"
                        tw="h-32 w-full"
                        src={user.image_cover || "/img/cover_placeholder.jpg"}
                        key={user.image_cover || "/img/cover_placeholder.jpg"}
                      /> */}
                  <div tw="mx-auto h-32 w-full border relative bg-gray-100 mb-4 shadow">
                    <img
                      tw="object-cover h-32 w-full"
                      src={
                        user.profile.image_cover
                          ? user.profile.image_cover
                          : "/img/cover_placeholder.jpg"
                      }
                      key={
                        user.profile.image_cover || "/img/cover_placeholder.jpg"
                      }
                      alt="coverphoto"
                    />
                  </div>
                </div>

                <FormLabel
                  htmlFor="image_cover"
                  type="button"
                  onChange={onSelectCoverFile}
                >
                  <span
                    tw="cursor-pointer inline-block py-2 px-4 rounded-lg 
                      shadow text-button bg-primary-800 font-medium hover:border-red-300 focus:outline-none hover:bg-primary-700 duration-75 ease-in-out"
                  >
                    <CamIcon />
                    Buscar imagen
                  </span>
                </FormLabel>

                <div tw="mx-auto w-48 text-primary-400 text-xs text-center mt-1">
                  Haz click y agrega tu portada
                </div>

                <input
                  id="image_cover"
                  type="file"
                  accept="image/*"
                  onChange={onSelectCoverFile}
                  tw="hidden"
                />
              </div>
              {showModalCover && (
                <PictureCropperModal
                  showModal={showModalCover}
                  setShowModal={setShowModalCover}
                  onImageLoaded={onCoverLoaded}
                  onComplete={onCropCoverComplete}
                  onChange={onCropCoverChange}
                  croppedImageUrl={croppedCoverUrl}
                  src={src}
                  crop={cropCover}
                  onSave={saveImage}
                  // eslint-disable-next-line react/jsx-boolean-value
                  cover={true}
                  loading={loadingImage}
                />
              )}
            </FormGroup>
            <FormGroup>
              <FormLabel htmlFor="bio">Sobre mí</FormLabel>
              <span tw="text-primary-400 text-sm mb-2">
                Escribe lo que quieras sobre tí
              </span>
              <FormField
                inputAs="textarea"
                name="bio"
                errors={errors}
                touched={touched}
                style={{
                  whiteSpace: "pre-wrap",
                  overflowY: "hidden",
                }}
                rows={6}
              />
            </FormGroup>

            <div tw="w-full mt-10 mb-8 border-b border-primary-700" />

            <div tw="mb-8">
              <h2 tw="text-2xl text-primary-200 font-bold">
                Información personal
              </h2>
              <p tw="text-primary-400 text-sm flex justify-between">
                Mantén actualizada tu información personal.
              </p>
            </div>
            <div tw="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
              <FormGroup>
                <FormLabel htmlFor="first_name">Nombre</FormLabel>
                <FormField
                  name="first_name"
                  errors={errors}
                  touched={touched}
                />
                <ErrorMessage
                  name="first_name"
                  render={(msg) => (
                    <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                  )}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="last_name">Apellido</FormLabel>
                <FormField name="last_name" errors={errors} touched={touched} />
                <ErrorMessage
                  name="last_name"
                  render={(msg) => (
                    <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                  )}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="location_country">País</FormLabel>
                <FormField
                  name="location_country"
                  errors={errors}
                  touched={touched}
                  // value={user.profile.location_country}
                />
                <ErrorMessage
                  name="location_country"
                  render={(msg) => (
                    <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                  )}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="location_city">Ciudad</FormLabel>
                <FormField
                  name="location_city"
                  errors={errors}
                  touched={touched}
                  // value={user.profile.location_city}
                />
                <ErrorMessage
                  name="location_city"
                  render={(msg) => (
                    <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                  )}
                />
              </FormGroup>
            </div>

            <FormGroup>
              <FormLabel htmlFor="website">Website</FormLabel>
              <FormField name="website" errors={errors} touched={touched} />
              <ErrorMessage
                name="website"
                render={(msg) => (
                  <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                )}
              />
            </FormGroup>

            <FormGroup lastSibling>
              <div tw="flex">
                <SubmitButton type="submit" isSubmitting={isSubmitting}>
                  Actualizar perfil
                </SubmitButton>
              </div>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditProfile;

const Tags = ({ tags, onAdditionTag, tagsSelected }) => {
  const selectedIds = tagsSelected.map((tag) => tag.id);
  const filtered = tags.filter((tag) => !selectedIds.includes(tag.id));
  return (
    <div tw="">
      {/* Categories / Tags */}
      {filtered.map((tag) => (
        <span
          tw="inline-block bg-background-secondary rounded-full px-3 py-1 text-sm font-semibold text-primary-400 space-x-2 mx-2 mb-2 hover:border hover:border-secondary-light hover:cursor-pointer"
          key={tag.id}
          onClick={() => onAdditionTag(tag)}
        >
          #{tag.name}
        </span>
      ))}
    </div>
  );
};
function CamIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      tw="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="0" y="0" width="24" height="24" stroke="none" />
      <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
