/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import ReactTags from 'react-tag-autocomplete'
import { useToasts } from 'react-toast-notifications'
import FormGroup from '../../FormsProfile/FormGroup'
import FormLabel from '../../FormsProfile/FormLabel'
import FormField from '../../FormsProfile/FormField'
import { ButtonCTA as SubmitButton } from '../../Buttons/ButtonCTA'
import ProfileSchema from '../../../validations/profile.schema'
import ValidationErrorMessage from '../../FormsProfile/FormErrorField'
import axios from '../../../lib/client'
import useUser from '../../../lib/useUser'
import redirectTo from '../../../utils/redirectTo'
import PictureCropperModal from '../../Modals/PictureCropperModal'
import 'twin.macro'
import Description from '../../Description'

const EditProfile = ({ user: userData }) => {
  const { user, mutateUser } = useUser({ initialData: userData })
  const [tagsSuggestions, setTagsSuggestions] = useState([])
  const [categories, setCategories] = useState([])
  const [croppedImageUrl, setCroppedImageUrl] = useState(null)
  const [croppedCoverUrl, setCroppedCoverUrl] = useState(null)
  const [src, setSrc] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [showModalCover, setShowModalCover] = useState(false)
  const [imageCropped, setImageCropped] = useState(null)
  const [loadingImage, setLoadingImage] = useState(false)
  const [profileCrop, setProfileCrop] = useState({
    unit: '%',
    aspect: 1 / 1,
    width: 90,
    x: 5,
    y: 5,
  })
  const [cropCover, setCropCover] = useState({
    unit: '%',
    aspect: 16 / 9,
    width: 90,
    x: 5,
    y: 5,
  })
  const imageRef = useRef(null)
  const { addToast } = useToasts()
  const [tags, setTags] = useState([
    ...(user.tags.map((tag, idx) => ({
      id: idx,
      name: tag,
    })) || []),
  ])

  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      ;(async () => {
        const { data } = await axios({
          url: '/profile-tags',
          method: 'GET',
          headers: {},
        })
        const suggestions = data.map((tag, idx) => ({
          id: idx,
          name: tag,
        }))
        setTagsSuggestions(suggestions)
      })()
      ;(async () => {
        const { data } = await axios({
          url: '/profile-categories',
          method: 'GET',
          headers: {},
        })
        setCategories(data)
      })()
    }
    return () => {
      isMounted = false
    }
  }, [])
  const handleSubmit = async (values, { setFieldError }) => {
    try {
      values.tags = tags.map((tag) => tag.name)
      delete values.profile_picture
      delete values.cover_picture
      const { data } = await axios({
        method: 'PATCH',
        url: `/profiles/${user.username}/edit`,
        body: values,
      })
      await mutateUser({ is_logged_in: user.is_logged_in, ...data.data }, false)
      // redirectTo('/profile')
      addToast('Profile updated successfully.', {
        appearance: 'success',
        autoDismiss: true,
      })
    } catch (err) {
      console.error(err)
      if (err.response.data.errors.username) {
        setFieldError('username', err.response.data.errors.username)
      }
    }
  }
  const onDeleteTag = (i) => {
    const tagsResult = tags.slice(0)
    tagsResult.splice(i, 1)
    setTags(tagsResult)
  }
  const onAdditionTag = (tag) => {
    const tagsResult = [].concat(tags, tag)
    setTags(tagsResult)
  }
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setSrc(reader.result))
      reader.readAsDataURL(e.target.files[0])
      setShowModal(true)
    }
  }

  const onSelectCoverFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader()
      reader.addEventListener('load', () => setSrc(reader.result))
      reader.readAsDataURL(e.target.files[0])
      setShowModalCover(true)
    }
  }

  const onImageLoaded = useCallback((image) => {
    imageRef.current = image
    const width =
      image.width > image.height ? (image.height / image.width) * 100 : 100
    const height =
      image.height > image.width ? (image.width / image.height) * 100 : 100
    const x = width === 100 ? 0 : (100 - width) / 2
    const y = height === 100 ? 0 : (100 - height) / 2

    const newCrop = {
      unit: '%',
      aspect: 1,
      width: width,
      height: height,
      x,
      y,
    }

    const pixelCrop = {
      unit: 'px',
      aspect: newCrop.aspect,
      x: (newCrop.x * image.width) / 100,
      y: (newCrop.y * image.height) / 100,
      width: (newCrop.width * image.width) / 100,
      height: (newCrop.height * image.height) / 100,
    }

    setProfileCrop(newCrop)
    makeClientCrop(pixelCrop)
    return false
  }, [])

  const onCoverLoaded = (image) => {
    imageRef.current = image
    return makeClientCoverCrop(cropCover)
  }

  const onCropComplete = (crop) => {
    return makeClientCrop(crop)
  }

  const onCropCoverComplete = (crop) => {
    return makeClientCoverCrop(crop)
  }

  const onCropChange = (crop, percentCrop) => {
    return setProfileCrop(crop)
  }

  const onCropCoverChange = (crop, percentCrop) => {
    return setCropCover(crop)
  }

  const makeClientCrop = async (avatarCrop) => {
    console.log({ avatarCrop })
    if (imageRef.current && avatarCrop.width && avatarCrop.height) {
      const croppedImageUrl = await getCropped(
        imageRef.current,
        avatarCrop,
        `profile_avatar.jpg`
      )

      return setCroppedImageUrl(croppedImageUrl)
    }
  }

  const makeClientCoverCrop = async (cropCover) => {
    if (imageRef.current && cropCover.width && cropCover.height) {
      const croppedImageUrl = await getCropped(
        imageRef.current,
        cropCover,
        `profile_cover.jpg`
      )

      return setCroppedCoverUrl(croppedImageUrl)
    }
  }

  const getCropped = (image, crop, fileName) => {
    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    const tmpCanvas = document.createElement('canvas')
    tmpCanvas.width = Math.ceil(crop.width * scaleX)
    tmpCanvas.height = Math.ceil(crop.height * scaleY)

    const ctx = tmpCanvas.getContext('2d')
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
    )

    return new Promise((resolve, reject) => {
      tmpCanvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty')
          return
        }
        blob.name = fileName
        setImageCropped(blob)
        resolve(window.URL.createObjectURL(blob))
      }, 'image/jpeg')
    })
  }

  const saveImage = async (field) => {
    try {
      setLoadingImage(true)
      const form = new FormData()
      form.append(field, new File([imageCropped], imageCropped.name))
      const { data } = await axios({
        method: 'PATCH',
        url: `/profiles/${user.username}/edit`,
        body: form,
        contentType: 'multipart/form-data',
      })
      const fieldName = field === 'cover_picture' ? 'Cover' : 'Profile'
      if (fieldName === 'Cover') {
        setTimeout(() => {
          setShowModalCover(false)
          mutateUser({ ...user, cover_picture: data.data.cover_picture }, false)
          setLoadingImage(false)
        }, 5000)
      } else {
        setTimeout(() => {
          setShowModal(false)
          mutateUser(
            { ...user, profile_picture: data.data.profile_picture },
            false
          )
          setLoadingImage(false)
        }, 3000)
      }
      addToast(`${fieldName} picture updated successfully.`, {
        appearance: 'success',
        autoDismiss: true,
      })
    } catch (err) {
      console.error(err)
      setLoadingImage(false)
    }
  }

  return (
    <>
      {/* FORM START */}
      <Formik
        initialValues={{
          username: user.username,
          first_name: user.first_name || '',
          last_name: user.last_name || '',
          location_country: user.location_country || '',
          location_city: user.location_city || '',
          profile_picture: user.profile_picture || '',
          cover_picture: user.cover_picture || '',
          category: user.category || null,
          website: user.website || '',
          tags: tags.map((tag) => tag.name),
          bio: user.bio || '',
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
                  Profile Information
                </h2>
                <Description tw="text-primary-400 text-sm flex justify-between">
                  Update your profile information, profile and cover photo,
                  profile description, tags, and more. Feel free to customize
                  everything.
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
              <FormLabel htmlFor="profile_picture">Photo</FormLabel>
              <div tw="w-full flex items-center">
                <div tw="w-16 h-16 border rounded-full relative bg-primary-800 mb-4 shadow">
                  <img
                    tw="object-cover w-full h-full rounded-full"
                    src={user.profile_picture || '/img/avatar_placeholder.png'}
                    key={user.profile_picture || '/img/avatar_placeholder.png'}
                    alt={`${user.username} profile`}
                  />
                </div>
                <FormLabel
                  htmlFor="profile_picture"
                  type="button"
                  onChange={onSelectFile}
                >
                  <span tw="cursor-pointer inline-block  ml-4 mb-2 rounded-lg py-2 px-4 bg-primary-800 text-button hover:bg-primary-700 shadow font-medium  focus:outline-none duration-75 ease-in-out">
                    <CamIcon />
                    Change
                  </span>
                </FormLabel>

                <input
                  id="profile_picture"
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
                        src={user.cover_picture || "/img/cover_placeholder.jpg"}
                        alt="cover photo"
                      /> */}
                  {/* <Image
                        layout="fill"
                        quality={75}
                        objectFit="cover"
                        tw="h-32 w-full"
                        src={user.cover_picture || "/img/cover_placeholder.jpg"}
                        key={user.cover_picture || "/img/cover_placeholder.jpg"}
                      /> */}
                  <div tw="mx-auto h-32 w-full border relative bg-gray-100 mb-4 shadow">
                    <img
                      tw="object-cover h-32 w-full"
                      src={
                        user.cover_picture
                          ? user.cover_picture
                          : '/img/cover_placeholder.jpg'
                      }
                      key={user.cover_picture || '/img/cover_placeholder.jpg'}
                      alt="coverphoto"
                    />
                  </div>
                </div>

                <FormLabel
                  htmlFor="cover_picture"
                  type="button"
                  onChange={onSelectCoverFile}
                >
                  <span
                    tw="cursor-pointer inline-block py-2 px-4 rounded-lg 
                      shadow text-button bg-primary-800 font-medium hover:border-red-300 focus:outline-none hover:bg-primary-700 duration-75 ease-in-out"
                  >
                    <CamIcon />
                    Browse Photo
                  </span>
                </FormLabel>

                <div tw="mx-auto w-48 text-primary-400 text-xs text-center mt-1">
                  Click to add cover picture
                </div>

                <input
                  id="cover_picture"
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
              <FormLabel htmlFor="bio">About</FormLabel>
              <span tw="text-primary-400 text-sm mb-2">
                Write a few sentences about yourself.
              </span>
              <FormField
                inputAs="textarea"
                name="bio"
                errors={errors}
                touched={touched}
                style={{
                  whiteSpace: 'pre-wrap',
                  overflowY: 'hidden',
                }}
                rows={6}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="Categories">Categories</FormLabel>
              <span tw="text-sm text-primary-400 mb-2">
                This is relevant for our search tool, your profile will be more
                easier to be found and more likely to appear on results.
              </span>

              <select
                tw="mt-1 appearance-none block w-full bg-primary-700 text-primary-200 truncate font-medium border border-black rounded-lg py-3 px-3 leading-tight 
hover:border-accent duration-75 ease-in-out focus:outline-none"
                name="category"
                value={values.category || 'Select a category'}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                {/* {!user.category ? (
                    <option defaultValue disabled selected tw="py-1">
                      Select a category
                    </option>
                  ) : (
                    <option selected tw="py-1">
                      {user.category}
                    </option>
                  )} */}

                {categories.map((category) => (
                  <option key={category.id} tw="py-1 hover:bg-accent">
                    {category.name}
                  </option>
                ))}
              </select>
              {/* <ReactTags
                  tags={tags}
                  suggestions={tagsSuggestions}
                  onDelete={onDeleteTag}
                  onAddition={onAdditionTag}
                /> */}
            </FormGroup>

            <FormGroup>
              <FormLabel htmlFor="tags">Tags</FormLabel>
              <span tw="text-sm text-primary-400 mb-4">
                Add whatever you want... how you feel?, what you love? add
                anything that could interest you.
              </span>
              <div tw="mt-1">
                <Tags
                  tags={tagsSuggestions}
                  tagsSelected={tags}
                  onAdditionTag={onAdditionTag}
                />
                <ReactTags
                  tags={tags}
                  suggestions={tagsSuggestions}
                  onDelete={onDeleteTag}
                  onAddition={onAdditionTag}
                />
              </div>
            </FormGroup>

            <div tw="w-full mt-10 mb-8 border-b border-primary-700" />

            <div tw="mb-8">
              <h2 tw="text-2xl text-primary-200 font-bold">
                Personal Information
              </h2>
              <p tw="text-primary-400 text-sm flex justify-between">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div tw="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
              <FormGroup>
                <FormLabel htmlFor="first_name">First name</FormLabel>
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
                <FormLabel htmlFor="last_name">Last name</FormLabel>
                <FormField name="last_name" errors={errors} touched={touched} />
                <ErrorMessage
                  name="last_name"
                  render={(msg) => (
                    <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                  )}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="location_country">Country</FormLabel>
                <FormField
                  name="location_country"
                  errors={errors}
                  touched={touched}
                />
                <ErrorMessage
                  name="location_country"
                  render={(msg) => (
                    <ValidationErrorMessage>{msg}</ValidationErrorMessage>
                  )}
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="location_city">City</FormLabel>
                <FormField
                  name="location_city"
                  errors={errors}
                  touched={touched}
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
                  Update profile
                </SubmitButton>
              </div>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default EditProfile

const Tags = ({ tags, onAdditionTag, tagsSelected }) => {
  const selectedIds = tagsSelected.map((tag) => tag.id)
  const filtered = tags.filter((tag) => !selectedIds.includes(tag.id))
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
  )
}
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
  )
}
