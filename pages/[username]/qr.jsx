/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { RiShareLine } from "react-icons/ri";
import axios from "axios";
import QRCodeThing from "qrcode.react";
import TabMenu from "../../components/Navigation/TabNavigator";
import { ButtonCTA as FollowButton } from "../../components/Buttons/ButtonCTA";
import {
  ButtonPrimary as EditButton,
  ButtonPrimary as ShareButton,
} from "../../components/Buttons/ButtonPrimary";
import { ButtonSecondary as UnfollowButton } from "../../components/Buttons/ButtonSecondary";
import TopNavbar from "../../components/Navigation/TopNavbar";
import AuthModal from "../../components/Modals/AuthModal";
import ShareModal from "../../components/Modals/ShareModal";
import BottomNavigation from "../../components/Navigation/BottomNavigation";
import useUser from "../../lib/useUser";
import axiosClient from "../../lib/client";
import SEOProfile from "../../components/SEOProfile";
import NotFoundPage from "../../components/404";
import { SHOUTMOCardWithPhoto } from "../../components/EmbedOverlays";
import "twin.macro";

const ProfileLinks = ({ data }) => {
  const linkz = [
    {
      title: "Info",
      path: `/${data.profile.username}`,
    },
    {
      title: "Links",
      path: `/${data.profile.username}/links`,
    },
    {
      title: "QR Code",
      path: `/${data.profile.username}/qr`,
    },
    {
      title: "Shoutouts",
      path: `/${data.profile.username}/shoutouts`,
    },
  ];
  const [buttonText, setButtonText] = useState("Following");
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [followingStatus, setFollowingStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const isUser =
    user && user.is_logged_in && user.username === data.profile.username;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      (async () => {
        let params = {};
        if (user) {
          params = {
            url: `/profiles/${data.profile.username}`,
            method: "GET",
          };
        } else {
          params = {
            url: `/profiles/${data.profile.username}`,
            method: "GET",
            headers: {},
          };
        }
        const { data: responseData } = await axiosClient(params);
        if (isMounted && responseData.data.following) {
          setFollowingStatus(true);
        }
      })();
    }
    return () => {
      isMounted = false;
    };
  }, [user]);

  const followAction = async () => {
    try {
      if (user.is_logged_in === false) {
        // redirectTo(`/login?next=${profile.username}`);
        setShowModal(true);
        return;
      }
      setLoading(true);
      if (!followingStatus) {
        // action: follow user
        await axiosClient({
          url: `/profiles/${data.profile.username}/follows/`,
          method: "POST",
          body: {
            follower: user.id,
            followed: data.profile.id,
          },
        });
        setFollowingStatus(true);
        setLoading(false);
      } else {
        // action: unfollow user
        await axiosClient({
          url: `/profiles/${data.profile.username}/follows/`,
          method: "DELETE",
        });
        setFollowingStatus(false);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };
  if (data.notFound) {
    //  Show profile doesnt exist
    return (
      <>
        <SEOProfile profile={null} />
        <NotFoundPage />
      </>
    );
  }
  return (
    <>
      {/* background body */}
      <div tw="min-h-screen bg-black py-24 flex flex-col justify-center sm:py-12">
        <TopNavbar />
        {/* card body */}
        <div tw="relative sm:max-w-xl sm:mx-auto w-full">
          {/* <div tw="relative px-4 bg-black sm:p-20 text-white"> */}
          <div tw="relative px-4 bg-black sm:p-10 text-white">
            {/* start card */}
            <div tw="max-w-md mx-auto">
              <TopSection
                avatar={data.profile.image_avatar}
                firstname={data.profile.first_name}
                lastname={data.profile.last_name}
                username={data.profile.username}
              />
              <div tw="w-full mx-auto flex justify-between space-x-2 pb-4">
                {!isUser ? (
                  !followingStatus ? (
                    <FollowButton isSubmitting={loading} onClick={followAction}>
                      Follow
                    </FollowButton>
                  ) : (
                    <UnfollowButton
                      onMouseEnter={() => setButtonText("Unfollow")}
                      onMouseLeave={() => setButtonText("Following")}
                      isSubmitting={loading}
                      onClick={followAction}
                    >
                      {buttonText}
                    </UnfollowButton>
                  )
                ) : (
                  <EditButton anchor href="/settings">
                    <span tw="flex justify-center pt-1">Edit Profile</span>
                  </EditButton>
                )}
                <ShareButton onClick={() => setShowShareModal(true)}>
                  <span tw="flex justify-center">
                    <RiShareLine tw="mr-1 mt-1" />
                    Share
                  </span>
                </ShareButton>
              </div>
            </div>
            <TabMenu links={linkz} centered responsive={false} />
            <div tw="py-4">
              {/* <SHOUTMOCardWithPhoto user={data.profile} /> */}
              <QRCodeThing
                tw="mx-auto border-4 border-gray-100 rounded"
                id="qrcode"
                value={`${process.env.NEXT_PUBLIC_CLIENT_URL}${data.profile}`}
                size={250}
                bgColor="#CBD5E0"
                fgColor="#000"
                level="L"
                includeMargin={false}
                renderAs="svg"
              />
            </div>
          </div>
          {/* end card  */}
        </div>
        <AuthModal showModal={showModal} setShowModal={setShowModal} />
        <ShareModal
          showModal={showShareModal}
          setShowModal={setShowShareModal}
          profile={{
            username: data.profile.username,
          }}
        />
        <BottomNavigation />
      </div>
    </>
  );
};

function TopSection({ firstname, lastname, username, avatar }) {
  return (
    <>
      <div tw="pb-4">
        <div tw="flex flex-col mx-auto w-full">
          <div tw="flex flex-col mx-auto space-y-2 items-center">
            <Avatar src={avatar} username={username} />
            <CenteredNameUsername
              firstname={firstname}
              lastname={lastname}
              username={username}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const nameParser = (firstname, lastname, username) => {
  if (firstname && lastname) {
    return `${firstname} ${lastname}`;
  }
  if (!lastname && firstname) {
    return firstname;
  }
  if (!firstname && lastname) {
    return lastname;
  }
  return `${username}'s profile`;
};

function Avatar({ src, username }) {
  return (
    <>
      <div tw="h-24 w-24 rounded-xl border-4 border-gray-500">
        <img src={src} tw="rounded-lg" alt={`${username} avatar.`} />
      </div>
    </>
  );
}

function CenteredNameUsername({ firstname, lastname, username }) {
  return (
    <>
      <div tw="flex flex-col mx-auto h-16 leading-6 sm:text-lg sm:leading-7 items-center">
        <h1 tw="text-3xl font-bold">
          {nameParser(firstname, lastname, username)}
        </h1>
        <p tw="text-xl font-bold text-primary-500 pt-2">{`@${username}`}</p>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  const { username } = params;
  try {
    const { data: response } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/profiles/${username}`
    );
    const { data } = response;
    return { props: { data } };
  } catch (err) {
    console.error(err);
    return { props: { data: { notFound: true, profile: { username: null } } } };
  }
}

export default ProfileLinks;
