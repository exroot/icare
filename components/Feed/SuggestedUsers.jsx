/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "../../lib/client";
import resizeImage from "../../utils/resizeImage";
import SuggestedUsersSkeleton from "./SuggestUsersSkelekton";
import useUser from "../../lib/useUser";
import tw, { css } from "twin.macro";

const SuggestedUsers = ({ suggested, loading, error }) => {
  console.log("suggested: ", suggested);
  if (error) {
    return null;
  }
  if (loading) {
    return <SuggestedUsersSkeleton />;
  }
  return (
    <>
      <div tw="flex flex-col items-center pl-3 xl:px-3 space-y-1">
        <div tw="flex flex-col h-full w-full">
          <p tw="text-primary-200 text-sm font-bold uppercase">
            Pueden interesarte:
          </p>
        </div>
        {suggested.map((profile) => (
          <Suggested key={profile.username} profile={profile} />
        ))}
        {/* <p tw="text-sm text-white flex-wrap self-start ml-6 mr-32">
            see more suggestions
          </p> */}
      </div>
    </>
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

const Suggested = ({ profile }) => {
  const [followed, setFollowed] = useState(false);
  const { user: userLogged } = useUser();

  const followUser = async () => {
    if (!followed) {
      await axios({
        url: `/profiles/${profile.username}/following/`,
        method: "POST",
        body: {
          follower: userLogged.id,
          followed: profile.id,
        },
      });
      setFollowed(true);
    } else {
      // action: unfollow user
      await axios({
        url: `/profiles/${profile.username}/following/`,
        method: "DELETE",
      });
      setFollowed(false);
    }
  };
  const followStyle = css`
    ${tw`px-4 text-xs xl:text-sm py-1 bg-accent border border-accent rounded-full hover:bg-accent-hover-outline duration-200 ease-in-out text-gray-100`}
  `;
  const followedStyle = css`
    ${tw`px-4 text-xs xl:text-sm py-1 bg-transparent border border-accent text-accent rounded-full hover:bg-accent-hover-outline duration-200 ease-in-out`}
  `;
  return (
    <div tw="w-full flex items-center bg-primary-800 hover:bg-primary-700 pl-2 xl:pl-4 cursor-pointer duration-100 ease-in rounded-lg z-10">
      <div tw="flex items-center">
        <img
          tw="h-6 w-6 xl:h-10 xl:w-10 rounded-full flex align-middle self-center border md:border-2"
          src={
            profile.image_avatar
              ? profile.image_avatar
              : "/img/avatar_placeholder.png"
          }
          alt={`${profile.username}'s avatar`}
        />
        {/* {console.log("profile: ", profile.image_avatar)} */}
      </div>

      <div tw="flex-grow p-3 w-2">
        <Link href={`/${profile.username}`} passHref>
          <a tw="block text-xs xl:text-sm text-primary-200 font-bold leading-tight hover:underline duration-75 ease-in-out truncate">
            {nameParser(
              profile.first_name,
              profile.last_name,
              profile.username
            )}
          </a>
        </Link>
        <p tw="text-xs xl:text-sm text-primary-400 leading-normal truncate">{`@${profile.username}`}</p>
      </div>

      {/* Button */}
      <div tw="hidden xl:block p-2">
        <button
          css={followed ? followStyle : followedStyle}
          type="button"
          onClick={followUser}
        >
          {followed ? "Siguiendo" : "Seguir"}
        </button>
      </div>
    </div>
  );
};

export default SuggestedUsers;
