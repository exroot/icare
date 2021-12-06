import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
  username: Yup.string().required("Please enter your username."),
  first_name: Yup.string(),
  last_name: Yup.string(),
  location_country: Yup.string(),
  location_city: Yup.string(),
  // profile_picture: Yup.string().url("Please enter a valid url.").nullable(),
  // cover_picture: Yup.string().url("Please enter a valid url.").nullable(),
  website: Yup.string().url("Please enter a valid url."),
  bio: Yup.string().nullable(),
});

export default ProfileSchema;
