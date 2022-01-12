/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronRight, FaAngleRight, FaRegCreditCard } from "react-icons/fa";
import tw, { css } from "twin.macro";
import { ShareButtonForCard } from "../../components/Buttons/ShareButtonForCard";
import { FollowButtonForCard } from "../../components/Buttons/FollowButtonForCard";
import { UnfollowButtonForCard } from "../../components/Buttons/UnfollowButtonForCard";
import { EditButtonForCard } from "../../components/Buttons/EditButtonForCard";
import { ButtonCTA as FollowButton } from "../../components/Buttons/ButtonCTA";
import {
  ButtonPrimary as EditButton,
  ButtonPrimary as ShareButton,
} from "../../components/Buttons/ButtonPrimary";
import { ButtonSecondary as UnfollowButton } from "../../components/Buttons/ButtonSecondary";
import useShoutouts from "../../lib/useShoutoutsFetcher";
import NotFoundPage from "../../components/404";
import TopNavbar from "../../components/Navigation/TopNavbar";
import AuthModal from "../../components/Modals/AuthModal";
import ShareModal from "../../components/Modals/ShareModal";
import BottomNavigation from "../../components/Navigation/BottomNavigation";
import useUser from "../../lib/useUser";
import axiosClient from "../../lib/client";
import SEOProfile from "../../components/SEOProfile";
import PlatformIcon from "../../components/PlatformIcon";
import ShoutoutsContainer from "../../components/Profile/ShoutoutsContainer";
import { FiArrowLeft } from "react-icons/fi";
import { RiShareLine, RiEdit2Line } from "react-icons/ri";
import { event } from "../../lib/gtag";

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

const ProfilePage = ({ data, referrer }) => {
  const [buttonText, setButtonText] = useState("Siguiendo");
  const [showModal, setShowModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [followingStatus, setFollowingStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const isUser =
    user && user.is_logged_in && user.profile.username === data.username;

  // useEffect(() => {
  //   console.log("data: ", data);
  //   event("profileview", data.profile.username, "referrer", referrer);
  //   if (referrer) {
  //     axiosClient({
  //       url: `/traffic/profile-page-views`,
  //       method: "POST",
  //       body: {
  //         user: data.profile.username,
  //         referrer,
  //       },
  //     });
  //   }
  // }, []);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      (async () => {
        let params = {};
        if (user) {
          params = {
            url: `/profiles/${data.username}`,
            method: "GET",
          };
        } else {
          params = {
            url: `/profiles/${data.username}`,
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
        const resp = await axiosClient({
          url: `/profiles/${data.username}/following`,
          method: "POST",
          body: {},
        });
        setFollowingStatus(true);
        setLoading(false);
      } else {
        console.log("no following status: ", data.username);
        // action: unfollow user
        const resp = await axiosClient({
          url: `/profiles/${data.username}/following`,
          method: "DELETE",
        });
        setFollowingStatus(false);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      throw err;
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
    <div tw="bg-black">
      <SEOProfile profile={data} />
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
          data.image_cover
            ? data.image_cover
            : "https://images.unsplash.com/photo-1567304529193-acc92518efcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1656&q=1"
        }
      >
        <div tw="w-full h-full bg-gradient-to-t sm:bg-gradient-to-r from-black via-black to-transparent">
          <div tw="h-screen mx-6 sm:mx-24">
            <div tw="space-y-6 pt-20">
              <div tw="flex flex-col space-y-3 sm:space-y-5">
                <Avatar src={data.image_avatar} />

                <NameAndUsername
                  firstname={data.first_name}
                  lastname={data.last_name}
                  username={data.username}
                />
              </div>
              <div tw="w-full sm:w-3/4 lg:w-1/2 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                {!isUser ? (
                  !followingStatus ? (
                    <FollowButton isSubmitting={loading} onClick={followAction}>
                      Follow
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
                <Description description={data.bio} />
                <GeoPosition
                  country={data.location_country}
                  city={data.location_city}
                />
              </div>

              <Follows
                followers={data.follower_count}
                following={data.following_count}
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
          username: data.username,
        }}
      />
      <BottomNavigation />
    </div>
  );
};

function Avatar({ src, username }) {
  return (
    <>
      <img
        tw="object-contain w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 sm:border-4 border-gray-500"
        src={src || "/img/avatar_placeholder.png"}
        alt={`${username} avatar.`}
      />
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { username },
    req: {
      headers: { referer },
    },
  } = context;
  try {
    const { data: response } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/profiles/${username}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return {
      props: { data: response.data, referrer: referer || null },
    };
  } catch (err) {
    return { props: { data: { notFound: true, profile: { username: null } } } };
  }
}

function TipMeButton() {
  return (
    <>
      <button
        type="button"
        tw="flex items-center place-content-between px-4 py-2 text-base text-white font-semibold rounded-md border border-transparent hover:text-white bg-green-500 hover:bg-green-500 hover:border-white w-full focus:outline-none outline-none"
      >
        <FaRegCreditCard tw="text-white" />
        <p>Send Tip</p>
        <FaChevronRight tw="text-white" />
      </button>
    </>
  );
}

const LinksSection = ({ withTitle = true, links, profile }) => {
  if (!links || !links.length) {
    return <MessageBox text="This user hasn't added any links yet." />;
  }
  return (
    <section>
      {withTitle && <p tw="text-button text-3xl font-bold">Links</p>}

      <div tw="w-full flex flex-col space-y-2">
        {profile.connected_account ? <TipMeButton /> : null}
        {links.map((link) => (
          <LinkButton
            platformName={link.platform_name}
            url={link.user_url}
            key={link.id}
          />
        ))}
      </div>
    </section>
  );
};

function ProfileCardTabs({ links, profile }) {
  const { shoutoutsLoading, shoutouts } = useShoutouts(profile);

  const TABBAR_ITEM = {
    ShowUsersShoutouts: (
      <ShoutoutsContainer
        shoutoutsLoading={shoutoutsLoading}
        shoutouts={shoutouts}
        profile={profile}
      />
    ),
    ShowUsersLinks: (
      <LinksSection links={links} withTitle={false} profile={profile} />
    ),
  };
  const [selectedItem, setSelectedItem] = useState("ShowUsersLinks");

  return (
    <>
      <div tw="flex flex-wrap w-full text-white space-y-2">
        <Tabs setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
        <div tw="w-full">{TABBAR_ITEM[selectedItem]}</div>
      </div>
    </>
  );
}

function Tabs({ setSelectedItem, selectedItem }) {
  const activeStyle = css`
    ${tw`text-accent`}
  `;
  const inactiveStyle = css`
    ${tw`text-gray-600`}
  `;

  return (
    <>
      <div tw="w-full pt-3 flex space-x-4">
        <button
          tw="w-1/2 text-xl py-1 font-bold uppercase tracking-wide leading-6 sm:text-lg sm:leading-7 text-gray-600 hover:text-accent border-b-2 border-transparent hover:border-b-2 hover:border-accent focus:outline-none transition duration-300 ease-in"
          type="button"
          css={selectedItem === "ShowUsersLinks" ? activeStyle : inactiveStyle}
          onClick={() => setSelectedItem("ShowUsersLinks")}
        >
          Links
        </button>
        <button
          tw="w-1/2 text-xl py-1 font-bold uppercase tracking-wide leading-6 sm:text-lg sm:leading-7 text-gray-600 hover:text-accent border-b-2 border-transparent hover:border-b-2 hover:border-accent focus:outline-none transition duration-300 ease-in"
          type="button"
          css={
            selectedItem === "ShowUsersShoutouts" ? activeStyle : inactiveStyle
          }
          onClick={() => setSelectedItem("ShowUsersShoutouts")}
        >
          Shoutouts
        </button>
      </div>
    </>
  );
}

function LinkButton({ platformName, url }) {
  const iconSize = 24;
  return (
    <>
      <a
        target="_blank"
        href={url}
        rel="noopener noreferrer"
        tw="py-2 px-4 cursor-pointer text-primary-200 bg-primary-700 border border-primary-900 hover:border-accent font-semibold 
          rounded-md flex flex-row w-full justify-between
          transition duration-100 ease-in-out transform shadow-2xl w-full"
      >
        <div tw="">
          <PlatformIcon icon={platformName} />
        </div>
        <div tw="items-center">{platformName}</div>
        <div tw="">
          <FaAngleRight size={iconSize} />
        </div>
      </a>
    </>
  );
}

function MetaSection({ following, followers, profile }) {
  return (
    <>
      <div tw="flex flex-col pt-3">
        <div tw="flex flex-row flex-wrap w-full place-items-start space-x-5">
          <div tw="flex flex-row space-x-1 items-center">
            <p tw="text-white font-bold">{followers}</p>
            <p tw="text-white">Seguidores</p>
          </div>
          <div tw="flex flex-row space-x-1 items-baseline">
            <p tw="text-white font-bold">{following}</p>
            <p tw="text-white">Siguiendo</p>
          </div>
          {/* <div tw="flex flex-row space-x-1 items-center">
            <p tw="text-white font-bold">
              {profile.shoutouts_count ? profile.shoutouts_count : "0"}
            </p>
            <p tw="text-white">Shouts</p>
          </div> */}
        </div>
      </div>
    </>
  );
}

function BioSection({ bio }) {
  return (
    <>
      {/* <p tw="mt-3 text-gray-400 text-sm text-justify">{bio}</p> */}
      {/* <p tw="mt-3 text-gray-400">{bio}</p> */}
      <p tw="w-full mt-3 text-gray-400 text-sm break-words">{bio}</p>
    </>
  );
}

function MessageBox({ text }) {
  return (
    <>
      <div tw="flex flex-row w-full p-2 mb-6 bg-primary-900 rounded-lg">
        <div tw="w-full">
          <h3 tw="block text-center text-text-dark font-bold">{text}</h3>
        </div>
      </div>
    </>
  );
}
export default ProfilePage;
