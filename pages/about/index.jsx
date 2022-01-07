import React from "react";
import {
  FaTwitter,
  FaTwitch,
  FaYoutube,
  FaSoundcloud,
  FaPatreon,
  FaVk,
  FaVimeo,
  FaMedium,
  FaLinkedin,
  FaSpotify,
  FaInstagram,
  FaFacebook,
  FaPeriscope,
} from "react-icons/fa";
import { SiStitcher } from "react-icons/si";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BiCheck } from "react-icons/bi";
import { css } from "twin.macro";
import SEO from "../../components/SEO";

export default function AboutLayout() {
  return (
    <>
      <SEO
        title="About us"
        description="We're not a social media platform, we're an influencer connecting platform. Share your links to everything."
        openGraph={{
          url: process.env.NEXT_PUBLIC_CLIENT_URL,
          type: "website",
          description:
            "We're not a social media platform, we're an influencer connecting platform. Share your links to everything.",
          images: [
            {
              url: process.env.NEXT_PUBLIC_CLIENT_URL + "img/shoutmo.png",
              width: 1000,
              height: 300,
              alt: "Shoutmo image",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <div
        style={{ background: "rgba(8,0,23)" }}
        //  style={{ background: "rgba(23, 0, 66, 1)" }}
      >
        {/* <Navbartesting /> */}
        <Intro />
        <div tw="max-w-screen-xl mx-auto">
          <SingleContentFilled />
          <SingleContentFilledTwo />
          <SingleContentFilledThree />
          <SingleContentFilledFour />
          <QRCodeSection />

          <ShareableCards />

          {/* <MoreFeatures /> */}
          <MoreFeaturesAgain />
          {/* more  */}
          {/* <CheckmarksSectionAgain /> */}
          {/* <ChecksCardTwo /> */}
          {/* <SocialWords /> */}
          {/* <Navbartesting /> */}
          {/* <StepsSectionSplit /> */}
          {/* <ChecksCard /> */}
        </div>
        <SignupSectionCTA />
        <FooterNew />
      </div>
    </>
  );
}

function Intro() {
  return (
    <>
      {/* <section tw="m-0 flex flex-col w-screen justify-center bg-gray-800 h-screen text-gray-100"> */}

      <section tw="flex flex-col w-full justify-center min-h-screen text-gray-100">
        <nav>
          <ul tw="flex justify-between text-xl py-8 px-8 md:px-48">
            <li
              tw="font-bold text-5xl text-white"
              className="threedeeshadow"
              style={{
                fontFamily: "basiclazer",
              }}
            >
              iCare
            </li>
            <li tw="self-center">
              <div tw="">
                {/* <a
                  href="/login"
                  tw="inline-block py-1 md:py-4 text-gray-500 hover:text-gray-100 mr-6"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  tw="inline-block py-2 px-4 text-gray-200 bg-white hover:bg-gray-100 rounded-lg"
                >
                  Sign Up
                </a> */}

                <ul tw="inline-flex items-center">
                  {/* <li tw="px-2 md:px-4">
                    <a
                      href=""
                      tw="text-gray-500 font-semibold hover:text-blue-600"
                    >
                      {" "}
                      Login{" "}
                    </a>
                  </li> */}
                  <li tw="px-2 md:px-4">
                    <a
                      href="/signup"
                      tw="text-gray-500 font-semibold hover:text-blue-600"
                    >
                      {" "}
                      Signup
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        {/* px-4 lg:px-0 mt-12 text-gray-200 max-w-screen-md mx-auto text-lg leading-relaxed */}

        <OpeningText />
        <br />
        <br />
        <br />
        <br />
        {/* <OpeningTextOrig /> */}
      </section>
    </>
  );
}

function OpeningText() {
  return (
    <>
      <section tw="h-full w-full mx-auto md:w-11/12 xl:w-3/4 max-w-screen-xl">
        <p tw="pb-2 text-3xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-snug md:leading-none bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-500">
          youtubers, streamers, gamers, musicians, djs, producers, designers,
          developers, content creators, video makers, influencers, creators,
          writers, bloggers, go getters and fans
        </p>

        {/* <p tw="mt-2 text-white antialiased text-2xl md:text-5xl font-semibold leading-none">
          - We got you.
        </p> */}

        <h1
          tw="text-4xl sm:text-5xl font-black text-left text-gray-200"
          // style={{
          //   color: '#ff27e1',
          // }}
        >
          - We got you.
        </h1>

        <div tw="mt-12 lg:mt-32 lg:ml-20 text-left">
          <bottom
            type="button"
            tw="flex items-center justify-center w-12 h-12 rounded-full text-white animate-bounce transition duration-300 ease-in-out cursor-pointer"
          >
            <svg
              tw="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </bottom>
        </div>
      </section>
    </>
  );
}

function OpeningTextOrig() {
  return (
    <>
      <div tw="my-auto max-w-screen-xl mx-auto">
        <h1
          tw="text-5xl sm:text-6xl px-4 mx-10 md:px-0 md:mx-40 font-black text-center"
          // tw="text-5xl sm:text-6xl font-black text-center"
          style={{
            color: "#ff27e1",
          }}
        >
          ALL YOUR LINKS ARE BELONG TO US.
          {/* Your links are waiting. */}
          {/* YOUR LINKS <br />
  ARE WAITING */}
          {/* READY <br />
  STEADY <br />
  LINK */}
          {/* LINK <br />
  SHARE <br />
  CONNECT */}
        </h1>
        <p tw="text-white text-3xl font-medium leading-tight text-center">
          Login, create your profile, share one link to all of your links.
        </p>

        <LinkStack />
      </div>
    </>
  );
}

function CheckmarksSectionAgain() {
  return (
    <>
      <div tw="h-screen w-screen flex items-center">
        <div tw="container flex flex-col md:flex-row items-center justify-around">
          {/* left side */}

          <div tw="max-w-lg">
            <p tw="text-white text-4xl sm:text-5xl font-black leading-tight pl-8 sm:pl-0 uppercase">
              We're not a social media platform,
              <br />
              <span style={{ color: "#006CFF" }}>
                we're an influencer connecting platform.
              </span>
            </p>
          </div>

          {/* right side */}
          <div tw="max-w-md text-xl font-light">
            <div tw="flex flex-row">
              <p
                tw="text-white text-lg ml-8 mt-8 sm:mt-2"
                style={{ color: "#ff27e1" }}
              >
                COMING SOON
              </p>
            </div>
            <div tw="flex flex-row items-center	">
              <div
              // tw="mr-1 p-1 rounded-full"
              // tw="mr-1 p-1 rounded-full"
              // style={{ backgroundColor: "#60a3ff" }}
              >
                <BiCheck size={26} color="#006CFF" />
              </div>
              <p tw="text-white float-right align-middle">
                Share your links to everything
              </p>
            </div>

            <div tw="flex flex-row">
              <div>
                <BiCheck size={26} color="#006CFF" />
              </div>
              <p tw="text-white float-right align-middle">
                QR code profile links
              </p>
            </div>

            <div tw="flex flex-row">
              <BiCheck size={26} color="#006CFF" />
              <p tw="text-white">
                Animated video panels
                <span style={{ color: "#ff27e1" }}>*</span>
              </p>
            </div>
            <div tw="flex flex-row">
              <BiCheck size={26} color="#006CFF" />
              <p tw="text-white">
                Guest Lists
                <span style={{ color: "#ff27e1" }}>*</span>
              </p>
            </div>
            <div tw="flex flex-row">
              <BiCheck size={26} color="#006CFF" />
              <p tw="text-white">
                Messaging
                <span style={{ color: "#ff27e1" }}>*</span>
              </p>
            </div>
            <div tw="flex flex-row">
              <BiCheck size={26} color="#006CFF" />
              <p tw="text-white">
                Push notifications
                <span style={{ color: "#ff27e1" }}>*</span>
              </p>
            </div>
            <div tw="flex flex-row">
              <BiCheck size={26} color="#006CFF" />
              <p tw="text-white">
                Mobile app
                <span style={{ color: "#ff27e1" }}>*</span>
              </p>
            </div>
            <div tw="flex flex-row">
              <BiCheck size={26} color="#006CFF" />
              <p tw="text-white">
                Donations
                <span style={{ color: "#ff27e1" }}>*</span>
              </p>
            </div>
          </div>
          {/* end right side */}
        </div>
      </div>
    </>
  );
}

function QRCodeSection() {
  return (
    <>
      <section tw="text-white">
        <div tw="container px-5 py-24 mx-auto">
          <div tw="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            {/* <div> */}
            <h1 tw="text-center sm:text-left flex-grow sm:pr-16 text-5xl sm:text-5xl font-black uppercase">
              Links with super powers.
            </h1>
            {/* <div tw="text-lg" style={{ color: "#006CFF" }}>
                Scanable QR codes that link to you profile page.
              </div> */}
            {/* </div> */}
            <PowerToTheLinks />
          </div>
        </div>
      </section>
    </>
  );
}

function ShareableCards() {
  return (
    <>
      <div tw="text-white min-h-screen flex items-center">
        <div tw="container mx-auto p-4 flex flex-wrap items-center">
          <div tw="w-full md:w-5/12 text-center md:text-left p-4">
            <div tw="text-xl md:text-3xl font-medium mb-2 ">
              <p tw="text-5xl font-black uppercase">Shareable Profile Cards.</p>
            </div>
            <div tw="text-lg" style={{ color: "#006CFF" }}>
              Video overlays coming soon.
            </div>
          </div>
          <div tw="w-full md:w-7/12 text-center p-4 md:pl-8 lg:p-4">
            <img
              css={QRGlow}
              src="/img/CardPreview.png"
              alt="cardpreview"
              tw="overflow-x-hidden"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function PowerToTheLinks() {
  return (
    <>
      <img
        css={QRGlow}
        alt="qrcode"
        tw="object-contain rounded-lg p-1 bg-white p-2 mt-8 sm:mt-0 mx-auto sm:mx-0"
        src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=Example&bgcolor=203-213-224"
      />
    </>
  );
}

function MoreFeatures() {
  return (
    <>
      <section tw="text-white">
        <div tw="container px-5 py-24 mx-auto">
          <div tw="sm:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 tw="text-center sm:text-center text-2xl font-medium text-5xl sm:text-5xl font-black uppercase">
              Plus more
            </h1>
            <FeaturesList />
          </div>
        </div>
      </section>
    </>
  );
}

function MoreFeaturesAgain() {
  return (
    <>
      <div tw="container px-4 py-24 mx-auto">
        <div tw="sm:w-2/3 flex flex-col sm:flex-row md:items-center items-start mx-auto">
          <h1 tw="text-center sm:text-left flex-grow text-2xl font-medium text-5xl sm:text-5xl font-black text-white uppercase">
            Plus more
          </h1>
          <FeaturesList />
        </div>
      </div>
    </>
  );
}

function FeaturesList() {
  return (
    <>
      <div tw="text-xl font-light">
        <div tw="flex flex-row flex-grow sm:text-left">
          <p
            tw="text-white text-lg ml-8 mt-8 sm:mt-2"
            style={{ color: "#ff27e1" }}
          >
            COMING SOON
          </p>
        </div>
        <div tw="flex flex-row items-center	">
          <div>
            <BiCheck size={26} color="#006CFF" />
          </div>
          <p tw="ml-2 text-white float-right align-middle">
            Share your links to everything
          </p>
        </div>

        <div tw="flex flex-row">
          <div>
            <BiCheck size={26} color="#006CFF" />
          </div>
          <p tw="ml-2 text-white float-right align-middle">
            QR code profile links
          </p>
        </div>

        <div tw="flex flex-row">
          <BiCheck size={26} color="#006CFF" />
          <p tw="ml-2 text-white">
            Animated video panels
            <span style={{ color: "#ff27e1" }}>*</span>
          </p>
        </div>
        <div tw="flex flex-row">
          <BiCheck size={26} color="#006CFF" />
          <p tw="ml-2 text-white">
            Guest Lists
            <span style={{ color: "#ff27e1" }}>*</span>
          </p>
        </div>
        <div tw="flex flex-row">
          <BiCheck size={26} color="#006CFF" />
          <p tw="ml-2 text-white">
            Messaging
            <span style={{ color: "#ff27e1" }}>*</span>
          </p>
        </div>
        <div tw="flex flex-row">
          <BiCheck size={26} color="#006CFF" />
          <p tw="ml-2 text-white">
            Push notifications
            <span style={{ color: "#ff27e1" }}>*</span>
          </p>
        </div>
        <div tw="flex flex-row">
          <BiCheck size={26} color="#006CFF" />
          <p tw="ml-2 text-white">
            Mobile app
            <span style={{ color: "#ff27e1" }}>*</span>
          </p>
        </div>
        <div tw="flex flex-row">
          <BiCheck size={26} color="#006CFF" />
          <p tw="ml-2 text-white">
            Donations
            <span style={{ color: "#ff27e1" }}>*</span>
          </p>
        </div>
      </div>
    </>
  );
}

function Navbartesting() {
  return (
    <>
      <header tw="flex items-center justify-between py-2 border-b mb-10 bg-gray-600">
        <a href="#">
          {/* <p tw="px-2 lg:px-0">SHOUTOUT</p> */}

          <h1
            tw="px-2 lg:px-0 font-bold text-5xl text-center text-white"
            className="threedeeshadow"
            style={{
              fontFamily: "basiclazer",
            }}
          >
            Shoutmo
          </h1>
        </a>
        <ul tw="inline-flex items-center">
          <li tw="px-2 md:px-4">
            <a href="" tw="text-gray-500 font-semibold hover:text-purple-500">
              {" "}
              Login{" "}
            </a>
          </li>
          <li tw="px-2 md:px-4">
            <a href="" tw="text-gray-500 font-semibold hover:text-purple-500">
              {" "}
              Signup{" "}
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}

function SingleContentFilled() {
  return (
    <>
      <div tw="px-4 lg:px-0 mt-12 sm:mt-24 text-gray-300 max-w-screen-md mx-auto text-lg leading-relaxed">
        <h2 tw="text-2xl text-white font-semibold mb-4 mt-4">
          {/* <h2 tw="text-2xl text-gray-300 font-semibold mb-4 mt-4 text-white text-3xl font-medium leading-tight"> */}
          Up your web pressence game
          <span
            style={{
              color: "#ff27e1",
            }}
          >
            {" "}
            10x{" "}
          </span>
          or more and get found everywhere.
        </h2>

        <p tw="pb-6">
          Make it easy for people to find you and your content online. Share and
          consolidate all of your links on a single platform, then share them
          with everyone, everywhere, from anywhere. The future of decentralized
          linking is here.
        </p>
      </div>
    </>
  );
}

function SingleContentFilledTwo() {
  return (
    <>
      <div tw="px-4 lg:px-0 mt-12 text-gray-300 max-w-screen-md mx-auto text-lg leading-relaxed">
        <h2 tw="text-2xl text-white font-semibold mb-4 mt-4">
          <span style={{ color: "#00DE90" }}> 34 </span>Links and counting.
        </h2>

        <p tw="pb-6">
          Now you can share your total online web presence and make it easy for
          your fans to find you, wherever you are.{" "}
          <span
            style={{
              color: "#01A8FC",
            }}
          >
            +&nbsp;
          </span>
          <span tw="text-gray-600">We're adding more links daily.</span>
        </p>
      </div>
    </>
  );
}

function SingleContentFilledThree() {
  return (
    <>
      <div tw="px-4 lg:px-0 mt-12 text-gray-300 max-w-screen-md mx-auto text-lg leading-relaxed">
        <h2
          tw="text-2xl text-gray-300 font-semibold mb-4 mt-4"
          style={{ color: "#00DE90" }}
        >
          EVOLVE
        </h2>

        <p tw="pb-6">
          Consolidate your audience. Share where you're at, keep your audience
          and fans informed. Communicate and Market directly to the people that
          matter most, you're followers.
        </p>
      </div>
    </>
  );
}

function SingleContentFilledFour() {
  return (
    <>
      <div tw="px-4 lg:px-0 mt-12 text-gray-300 max-w-screen-md mx-auto text-lg leading-relaxed">
        <h2 tw="text-2xl text-white font-semibold mb-4 mt-4">
          Push notifications improved. Share beyond platforms.
        </h2>

        <p tw="pb-6">
          When someone follows you on SHOUTMO, they will get push notifications
          when you post to your feed. Link to where you're streaming, posting
          new videos, contributing content, even where you're going live -
          regardless of platform.
        </p>
      </div>
    </>
  );
}

function StepsSectionSplit() {
  return (
    <>
      <div tw="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div tw="grid gap-6 row-gap-10 lg:grid-cols-2">
          <div tw="lg:py-0 lg:pr-16">
            <div tw="flex">
              <div tw="flex flex-col items-center mr-4">
                <div></div>
              </div>

              <div tw="pt-1 pb-8">
                <h2 tw="text-2xl text-gray-300 font-semibold mb-4 mt-4">
                  We're not a social media platform,
                  <br />
                  <span
                    style={{
                      color: "#006CFF",
                    }}
                  >
                    {" "}
                    we're an influencer connecting platform.
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div tw="relative">
            <div tw="max-w-sm text-xl font-light mx-auto border border-blue-900">
              <div tw="flex flex-row">
                <p
                  tw="ml-2 text-white text-xs ml-8 mt-2"
                  style={{ color: "#ff27e1" }}
                >
                  COMING SOON
                </p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white float-right">
                  Share your links to everything
                </p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Animated video panels*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Guest Lists*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Messaging*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Push notifications*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Mobile app*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Donations*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SignupSectionCTA() {
  return (
    <>
      <div
        // tw="pl-32 pr-32 "
        tw="flex flex-col w-full h-screen text-white px-0 sm:px-40 justify-center"
        //  style={{ background: "#000" }}
        // style={{ background: "#00E6BC" }}
      >
        <div tw="flex flex-col w-full h-auto text-white py-24">
          {/* <p tw="text-white text-5xl font-black leading-tight mb-3 w-1/2 mx-auto text-center">
              Join now
              <span
                style={{
                  color: "#ff27e1",
                  // color: "#FF7044",
                }}
              >
                {" "}
                &{" "}
              </span>
            </p> */}
          <p tw="text-white text-5xl font-black leading-tight mb-3 w-full sm:w-1/2 mx-auto text-center">
            Get started with{" "}
            <span
              style={{
                color: "#ff27e1",
                fontFamily: "basiclazer",
                fontSize: 80,
              }}
            >
              iCare
            </span>{" "}
            today.
          </p>
          {/* <DownloadTheAppButtons /> */}
          {/* <a href="/signup" tw="border border-white rounded-lg mx-auto w-1/2"> */}
          <a href="/signup" tw="">
            <p tw="text-white text-2xl font-medium leading-tight mt-8 mb-3 w-1/2 mx-auto text-center">
              Sign up for a free account{" "}
              <RiArrowRightUpLine
                tw="inline-block"
                size={32}
                style={{
                  color: "#006CFF",
                }}
              />
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

function FooterNew() {
  return (
    <>
      <div tw="px-4 pt-40 sm:pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div tw="grid gap-10 row-gap-6 mb-2 sm:grid-cols-2 lg:grid-cols-4">
          <div tw="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              tw="inline-flex items-center"
            >
              <span tw="ml-2 text-xl font-bold tracking-wide text-purple-200 uppercase">
                <h1
                  tw="w-full font-bold text-5xl text-center text-white"
                  className="threedeeshadow"
                  style={{
                    fontFamily: "basiclazer",
                  }}
                >
                  Shoutmo
                </h1>
              </span>
            </a>

            {/* <div tw="mt-6 lg:max-w-sm">
                <p tw="text-sm text-purple-200">
                  Your premium online people connecting platform. Share one link
                  to all of your links, QR codes and even more coming soon. Stay
                  tuned and keep it locked.
                </p>
              </div> */}
          </div>
        </div>
        <div tw="flex flex-col-reverse justify-between pt-4 pb-10 border-t lg:flex-row">
          <p tw="text-sm text-gray-600">
            © Copyright 2020 All rights reserved.
          </p>
          <ul tw="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/info/faqs"
                tw="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/info/privacy"
                tw="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/info/terms"
                tw="text-sm text-gray-600 transition-colors duration-300 hover:text-purple-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

function LinkStack() {
  return (
    <>
      <div tw="flex flex-wrap justify-center py-8 px-4 md:px-0 md:mx-48">
        {/* <!-- icons --> */}

        {/* // gradient button */}
        {/* <div tw="inset-0 bg-gradient-to-b from-teal-400 to-blue-500 text-gray-200 text-center rounded-lg p-4 m-2"> */}
        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaTwitch tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaTwitter tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaYoutube tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaSoundcloud tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaInstagram tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <img
            tw="m-2 h-12 w-12"
            src="/img/icons/DLIVE_white_icon.png"
            size={42}
          />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <img
            tw="m-2 h-12 w-12"
            src="/img/icons/bitchute_logo_white.png"
            size={42}
          />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <img tw="m-2" src="/img/icons/gab_icon_white.png" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <img
            tw="m-2 h-12 w-12"
            src="/img/icons/parler_white_logo.png"
            size={42}
          />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaPeriscope tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <SiStitcher tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaPatreon tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaSpotify tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaFacebook tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaLinkedin tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaVk tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaVimeo tw="m-2" size={48} />
        </div>

        <div tw="text-gray-200 text-center bg-indigo-600 rounded-lg p-4 m-2">
          <FaMedium tw="m-2" size={48} />
        </div>
      </div>
    </>
  );
}

function ChecksCard() {
  return (
    <>
      <div tw="mx-2 sm:mx-auto mt-12 sm:mt-0">
        <div tw="flex flex-col px-8 py-6 my-0 sm:my-24 max-w-sm sm:max-w-xl mx-auto rounded-lg shadow-lg border border-white">
          <div tw="mt-4">
            <div tw="max-w-sm text-2xl font-light mx-auto">
              <div tw="flex flex-row">
                <p tw="ml-2 text-white ml-8 mt-2" style={{ color: "#ff27e1" }}>
                  COMING SOON
                </p>
                <p
                  tw="text-lg sm:text-xl text-white mt-2"
                  style={{ color: "#ff27e1" }}
                >
                  COMING SOON
                </p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white float-right">
                  Share your links to everything
                </p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Animated video panels*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Guest Lists*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Messaging*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Push notifications*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Mobile app*</p>
              </div>
              <div tw="flex flex-row">
                <BiCheck size={26} color="#006CFF" />
                <p tw="ml-2 text-white">Donations*</p>
              </div>
            </div>
          </div>
          {/* start  */}

          <div tw="flex justify-between items-center mt-4">
            <div tw="flex items-center">
              <div tw="h-10 w-10 bg-green-200 rounded-full flex items-center mx-auto">
                <BiCheck size={32} tw="mx-auto text-green-500" />
              </div>

              <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                Share your links to everything
              </p>
            </div>
          </div>
          <div tw="flex justify-between items-center mt-4">
            <div tw="flex items-center">
              <div tw="h-10 w-10 bg-green-200 rounded-full flex items-center mx-auto">
                <BiCheck size={32} tw="mx-auto text-green-500" />
              </div>

              <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                Share your links to everything
              </p>
            </div>
          </div>
          <div tw="flex justify-between items-center mt-4">
            <div tw="flex items-center">
              <div tw="h-10 w-10 bg-green-200 rounded-full flex items-center mx-auto">
                <BiCheck size={32} tw="mx-auto text-green-500" />
              </div>

              <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                Share your links to everything
              </p>
            </div>
          </div>
          <div tw="flex justify-between items-center mt-4">
            <div tw="flex items-center">
              <div tw="h-10 w-10 bg-green-200 rounded-full flex items-center mx-auto">
                <BiCheck size={32} tw="mx-auto text-green-500" />
              </div>

              <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                Share your links to everything
              </p>
            </div>
          </div>
          <div tw="flex justify-between items-center mt-4">
            <div tw="flex items-center">
              <div tw="h-10 w-10 bg-green-200 rounded-full flex items-center mx-auto">
                <BiCheck size={32} tw="mx-auto text-green-500" />
              </div>

              <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                Share your links to everything
              </p>
            </div>
          </div>
          <div tw="flex justify-between items-center mt-4">
            <div tw="flex items-center">
              <div tw="h-10 w-10 bg-green-200 rounded-full flex items-center mx-auto">
                <BiCheck size={32} tw="mx-auto text-green-500" />
              </div>

              <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                Share your links to everything
              </p>
            </div>
          </div>
          <div tw="flex justify-between items-center mt-4">
            <div tw="flex items-center">
              <div tw="h-10 w-10 bg-green-200 rounded-full flex items-center mx-auto">
                <BiCheck size={32} tw="mx-auto text-green-500" />
              </div>

              <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                Share your links to everything
              </p>
            </div>
          </div>
          {/* end  */}
        </div>
      </div>
    </>
  );
}

function ChecksCardTwo() {
  return (
    <>
      <div tw="mx-2 sm:mx-auto mt-12 sm:mt-0">
        <div tw="flex flex-col px-8 py-6 my-0 sm:my-24 max-w-sm sm:max-w-xl mx-auto rounded-lg font-light">
          {/* start  */}
          <p
            tw="text-2xl sm:text-2xl text-white mt-2 text-center font-bold"
            style={{ color: "#006CFF" }}
          >
            FEATURES
          </p>
          <p
            tw="text-sm sm:text-lg text-white mt-2 text-center"
            style={{ color: "#ff27e1" }}
          >
            *COMING SOON
          </p>
          <div tw="mx-auto">
            <div tw="flex justify-between items-center mt-4 border border-white rounded p-2">
              <div tw="flex items-center">
                <div tw="h-10 w-10 flex items-center mx-auto">
                  <BiCheck size={32} color="#006CFF" />
                </div>

                <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                  Share your links to everything
                </p>
              </div>
            </div>
            <div tw="flex justify-between items-center mt-4">
              <div tw="flex items-center">
                {/* <div tw="h-10 w-10 bg-green-200 rounded-full flex items-center mx-auto">
                  <BiCheck size={32} tw="mx-auto text-green-500" />
                </div> */}

                <div tw="h-10 w-10 flex items-center mx-auto">
                  <BiCheck size={32} color="#006CFF" />
                </div>

                <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                  QR code profile links
                </p>
              </div>
            </div>
            <div tw="flex justify-between items-center mt-4">
              <div tw="flex items-center">
                <div tw="h-10 w-10 flex items-center mx-auto">
                  <BiCheck size={32} color="#006CFF" />
                </div>

                <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                  Animated video panels
                  <span style={{ color: "#ff27e1" }}>*</span>
                </p>
              </div>
            </div>
            <div tw="flex justify-between items-center mt-4">
              <div tw="flex items-center">
                <div tw="h-10 w-10 flex items-center mx-auto">
                  <BiCheck size={32} color="#006CFF" />
                </div>

                <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                  Guest Lists<span style={{ color: "#ff27e1" }}>*</span>
                </p>
              </div>
            </div>
            <div tw="flex justify-between items-center mt-4">
              <div tw="flex items-center">
                <div tw="h-10 w-10 flex items-center mx-auto">
                  <BiCheck size={32} color="#006CFF" />
                </div>

                <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                  Messaging<span style={{ color: "#ff27e1" }}>*</span>
                </p>
              </div>
            </div>
            <div tw="flex justify-between items-center mt-4">
              <div tw="flex items-center">
                <div tw="h-10 w-10 flex items-center mx-auto">
                  <BiCheck size={32} color="#006CFF" />
                </div>

                <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                  Push notifications<span style={{ color: "#ff27e1" }}>*</span>
                </p>
              </div>
            </div>
            <div tw="flex justify-between items-center mt-4">
              <div tw="flex items-center">
                <div tw="h-10 w-10 flex items-center mx-auto">
                  <BiCheck size={32} color="#006CFF" />
                </div>

                <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                  Mobile app<span style={{ color: "#ff27e1" }}>*</span>
                </p>
              </div>
            </div>
            <div tw="flex justify-between items-center mt-4">
              <div tw="flex items-center">
                <div tw="h-10 w-10 flex items-center mx-auto">
                  <BiCheck size={32} color="#006CFF" />
                </div>

                <p tw="ml-2 text-white float-right mx-3 sm:text-2xl">
                  Donations<span style={{ color: "#ff27e1" }}>*</span>
                </p>
              </div>
            </div>

            {/* end  */}
          </div>
        </div>
      </div>
    </>
  );
}

function SocialWords() {
  return (
    <>
      <div tw="px-4 lg:px-0 mt-12 text-gray-200 max-w-screen-md mx-auto text-lg leading-relaxed">
        <h2 tw="text-2xl text-gray-300 font-semibold mb-4 mt-4">
          We're not a social media platform,
          <br />
          <span
            style={{
              color: "#006CFF",
            }}
          >
            {" "}
            we're an influencer connecting platform.
          </span>
        </h2>

        <p tw="pb-6">
          {/* Consolidate your audience. Share where you're at, keep your audience
          and fans informed. Communicate and Market directly to the people that
          matter most, you're followers. */}
        </p>
      </div>
    </>
  );
}

const textEfx = css`
  text-shadow: -0.01em 0 #ff08ff, 0.01em 0 cyan;
  text-shadow: -0.01em 0 #ff08ff, 0.01em 0 cyan, 0 0 4px blue;
`;

const QRGlow = css`
  box-shadow: 0 0 10px blue, 0 0 5px blue, 0 0 0px blue, 0 0 1px blue,
    0 0 90px blue;
`;
