import React from "react";
import { useState, useEffect } from "react";

import tw, { css } from "twin.macro";

import PropTypes from "prop-types";

import Transition from "../../components/Transitions/Transition";
import SHOUTMOlogo from "../../components/Logo/LogoMediumPink";
import ShoutoutModal from "../../components/ShoutoutModal.jsx";

import {
  FaAngleDown,
  FaAngleRight,
  FaRegCircle,
  FaTwitter,
  FaRegWindowClose,
} from "react-icons/fa";

import { RiSearchLine } from "react-icons/ri";

const iconSize = 24;

let user = {
  podcast_owner: "Freeman",
  podcast_title: "The Free Zone w/ Freeman Fly",
  podcast_banner:
    "https://images.unsplash.com/photo-1550424844-f7b914439c1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80", // profile_picture: "https://www.placecage.com/300/300",
  profile_picture:
    "https://images.unsplash.com/photo-1542908220-73cc48ad0af3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",

  podcast_website: "https://www.example.com",
  podcast_bio:
    "This is just some words for the podcast description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper. Mattis rhoncus urna neque viverra justo nec ultrices dui. Habitant morbi tristique senectus et.",
  related_podcast_img: "https://picsum.photos/200",
};

/* 

***** COLORS *****

    Light Pink {
        HEX: #fa199d
        RGBA: rgba(250, 25, 157, 1)
    }

    Dark Pink {
        HEX: #2c0b30
    }

    Cyan {
      HEX: #3ce2e5
      RGBA: rgba(62, 226, 229, 1)
    }
*/

export default function Basic() {
  return (
    <>
      <Wrapper>
        <PageTitle title="Brand Style Guide" />
        <div tw="flex flex-col space-y-12">
          <TestLayoutSection />
          <ButtonsSection />
          <ColorsSection />
          <PhotosSection />
          <GlowTextSection />
          <UserCards />
          {/* <ScrollableList /> */}

          <ProfileCardSection />
          <FakeModalSection />
          <ModalExample />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = ({ children }) => {
  return (
    <>
      <div tw="h-screen flex overflow-hidden bg-background-secondary">
        <div tw="flex flex-col w-0 flex-1 overflow-hidden">
          <main
            tw="flex-1 relative overflow-y-auto focus:outline-none"
            id="main"
          >
            <Transition show={true}>{children}</Transition>
          </main>
        </div>
      </div>
    </>
  );
};

const ToggleTheme = () => {
  const [theme, setTheme] = useState(false);
  const handleThemeChange = () => {
    const actualTheme = localStorage.getItem("theme") ?? "light";
    const newTheme = actualTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    newTheme === "light" ? setTheme(true) : setTheme(false);
  };

  useEffect(() => {
    const actualTheme = localStorage.getItem("theme") ?? "light";
    document.documentElement.setAttribute("data-theme", actualTheme);
    localStorage.setItem("theme", actualTheme);
    setTheme(actualTheme === "light" ? true : false);
  }, []);

  const styles = css`
    ${tw`absolute block w-6 h-6 rounded-full bg-background-primary border-4 appearance-none cursor-pointer focus:outline-none`}
    border-color: var(--primary-light);
    transition: all 0.5s;
    &:checked {
      @apply: right-0 border-green-400;
      right: 0;
      border-color: var(--secondary-light);
    }
  `;
  return (
    <div tw="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        css={styles}
        defaultChecked={theme}
        onClick={handleThemeChange}
        value={theme}
      />
      <label
        htmlFor="toggle"
        tw="block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer text-gray-400"
      >
        theme
      </label>
    </div>
  );
};

// Header Title
// Sub Title
// normal text size
// social link buttons
// color scheme
// shoutmo logo for Navbar
// photos
// cards

function GlowTextSection() {
  return (
    <>
      <div tw="mx-4 space-y-6 h-80">
        <SectionTitle title="Text, font styles, etc" />
        <div tw="flex flex-row p-3 space-x-3">
          <GlowText text="SHOUTMO" />
          <GlowText text="SHOUTMO" />
          <GlowText text="SHOUTMO" />
          <GlowText text="SHOUTMO" />
        </div>
      </div>
    </>
  );
}

function GlowText({ hero, text }) {
  const glowStyle = css`
    ${
      "" /* ${hero ? "box-shadow: 0 .3rem 1rem rgba(236, 0, 142, 0.5);" : tw`shadow`} */
    }

    ${tw`
      inline-block
      
      py-3 px-5
      uppercase
      no-underline
      font-bold
      text-white
      tracking-wide
  `}

    ${"" /* button text color */}
    ${"color: #ff27e1;"}
    ${"text-shadow: 0 0 0px #ff27e1, 0 0 2px #ff27e1, 0 0 3px #ff27e1;"}
  `;
  return (
    <>
      <p tw="font-extrabold text-2xl" css={glowStyle}>
        {text || "text"}
      </p>
    </>
  );
}

function ButtonsSection() {
  return (
    <>
      <div tw="mx-4 space-y-6 h-80">
        <SectionTitle title="Buttons" />
        <div tw="flex flex-row p-3 space-x-3">
          <ShareButton />
          <Tag />
          <NeonButtonClear text="clear button" />
        </div>
      </div>
    </>
  );
}

function Tag() {
  return (
    <>
      <button
        // tw="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 font-semibold rounded-full px-4 py-2 leading-normal">
        tw=" mb-2 ml-3 px-2 py-1 rounded text-sm text-white"
        style={{ backgroundColor: "rgb(0,0,0,0.4)" }}
      >
        tag
      </button>
    </>
  );
}

function NeonButtonClear({ buttonBorder, text }) {
  const glowStyle = css`
    ${tw`
      inline-block
      py-3 px-5
      uppercase
      no-underline
      font-bold
      text-white
      tracking-wide
      transition duration-100 ease-in-out
      hover:cursor-pointer
      focus:outline-none
      shadow
  `}

    ${"" /* other colors */}

    ${"" /* colors I might use later */}
    ${"" /*  #1715ff  */}
    ${"" /* rgba(236, 0, 142, 1) */}

    ${"" /* button text color */}

    ${"color: #ff27e1;"}
    ${"text-shadow: 0 0 1px #ff27e1, 0 0 1px #ff27e1, 0 0 1px #ff27e1;"}
    ${"box-shadow: 0 0 1px #ff27e1, 0 0 1px #ff27e1, 0 0 1px #ff27e1;"}

    ${"" /* border styles  */}

    ${"border: 2px solid #ff27e1;"}
    ${"border-opacity: .3;"}
    ${"border-radius: 5px;"}

    ${"" /* hover styles  */}

     &:hover {
      ${"text-shadow: 0 0 1px #ff27e1, 0 0 3px #ff27e1, 0 0 5px #ff27e1;"}
      ${"box-shadow:0px 0px 4px 1px #ff27e1, inset 0px 0px 2px 1px #ff27e1;"}
    }
    &::after {
    }
  `;

  return (
    <>
      <button href="#" css={glowStyle}>
        {text || "button"}
      </button>
    </>
  );
}

function ColorsSection() {
  return (
    <>
      <div tw="mx-4 space-y-6 h-80">
        <SectionTitle title="Colors" />
        <div tw="flex flex-row p-3 space-x-3 ">
          <ColorBox color="purple" />
          <ColorBox color="blue" />
        </div>
      </div>
    </>
  );
}

function ColorBox() {
  return (
    <>
      <div tw="bg-purple-400 w-16 h-16 rounded p-2"></div>
    </>
  );
}

function PhotosSection() {
  return (
    <>
      <div tw="mx-4 space-y-6 h-1/2">
        <SectionTitle title="Photos" />
        <PodcastAlbumnCoverAlt />
        <PodcastAlbumnCoverAlt />
        <ProfileAvatar />
        <ProfileBanner />
        <ProfileCardTopSection />
      </div>
    </>
  );
}

function PodcastAlbumnCoverAlt() {
  return (
    <>
      <div tw="mx-4 space-y-6 h-80">
        <div tw="md:flex-shrink-0">
          <img
            tw="h-full w-full object-contain w-48 h-48 md:w-72 md:h-72 rounded-lg shadow"
            src={user.profile_picture}
            alt="podcast album cover"
          />
        </div>
      </div>
    </>
  );
}

function ProfileAvatar() {
  return (
    <>
      <div tw="mx-4 space-y-6 h-80">
        <div tw="md:flex-shrink-0">
          <img
            tw="h-full w-full object-contain w-48 h-48 md:w-72 md:h-72 rounded-lg shadow"
            src={user.profile_picture}
            alt="podcast album cover"
          />
        </div>
      </div>
    </>
  );
}

function ProfileBanner() {
  return (
    <>
      <div tw="mx-4 space-y-6 h-80">
        <div tw="md:flex-shrink-0">
          <img
            tw="h-full w-full object-contain w-48 h-48 md:w-72 md:h-72 rounded-lg shadow"
            src={user.profile_picture}
            alt="podcast album cover"
          />
        </div>
      </div>
    </>
  );
}

function ProfileCardTopSection() {
  return (
    <>
      {/* <!-- start top card component --> */}
      <div tw="text-base leading-6 sm:text-lg sm:leading-7">
        <div tw="rounded rounded-xl overflow-hidden">
          <img
            // src="https://i.imgur.com/dYcYQ7E.png"
            src={user.profile_picture}
            tw="w-full h-48 object-cover"
          />
          <div tw="flex justify-start ml-4">
            <img
              src="https://i.imgur.com/8Km9tLL.jpg"
              tw="w-36 h-36 rounded-full border-solid border-pink-600 border-4 -mt-16"
              style={{
                borderColor: "#ff27e1",
              }}
            />
          </div>
        </div>
      </div>
      {/* <!-- end top card component --> */}
    </>
  );
}

function ExtraButtonType() {
  return (
    <>
      <p>Photos</p>
    </>
  );
}

function NetworkLinks(props) {
  return (
    <>
      <div tw="mx-4 space-y-6 h-80">
        <SectionTitle title="Network Link" />
        <Link name="twitter" />
      </div>
    </>
  );
}

function Link(props) {
  // add logo for link
  if (props.network === "Twitter") {
    console.log("Twitter");
  }
  if (props.network === "LinkedIn") {
    console.log("LinkedIn");
  }

  return (
    <>
      <button
        tw="flex flex-row w-full text-white hover:text-white bg-purple-500 hover:bg-purple-400 border border-purple-500 hover:border-purple-400 font-semibold rounded-xl px-4 py-3 leading-normal justify-between mb-3"
        //   onClick={buttonAction}
      >
        <div tw="">
          <FaTwitter size={iconSize} />
        </div>
        <div tw="items-center">{props.name}</div>
        <div tw="">
          <FaAngleRight size={iconSize} />
        </div>
      </button>
    </>
  );
}

function SectionTitle(props) {
  return (
    <>
      {/* <p tw="font-bold text-2xl leading-tight text-text-dark">
        {props.title || "title_"}
      </p> */}

      <div tw="mb-2 bg-background-primary p-4 rounded-xl">
        <p tw="font-bold text-4xl text-text-dark"> {props.title || "title_"}</p>
      </div>
    </>
  );
}

function PageTitle(props) {
  return (
    <>
      <div tw="sticky top-0 mb-12 bg-background-primary px-4 py-2 shadow">
        <div tw="flex flex-row ">
          <p tw="align-middle self-center text-5xl -mt-2 mr-2 text-text-darker">
            <span
              style={{
                color: "#ff27e1",
                fontFamily: "basiclazer",
              }}
            >
              SHOUTMO
            </span>
          </p>
          <p tw="font-bold text-4xl text-text-dark align-middle self-center ml-2">
            {props.title || "title_"}
          </p>
          <div tw="align-middle self-center ml-2">
            <ToggleTheme />
          </div>
        </div>
      </div>
    </>
  );
}

function ShareButton() {
  return (
    <>
      <button tw="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 font-semibold rounded-full px-4 py-2 leading-normal">
        Share
      </button>
    </>
  );
}

function UserCards() {
  return (
    <>
      <div tw="mx-4 space-y-6 h-80">
        <SectionTitle title="User Card" />
        <UserCard />
      </div>
    </>
  );
}

function ModalExample() {
  return (
    <>
      <div
        tw="h-screen"
        css={`
          background-image: linear-gradient(25deg, #fa199d -60%, #2c0b30 85%);
        `}
      >
        <SectionTitle title="Modal Example" />
        <ShoutoutModal />
      </div>
    </>
  );
}

function TestLayoutSection() {
  return (
    <>
      <SectionTitle title="TestLayoutSection" />

      <div
        tw="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
        css={`
          background-image: linear-gradient(25deg, #fa199d -60%, #2c0b30 85%);
        `}
      >
        {/* start modal  */}
        <div tw="sm:max-w-xl sm:mx-auto">
          <div
            tw="px-4 sm:rounded-3xl sm:px-20 sm:py-10 border-4"
            style={{
              // color: "#ff27e1",
              // fontFamily: "basiclazer",
              borderColor: "#ff27e1",
              // backgroundColor: "#530F45",
            }}
            css={`
              background: linear-gradient(
                to right bottom,
                rgba(255, 255, 255, 0.7),
                rgba(255, 255, 255, 0.3)
              );
            `}
          >
            {/* top section  */}
          </div>
        </div>
      </div>
    </>
  );
}

function FakeModalSection() {
  return (
    <>
      <SectionTitle title="fake modal" />

      <div
        tw="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
        style={{
          backgroundColor: "#5F4F6C",
        }}
      >
        {/* start modal  */}
        <div tw="sm:max-w-xl sm:mx-auto">
          <div
            tw="px-4 sm:rounded-3xl sm:px-20 sm:py-10 border-4"
            style={{
              color: "#ff27e1",
              // fontFamily: "basiclazer",
              borderColor: "#ff27e1",
              backgroundColor: "#530F45",
            }}
          >
            {/* top section  */}
            <div tw="mb-6 text-center mt-2 leading-none flex justify-between w-full">
              <span tw="mr-3 inline-flex items-center leading-none text-sm py-1">
                <p tw="font-bold align-middle uppercase text-sm">
                  Link an account
                </p>
              </span>

              <span tw="inline-flex items-center">
                <FaRegWindowClose size={24} tw="self-center" />
              </span>
            </div>

            {/* top section  */}

            <div tw="max-w-md mx-auto">
              <div tw="flex flex-row max-w-md mx-auto">
                <div tw="mx-auto flex flex-row content-around space-x-6">
                  <FaTwitter size={40} tw="self-center" />
                  <p tw="font-bold text-3xl align-middle">Twitch</p>
                </div>
              </div>

              <div tw="mt-4 text-sm font-bold uppercase font-bold">
                <p>link your account so people can find you faster</p>
              </div>

              <div tw="flex items-center my-10">
                <div
                  tw="text-white font-bold uppercase px-1 py-2 md:text-lg rounded-l-md border-4 border-t border-r border-b"
                  style={{
                    backgroundColor: "#2a1a4a",
                    borderColor: "#2A1A4A",
                  }}
                >
                  www.example.com/
                </div>

                <input
                  type="email"
                  tw="border-r border-t border-b rounded-r-md border-4 w-full text-base md:text-lg px-3 py-1"
                  style={{
                    backgroundColor: "#530F45",
                    borderColor: "#2A1A4A",
                    color: "#ff27e1",
                  }}
                  // css={`
                  //   ::placeholder {
                  //     /* Chrome, Firefox, Opera, Safari 10.1+ */
                  //     color: "#ff27e1";
                  //     opacity: 1; /* Firefox */
                  //   }
                  // `}
                  placeholder="USERNAME"
                />
              </div>

              <button tw="w-full font-bold text-xl text-center border border-teal-300 border-4 text-teal-300 uppercase rounded-xl px-3 py-1 self-center">
                link account
              </button>

              <button tw="w-full border-2 border-teal-300 hover:bg-teal-500 hover:text-teal-300 mt-3 text-teal-300 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold uppercase">
                link account
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function UserCard() {
  return (
    <>
      <div tw="mx-4 space-y-6 h-80">
        <div tw="w-full flex p-2 bg-white hover:bg-purple-200 rounded-xl border-purple-400 hover:border-purple-200 shadow mx-auto mb-3">
          <div tw="flex-shrink-0 flex align-middle">
            <img
              tw="h-12 w-12 rounded-full flex align-middle self-center"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="avatar"
            />
          </div>
          <div tw="flex-grow ml-4 pt-1 mr-8">
            <h4 tw="text-xl text-gray-900 leading-tight">@JackyJives</h4>
            <p tw="text-base text-gray-600 leading-normal">Jacky Jive</p>
          </div>

          <FaAngleRight
            tw="flex align-middle self-center text-purple-400"
            size={36}
          />
        </div>
      </div>
    </>
  );
}

function ScrollableList() {
  return (
    <>
      <div tw="my-4 mx-4 space-y-6 h-80">
        <SectionTitle title="Scrollable List" />
        <div tw="flex mb-6 flex flex-col">
          <div tw="w-full max-h-72 overflow-y-scroll bg-background-secondary p-3 rounded-xl mb-4">
            <Link name="soundcloud" />
            <Link name="twitter" />
            <Link name="stitcher" />
            <Link name="youtube" />
            <Link name="itunes" />
            <Link />
            <Link />
            <Link />
            <Link />
          </div>
        </div>
      </div>
    </>
  );
}

function ProfileCardSection(props) {
  return (
    <>
      <SectionTitle title="Profile Card" />
      <div
        tw="h-full py-0 sm:py-8"
        // overflow-y-auto
        css={`
          background-image: linear-gradient(25deg, #fa199d -60%, #2c0b30 85%);
        `}
      >
        <ProfileCard />
      </div>
    </>
  );
}

const Demo = () => {
  return (
    <div
      tw="h-screen"
      css={`
        background-image: linear-gradient(25deg, #fa199d -60%, #2c0b30 85%);
      `}
    >
      <nav tw="grid grid-cols-3 py-4 px-8">
        {/* Logo */}
        <div>
          <span
            tw="uppercase text-4xl tracking-wide"
            className="RobotCrush"
            css={`
              color: #fa199d;
              text-shadow: 0 0 10px rgba(250, 25, 157, 0.75);
            `}
          >
            Shoutmo
          </span>
        </div>
        {/* Search bar */}

        <div
          tw="pt-2 flex flex-row text-lg"
          css={`
            color: #3ce2e5;
          `}
        >
          <input
            type="search"
            placeholder="explore"
            tw="bg-transparent text-sm rounded border-2 border-green-300 pl-12 pb-1 text-green-300 pr-4"
            css={`
              color: #3ce2e5;
              border: 2px solid #3ce2e5;
              box-shadow: 0 0 10px #3ce2e5;
              font-family: "Times New Roman";
            `}
          />
          <RiSearchLine tw="absolute mt-3 ml-4" />
        </div>
        {/* Auth actions */}
        <div tw="text-right pt-2 text-2xl  tracking-wide">
          <ul className="AmericanCaptain">
            <li
              tw="inline-block pr-6"
              css={`
                color: #fa199d;
              `}
            >
              Log In
            </li>
            <li
              tw="inline-block border-2 px-6 rounded"
              css={`
                color: #3ce2e5;
                border: 2px solid #3ce2e5;
                box-shadow: 0 0 10px #3ce2e5;
                text-shadow: 0 0 10px rgba(62, 226, 229, 0.75);
              `}
            >
              Sign Up
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

function ProfileCard(props) {
  return (
    <>
      <div tw="py-3 sm:max-w-xl sm:mx-auto">
        <div
          // tw="px-4 py-10 bg-white bg-opacity-20 shadow-xl sm:rounded-3xl sm:p-20 sm:border-pink-500 sm:border-4 text-white"
          tw="px-4 py-10 bg-black bg-opacity-10 shadow-xl sm:rounded-3xl sm:p-0 sm:border-pink-500 sm:border-4 text-white"
          style={{
            borderColor: "#ff27e1",
          }}
        >
          {/* <!-- top profile section container --> */}
          <div tw="text-base leading-6 sm:text-lg sm:leading-7">
            {/* <!-- banner --> */}
            <div
              tw="rounded-t-3xl z-0 border-b-4 "
              style={{
                borderColor: "#ff27e1",
              }}
            >
              <img
                src={user.profile_picture}
                tw="w-full h-48 object-cover rounded rounded-t-3xl"
              />
            </div>

            {/* <!-- avatar --> */}

            <div tw="flex justify-start ml-4 sm:ml-6 bg-blue-900 bg-opacity-20 z-10 h-auto w-32 h-32 sm:w-40 sm:h-40 rounded-3xl -mt-16">
              <img
                src="https://i.imgur.com/8Km9tLL.jpg"
                tw="object-cover h-32 sm:h-40 w-full border-solid border-4 rounded-3xl"
                style={{
                  borderColor: "#ff27e1",
                }}
              />
            </div>
          </div>

          {/* <!-- end top card component --> */}
          <div tw="max-w-md mx-auto">
            <div tw="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7">
              <p>
                Perfect for learning how the framework works, prototyping a new
                idea, or creating a demo to share online.
              </p>
              <div tw="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>Want to dig deeper into Tailwind?</p>
              </div>
              <div>
                <Link />
                <Link />
                <Link />
                <Link />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
