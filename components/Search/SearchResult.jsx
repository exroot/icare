import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import SecondaryButton from "../Buttons/SecondaryButton";
import tw, { css } from "twin.macro";
import resizeImage from "../../utils/resizeImage";

const SearchResult = ({ result, isFollower, setFollower }) => {
  const headerStyle = css`
    ${tw`pl-4`}
    ${!(result.first_name || result.last_name) ? tw`mt-3` : tw`mt-1`}
  `;
  return (
    <div tw="flex justify-between">
      {/* Left */}
      <div tw="flex content-center px-4 py-4">
        {/* image / avatar */}
        <div tw="h-12 w-12 mt-1 relative overflow-hidden rounded-full">
          {/* <Image
            key={result.profile_picture || "/img/avatar_placeholder.png"}
            src={result.profile_picture || "/img/avatar_placeholder.png"}
            layout="fill"
            quality={20}
            objectFit="cover"
            alt={"user profile picture"}
          /> */}
          <img
            key={result.profile_picture || "/img/avatar_placeholder.png"}
            alt={`${result.username} profile picture`}
            src={
              result.profile_picture
                ? resizeImage(result.profile_picture, [50, 50])
                : "/img/avatar_placeholder.png"
            }
            tw="object-cover h-full w-full"
          />
        </div>
        {/* User data */}
        <div css={headerStyle}>
          <div tw="font-bold text-text-darker hover:cursor-pointer hover:underline">
            <Link href={`/${result.username}`} passHref>
              <a>@{result.username}</a>
            </Link>
          </div>
          <div tw="text-text-dark">
            {result.first_name} {result.last_name}
          </div>
        </div>
      </div>
      {/* Right */}
      <div tw="px-4 py-4">
        <SecondaryButton type="link" href={`/${result.username}`}>
          <div tw="flex">
            <span tw="text-sm sm:text-base">View profile</span>
            <FaAngleRight tw="mt-1 ml-2" size={16} />
          </div>
        </SecondaryButton>

        {/* {!isFollower ? (
            <PrimaryButton onClick={() => setFollower((prev) => !prev)}>
              Followsss
            </PrimaryButton>
          ) : (
            <SecondaryButton onClick={() => setFollower((prev) => !prev)}>
              Following
            </SecondaryButton>
          )} */}
      </div>
    </div>
  );
};

export default SearchResult;
