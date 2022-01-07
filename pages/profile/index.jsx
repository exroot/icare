import React from "react";
import Head from "next/head";
import useUser from "../../lib/useUser";
import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";
import ProfileCard from "../../components/Profile/Profile";
import "twin.macro";

const Profile = () => {
  const { user, isLoading } = useUser({ redirectTo: "/login" });

  if (isLoading || user.is_logged_in === false) {
    return (
      <>
        <Head>
          <title>iCare</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLoader />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>iCare - Perfil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Layout> */}
      <ProfileCard profile={user.profile} />
      {/* </Layout> */}
    </>
  );
};

export default Profile;
