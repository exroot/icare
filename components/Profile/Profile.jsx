/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-restricted-properties */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiShareLine, RiEdit2Line, RiLinksLine } from "react-icons/ri";
import { FiArrowLeft } from "react-icons/fi";
import Linkify from "react-linkify";
import { ButtonCTA as FollowButton } from "../Buttons/ButtonCTA";
import {
  ButtonPrimary as EditButton,
  ButtonPrimary as ShareButton,
} from "../Buttons/ButtonPrimary";
import { ButtonSecondary as UnfollowButton } from "../Buttons/ButtonSecondary";
import CategorySection from "./CategorySection";
import FollowSection from "./FollowSection";
import LinksSection from "./LinksSection";
import AuthModal from "../Modals/AuthModal";
import ShareModal from "../Modals/ShareModal";
import resizeImage from "../../utils/resizeImage";
import axios from "../../lib/client";
import useUser from "../../lib/useUser";
import "twin.macro";
import BottomNavigation from "../Navigation/BottomNavigation";
import TopNavbar from "../Navigation/TopNavbar";
import Axios from "axios";

const Profile = ({ profile, followersList = [], followingList = [] }) => {
  const [buttonText, setButtonText] = useState("Following");
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [followingStatus, setFollowingStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const isUser =
    user && user.is_logged_in && user.profile.username === profile.username;
  const router = useRouter();
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      (async () => {
        let params = {};
        if (user) {
          params = {
            url: `/profiles/${profile.username}`,
            method: "GET",
          };
        } else {
          params = {
            url: `/profiles/${profile.username}`,
            method: "GET",
            headers: {},
          };
        }
        const { data } = await axios(params);
        if (isMounted && data.data.following) {
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
        const { data } = await Axios.post(
          Axios.defaults.baseURL + `/${profile.username}/folllowing`,
          {},
          {
            headers: {
              Authorization: localStorage.getItem("access"),
            },
          }
        );
        setFollowingStatus(true);
        setLoading(false);
      } else {
        // action: unfollow user
        // await axios({
        //   url: `/profiles/${profile.username}/following`,
        //   method: "DELETE",
        // });

        const { data } = await Axios.delete(
          Axios.defaults.baseURL + `/${profile.username}/folllowing`,
          {},
          {
            headers: {
              Authorization: localStorage.getItem("access"),
            },
          }
        );
        setFollowingStatus(false);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div tw="bg-black">
      {/* Back Button */}
      <TopNavbar />
      <div tw="hidden sm:block sticky top-6 left-2 w-20 h-0">
        <button
          type="button"
          tw="text-button text-sm block px-4 py-2 bg-accent hover:bg-accent-hover rounded-full"
          onClick={() => router.back()}
        >
          <span tw="flex justify-center">
            <FiArrowLeft tw="mt-1" />
            Back
          </span>
        </button>
      </div>
      {/* Top Bio */}
      <Bio
        cover={
          profile.image_cover
            ? profile.image_cover
            : "https://images.unsplash.com/photo-1567304529193-acc92518efcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=1"
        }
      >
        <div tw="w-full h-full bg-gradient-to-t sm:bg-gradient-to-r from-black via-black to-transparent">
          <div tw="h-screen mx-6 sm:mx-24">
            <div tw="space-y-6 pt-20">
              <div tw="flex flex-col space-y-3 sm:space-y-5">
                <Avatar src={profile.image_avatar} />

                <NameAndUsername
                  firstname={profile.first_name}
                  lastname={profile.last_name}
                  username={profile.username}
                />
              </div>
              <div tw="w-full sm:w-3/4 lg:w-1/2 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                {!isUser ? (
                  !followingStatus ? (
                    <FollowButton isSubmitting={loading} onClick={followAction}>
                      Seguir
                    </FollowButton>
                  ) : (
                    <UnfollowButton
                      onMouseEnter={() => setButtonText("Dejar de seguir")}
                      onMouseLeave={() => setButtonText("Siguiendo")}
                      isSubmitting={loading}
                      onClick={followAction}
                    >
                      {buttonText}
                    </UnfollowButton>
                  )
                ) : (
                  <EditButton anchor href="/settings">
                    <span tw="flex justify-center">
                      <RiEdit2Line tw="mr-1 mt-1" /> Editar perfil
                    </span>
                  </EditButton>
                )}
                <ShareButton onClick={() => setShowShareModal(true)}>
                  <span tw="flex justify-center">
                    <RiShareLine tw="mr-1 mt-1" />
                    Compartir
                  </span>
                </ShareButton>
              </div>

              <div tw="space-y-2">
                <Description description={profile.bio} />
                <GeoPosition
                  country={profile.location_country}
                  city={profile.location_city}
                />
              </div>

              <Follows
                followers={profile.follower_count}
                following={profile.following_count}
              />
            </div>
          </div>
        </div>
      </Bio>
      {/* Bottom section  */}
      {/* <div tw="mx-6 sm:mx-24 mt-40 sm:mt-16">
        <div tw="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:gap-x-72 xl:gap-x-96 mb-8">
          <div tw="">
            <WebsiteSection url={profile.website} username={profile.username} />
            <CategorySection
              categories={[
                "Programming",
                "Gaming",
                "Fitness",
                "Movies",
                "Hiking",
              ]}
            />
          </div>
          <div tw="lg:mt-0">
            <FollowSection />
            <FollowSection />
          </div>
        </div>
        <LinksSection links={profile.social_links} />
        <DefaultSection />
      </div> */}
      <AuthModal showModal={showModal} setShowModal={setShowModal} />
      <ShareModal
        showModal={showShareModal}
        setShowModal={setShowShareModal}
        profile={{
          username: profile.username,
        }}
      />
      <BottomNavigation />
    </div>
  );
};

const Bio = ({ cover, children }) => (
  <div
    tw="w-full h-full bg-local bg-no-repeat pt-20 sm:pt-0 bg-cover text-primary-200"
    css={`
      background-image: url(${cover});
    `}
  >
    {children}
  </div>
);

const Avatar = ({ src }) => (
  <>
    <img
      tw="mx-auto sm:ml-0 rounded-full w-36 h-auto sm:w-32 md:w-40 lg:w-44 sm:h-auto border-4 sm:mr-8 shadow-2xl"
      src={src ? src : "/img/avatar_placeholder.png"}
      alt="user avatar"
    />
  </>
);

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

const NameAndUsername = ({ firstname, lastname, username }) => (
  <>
    <div tw="w-full text-center sm:text-left">
      <h1 tw="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-none">
        {nameParser(firstname, lastname, username)}
      </h1>
      <span tw="text-xl text-primary-400">{`@${username}`}</span>
    </div>
  </>
);

const Description = ({ description }) => {
  if (!description) {
    return null;
  }
  return (
    <p tw="w-full sm:w-3/4 lg:w-1/2 mr-4 text-base lg:text-base">
      {description}
    </p>
  );
};

const geoParser = (country, city) => {
  if (country && city) {
    // Parse country with city
    return `${city}, ${country}`;
  }
  if (!city && country) {
    // Just show country
    return country;
  }
  if (!country && city) {
    // Just show city
    return city;
  }
  return null;
};

const GeoPosition = ({ country, city }) => {
  const geoData = geoParser(country, city);

  if (!geoData) return null;

  return (
    <div tw="w-full sm:w-5/12 flex flex-row items-center text-primary-400">
      <FaMapMarkerAlt size={24} fill="#eb008d" tw="w-4 h-4 align-bottom mr-1" />
      <span>{geoData}</span>
    </div>
  );
};

const fansParser = (fansCount) => {
  if (fansCount < 1000) {
    return fansCount;
  }
  const units = ["k", "M", "G", "T", "P", "E", "Z", "Y"];
  const floor = Math.floor(Math.abs(fansCount).toString().length / 3);
  const value = +(fansCount / Math.pow(1000, floor));
  return +value.toFixed(1) + units[floor - 1];
};

const Follows = ({ following, followers }) => {
  const fansQuantity = fansParser(followers);
  return (
    <div tw="flex flex-row space-x-16 pb-9 justify-center sm:justify-start">
      <div>
        <span tw="text-primary-400 block">Seguidores</span>
        <span tw="text-primary-200 text-4xl font-bold block">
          {fansQuantity}
        </span>
      </div>
      <div>
        <span tw="text-primary-400 block">Siguiendo</span>
        <span tw="text-primary-200 text-4xl font-bold block">{following}</span>
      </div>
    </div>
  );
};

function WebsiteSection({ url, username }) {
  return (
    <>
      <div tw="">
        <div tw="flex flex-row">
          <p tw="text-primary-200 text-3xl font-bold">Website</p>
        </div>
        <div tw="flex flex-row flex-wrap">
          {/* <div tw="rounded-full text-primary-200 bg-gray-400 hover:bg-accent duration-300 font-bold mr-1 md:mr-2 mb-2 px-6 md:px-4 py-2 opacity-90 hover:opacity-100">
              <WebsiteLink />
            </div> */}
          <WebsiteLink url={url} username={username} />
        </div>
      </div>
    </>
  );
}

function WebsiteLink({ url, username }) {
  return (
    <>
      <div tw="flex justify-start md:mt-4">
        <RiLinksLine tw="mt-3 mr-1 w-4 text-lg text-primary-400" />

        <Linkify
          componentDecorator={(decoratedHref, decoratedText, key) => (
            <>
              <a
                target="_blank"
                href={decoratedHref}
                rel="noopener noreferrer"
                key={key}
                style={{
                  color: "#eb008d",
                }}
                tw="mt-2 hover:underline"
              >
                {decoratedText}
              </a>
            </>
          )}
        >
          {url || `https://shoutmo.com/${username}`}
        </Linkify>
      </div>
    </>
  );
}

function DefaultSection() {
  return (
    <>
      <div tw="space-y-4 pt-4 pb-8">
        <div tw="flex flex-row pt-4">
          <p tw="text-primary-200 text-3xl font-bold">Other</p>
        </div>
        <div tw="h-64 flex flex-row bg-gray-500" />
      </div>
    </>
  );
}

export default Profile;
