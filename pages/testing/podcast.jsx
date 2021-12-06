import React, { useState, useEffect } from "react";
import tw, { css } from "twin.macro";

import {
  FaAngleDown,
  FaAngleRight,
  FaRegCircle,
  FaTwitter,
  FaTwitch,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaUsers,
  FaUser,
} from "react-icons/fa";

import Wrapper from "../../components/Wrapper";
const iconSize = 24;

export default function ViewPodcast() {
  return (
    <>
      <Wrapper>
        <div tw="min-h-screen">
          <div tw="max-w-6xl mx-auto px-4 py-4 sm:px-6 md:px-8 space-y-6">
            {/* <BorderColor /> */}
            <ProfileCardTopSectionNewNew />
            {/* <ProfileCardTopSectionNew /> */}
            <ProfileCardTopSection />
            <DescriptionAreaSection />
            <CategoriesSection />
            {/* <GridLayoutAlt /> */}
            <Listenonandguestlist />
            <RelatedPodcastsSection />
          </div>
        </div>
      </Wrapper>
    </>
  );
}

function ProfileCardTopSectionNewNew(props) {
  return (
    <>
      {/* <figure tw="md:flex bg-background-primary rounded-xl p-0 md:p-4"> */}
      {/* <figure tw="bg-background-primary rounded-xl p-0 md:p-4">
        <img
          tw="h-full w-full object-contain w-36 h-36 sm:w-48 sm:h-48 md:w-72 md:h-72 rounded shadow"
          src={user.profile_picture}
          alt="podcast album cover"
        />

        <figcaption tw="font-medium space-y-2">
          <PodcastTitle />
          <PodcastOwnerProfile />

          <PodcastWebsite />
          <ShareButton />
        </figcaption>
      </figure> */}

      <figure tw="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img
          tw="w-32 h-32 md:w-36 md:h-auto md:rounded-none rounded-xl mx-auto"
          src="https://randomuser.me/api/portraits/women/21.jpg"
        />

        <div tw="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p tw="text-lg font-semibold">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It’s easy to customize, adapts to any design, and the build
              size is tiny.”
            </p>
          </blockquote>
          <figcaption tw="font-medium">
            <div tw="text-gray-500">Staff Engineer, Algolia</div>{" "}
            <div tw="text-gray-500">Staff Engineer, Algolia</div>
            <div tw="text-gray-500">Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>

      <div tw="flex p-6 bg-gray-100">
        <div tw="flex-none w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-60 lg:h-60 relative">
          <img
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt=""
            tw="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <form tw="flex-auto pl-6">
          <div tw="flex flex-wrap items-baseline">
            <h1 tw="w-full flex-none font-semibold mb-2.5">Kids Jumpsuit</h1>
            <div tw="text-4xl leading-7 font-bold text-purple-600">$39.00</div>
            <div tw="text-sm font-medium text-gray-400 ml-3">In stock</div>
          </div>
          <div tw="flex items-baseline my-8">
            <div tw="space-x-2 flex text-sm font-medium"></div>
            <div tw="ml-3 text-sm text-gray-500 underline">Size Guide</div>
          </div>
          <div tw="flex space-x-3 mb-4 text-sm font-semibold">
            <div tw="flex-auto flex space-x-3">
              <button
                tw="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white"
                type="submit"
              >
                Buy now
              </button>
              <button
                tw="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700"
                type="button"
              >
                Add to bag
              </button>
            </div>
            <button
              tw="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700"
              type="button"
              aria-label="like"
            >
              <svg width="20" height="20" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                />
              </svg>
            </button>
          </div>
          <p tw="text-sm text-gray-500">
            Free shipping on all continental US orders.
          </p>
        </form>
      </div>
    </>
  );
}

function ProfileCardTopSectionNew(props) {
  return (
    <>
      <figure tw="md:flex bg-background-primary rounded-xl p-8 md:p-0">
        {/* <img
          tw="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={user.profile_picture}
          alt=""
          width="512"
          height="512"
        /> */}

        <img
          tw="h-full w-full object-contain w-48 h-48 md:w-72 md:h-72 rounded shadow"
          src={user.profile_picture}
          alt="podcast album cover"
        />

        {/* <PodcastAlbumnCoverAlt /> */}

        <div tw="pt-6 md:p-8 text-center md:text-left space-y-4">
          <figcaption tw="font-medium">
            <PodcastTitle />
            <PodcastOwnerProfile />

            <PodcastWebsite />
            <ShareButton />

            <div tw="w-full flex flex-row">
              <img
                tw="overflow-hidden rounded-full w-12 h-12"
                src="https://randomuser.me/api/portraits/women/21.jpg"
                alt="avatar"
              />
              <div tw="pl-3 text-left">
                <h6 tw="font-bold text-lg text-xl text-text-dark leading-tight">
                  Jane Blow
                </h6>
                <p tw="text-xs text-text-dark">@jane.blow</p>
              </div>
            </div>

            <div tw="text-left">
              <PodcastWebsite />
              <ShareButton />
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  );
}

function ProfileCardTopSection(props) {
  return (
    <>
      {/* <div tw="max-w-full rounded-3xl shadow"> */}
      <div tw="max-w-full rounded-3xl shadow-sm">
        <div tw="md:flex overflow-y-scroll bg-background-primary rounded-3xl p-6">
          <PodcastAlbumnCoverAlt />
          <div tw="md:flex flex-col pl-0 md:pl-8 space-y-3">
            <PodcastTitle />
            <PodcastOwnerProfile />
            <ProfileCardExtras />
          </div>
        </div>
      </div>
    </>
  );
}

function GridLayoutAlt() {
  return (
    <>
      <div tw="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div tw="max-h-96 overflow-y-scroll bg-background-primary rounded-3xl p-6 space-y-4 rounded-3xl shadow-sm">
          <SectionTitle title="Listen on" />
          <ListenOn />
        </div>
        <div tw="max-h-96 overflow-y-scroll bg-background-primary rounded-3xl p-6 space-y-4 rounded-3xl shadow-sm">
          <SectionTitle title="Guest List" />
          <GuestList />
        </div>
      </div>
    </>
  );
}

function CategoriesSection(props) {
  return (
    <>
      <div tw="max-w-full rounded-3xl shadow-sm">
        {/*  without title on top
       <div tw="md:flex bg-background-primary rounded-3xl p-6">
          <Categories />
        </div> */}

        <div tw="bg-background-primary rounded-3xl p-6 space-y-4">
          <SectionTitle title="Categories" />
          <Categories />
        </div>
      </div>
    </>
  );
}

function Listenonandguestlist() {
  return (
    <>
      <div tw="space-y-3">
        <div tw="max-h-96 overflow-y-scroll bg-background-primary rounded-3xl p-6 space-y-4 rounded-3xl shadow-sm">
          <SectionTitle title="Listen on" />
          <ListenOn />
        </div>
        <div tw="max-h-96 overflow-y-scroll bg-background-primary rounded-3xl p-6 space-y-4 rounded-3xl shadow-sm">
          <GuestListHorizontal />
        </div>
      </div>
    </>
  );
}
// rounded-3xl shadow-sm

function DescriptionAreaSection() {
  return (
    <>
      <div tw="max-w-full rounded-3xl shadow-sm">
        <div tw="flex flex-col bg-background-primary rounded-3xl p-6 space-y-3">
          <SectionTitle title="About" />
          <PodcastDescription />
        </div>
      </div>
    </>
  );
}

function PodcastAlbumnCoverAlt(props) {
  return (
    <>
      <div tw="md:flex-shrink-0">
        <img
          tw="h-full w-full object-contain w-48 h-48 md:w-72 md:h-72 rounded shadow"
          src={user.profile_picture}
          alt="podcast album cover"
        />
      </div>
    </>
  );
}

function ProfileCardExtras(props) {
  return (
    <>
      <div tw="space-y-3">
        {/* <PodcastDescription /> */}
        {/* <Categories /> */}
        <PodcastWebsite />
        <ShareButton />
      </div>
    </>
  );
}

function PodcastOwnerProfile(props) {
  return (
    <>
      <div tw="w-full flex flex-row mx-auto">
        <div tw="w-full flex flex-row">
          <img
            tw="overflow-hidden rounded-full w-12 h-12"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="avatar"
          />
          <div tw="pl-3">
            <h6 tw="font-bold text-lg text-xl text-text-dark leading-tight">
              Jane Blow
            </h6>
            <p tw="text-xs text-text-dark">@jane.blow</p>
          </div>
        </div>
      </div>
    </>
  );
}

function BorderColor(props) {
  return (
    <>
      <div tw="max-w-full bg-white h-64 rounded-3xl border-blue-500 border-opacity-25 border-4 shadow">
        {/* <div tw="p-6 max-w-full bg-white h-64 rounded-3xl shadow-sm"> */}
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #photography
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #travel
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #winter
        </span>
      </div>
    </>
  );
}

function Categories(props) {
  return (
    <>
      <div tw="space-y-2">
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #photography
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #travel
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #winter
        </span>
        {/* extra categories  */}

        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        <span tw="inline-block bg-purple-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
          #other
        </span>
        {/* extra categories  */}
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

function GradientBackgroundSection(props) {
  return (
    <>
      <div tw="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <p tw="text-sm leading-tight">Some words</p>
      </div>
    </>
  );
}

function PodcastTitle(props) {
  props = user;

  return (
    <>
      {/* <p tw="uppercase tracking-wide text-3xl text-purple-500 font-bold"> */}
      <p
        // tw="text-lg sm:text-3xl text-text-dark leading-tight font-bold"
        // tw="text-text-dark mb-4 text-4xl font-extrabold leading-10 tracking-tight sm:text-5xl sm:leading-none"

        // tw="text-xl sm:text-4xl text-text-dark leading-tight font-extrabold"
        tw="text-xl sm:text-xl md:text-2xl lg:text-4xl leading-tight font-extrabold text-text-dark sm:text-blue-400 md:text-green-500 lg:text-orange-500"
      >
        {props.podcast_title || "podcast_title"}
      </p>
    </>
  );
}

function PodcastTitleSmall(props) {
  props = user;

  return (
    <>
      <p tw="tracking-wide text-text-dark font-semibold">
        {props.podcast_title || "podcast_title"}
      </p>
    </>
  );
}

function PodcastLink(props) {
  props = user;

  return (
    <>
      <a tw="mt-3 text-indigo-500 inline-flex items-center">
        Check out
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          tw="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </>
  );
}

function RelatedPodcastsSectionAlt() {
  return (
    <>
      <div tw="overflow-hidden max-w-full bg-white rounded-3xl p-6">
        <SectionTitle title="Related Podcasts" />
        <div tw="md:flex overflow-y-scroll">
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
        </div>
      </div>
    </>
  );
}

function RelatedPodcastsSection() {
  return (
    <>
      <div tw="overflow-hidden max-w-full bg-background-primary rounded-3xl p-6 space-y-4 rounded-3xl shadow-sm">
        <SectionTitle title="Similar Podcasts" />
        <div tw="flex flex-row overflow-x-scroll space-x-4 h-64 bg-background-secondary p-3 rounded-xl">
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
          <RelatedPodcast />
        </div>
      </div>
    </>
  );
}

function RelatedPodcast() {
  return (
    <>
      <div tw="flex-shrink-0 w-36 h-36 space-y-1">
        <img
          tw="object-contain rounded-xl shadow"
          src={user.related_podcast_img}
        />
        <PodcastTitleSmall />
        <PodcastLink />
      </div>
    </>
  );
}

function ListenOn(props) {
  props = user;

  return (
    <>
      <div tw="flex mb-6 flex flex-col rounded-3xl shadow-sm">
        <div tw="w-full max-h-72 overflow-y-scroll bg-background-secondary p-3 rounded-xl">
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
    </>
  );
}

function PodcastDescription(props) {
  props = user;

  return (
    <>
      <p tw="text-text-dark">{props.podcast_bio || "podcast_bio"}</p>
    </>
  );
}

function PodcastSimilar(props) {
  props = user;

  return (
    <>
      <p tw="font-bold text-2xl leading-tight">
        {props.podcast_title || "podcast_title"}
      </p>
    </>
  );
}

function PodcastWebsite(props) {
  props = user;
  return (
    <>
      <a href={props.podcast_website || "podcast_title"}>
        <p tw="text-purple-400">{props.podcast_website || "podcast_title"}</p>
      </a>
    </>
  );
}

function SectionTitle(props) {
  return (
    <>
      <p tw="font-bold text-2xl leading-tight text-text-dark">
        {props.title || "title_"}
      </p>
    </>
  );
}

function GuestList() {
  return (
    <>
      <div tw="flex mb-6 flex flex-col rounded-3xl shadow-sm">
        <div tw="w-full max-h-72 overflow-y-scroll bg-background-secondary p-3 rounded-xl">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </>
  );
}

function GuestListHorizontal() {
  return (
    <>
      <div tw="overflow-hidden max-w-full bg-background-primary space-y-4">
        <SectionTitle title="Guest List" />
        {/* <Guestlistsearchbar /> */}
        <div tw="flex flex-row overflow-x-scroll space-x-4 bg-background-secondary p-3 rounded-xl">
          {/* <RelatedPodcast /> */}
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <GusetListUserCard />
          <ShowMoreButton />
        </div>
      </div>
    </>
  );
}

function GuestListLettersSearch() {
  return (
    <>
      <div tw="overflow-hidden max-w-full bg-background-primary space-y-4">
        <div tw="flex flex-row overflow-x-scroll space-x-3 bg-background-secondary p-3 rounded-xl text-xl">
          {/* <SearchLetter letter="a" />
          <SearchLetter /> */}
        </div>
      </div>
    </>
  );
}

function Guestlistsearchbar(props) {
  return (
    <>
      <div tw="w-full bg-background-secondary p-3 rounded-xl">
        <div tw="flex items-center">
          <input
            tw="appearance-none bg-transparent border-none w-full text-indigo-700 mr-3 pr-1 leading-tight focus:outline-none"
            type="text"
            placeholder="Search for user"
            aria-label="Full name"
          />
          <button
            tw="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-5 w-24 rounded"
            type="button"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

function GusetListUserCard() {
  return (
    <>
      <div tw="w-full h-24 flex p-2 text-text-dark bg-background-primary hover:bg-purple-300 hover:border-purple-500 rounded-xl border-purple-600 shadow mx-auto">
        <div tw="flex align-middle">
          {/* image orig */}
          <div tw="flex-shrink-0 h-auto w-12 sm:w-20 space-y-1 self-center mr-1">
            <img
              tw="object-contain rounded-xl"
              src="https://randomuser.me/api/portraits/women/28.jpg"
            />
          </div>
          {/* person info  */}
          <div tw="self-center p-2">
            <h4 tw="text-sm sm:text-xl text-text-dark leading-tight">
              @JoannaJives
            </h4>
            <p tw="text-sm sm:text-base text-text-dark leading-normal">
              Joanna Jive
            </p>
          </div>
          {/* testing  */}
          <p tw="self-center flex-1 p-2 text-xl">
            <FaAngleRight size={36} tw="text-text-dark" />
          </p>
        </div>
      </div>
    </>
  );
}

function ShowMoreButton() {
  return (
    <>
      <div tw="w-full flex p-2 text-white bg-purple-400 hover:bg-purple-300 hover:border-purple-500 rounded-l-xl border-purple-600 shadow mx-auto mb-3">
        <div tw="flex-shrink-0 flex align-middle">
          <p tw="self-center flex-1 p-2 text-xl">
            More <FaAngleRight size={36} />
          </p>
        </div>
      </div>
    </>
  );
}

function UserCard() {
  return (
    <>
      <div tw="w-full flex p-2 bg-white hover:bg-purple-200 rounded-xl border-purple-400 hover:border-purple-200 shadow mx-auto mb-3">
        <div tw="flex-shrink-0 flex align-middle">
          <img
            tw="h-12 w-12 rounded-full flex align-middle self-center"
            src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
            alt="avatar"
          />
        </div>
        <div tw="flex-grow ml-4 pt-1 mr-8">
          <h4 tw="text-xl text-gray-900 leading-tight">@JohnnyJives</h4>
          <p tw="text-base text-gray-600 leading-normal">Johnny Jive</p>
        </div>

        <FaAngleRight
          tw="flex align-middle self-center text-purple-400"
          size={36}
        />
      </div>
    </>
  );
}

function ShareButton() {
  return (
    <>
      <div tw="">
        <button tw="text-purple-500 hover:text-white hover:bg-purple-500 border border-purple-500 font-semibold rounded-full px-4 py-2 leading-normal">
          Share
        </button>
      </div>
    </>
  );
}

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
