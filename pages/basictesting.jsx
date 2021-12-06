import React, { useState, useEffect } from "react";
import Linkify from "react-linkify";

import {
  FaCube,
  FaSpotify,
  FaTwitch,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle,
  FaCircle,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaSoundcloud,
  FaPencilAlt,
  FaRegCircle,
  FaAngleDown,
  FaRegClock,
} from "react-icons/fa";

import "twin.macro";

// const message = "blah blah blah blah blah blah blah http://www.example.com"

const message =
  "blah blah blah blah blah blah blah https://www.youtube.com/watch?v=VOJQOJwuK0M";

export default function Basic() {
  return (
    <>
      <FeedCard />
    </>
  );
}

// ---------------------------------------------------------------------------------------------------------------------

function ShoutoutBody({ body }) {
  return (
    <div tw="text-text-dark pt-1 break-all">
      <Linkify>{body}</Linkify>
    </div>
  );
}

function FeedCard({ shoutout }) {
  return (
    <div tw="bg-background-primary shadow-md rounded mb-4 border-2 border-background-primary mx-8">
      <div tw="sm:flex sm:items-center px-6 py-6">
        <img
          tw="block h-12 w-12 sm:h-16 sm:w-16 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          src="/img/avatar_placeholder.png"
          alt="profile photo"
        />
        <div tw="text-center sm:text-left sm:flex-grow">
          <div tw="mb-4">
            {/* username and full name */}
            <a
              href="http://www.example.com"
              tw="text-lg leading-tight text-primary-light hover:cursor-pointer hover:underline"
            >
              <b>@ mattmatt</b>
            </a>
            <p tw="text-sm text-text-darker">matt b</p>
            {/* message */}
            <ShoutoutBody body={message} />
          </div>
          {/* Card Footer */}
          <div tw="pb-4 sm:pb-4 md:pb-0 lg:py-0"></div>
        </div>
      </div>
      {/* <YoutubeEmbed /> */}

      <ParseMessageReturnEmbed message={message} />
    </div>
  );
}

// notes -
// https://flaviocopes.com/responsive-youtube-videos/

// --------------------------------------------------------------------------------------------------------------
// qrcode

function QRCodeTest(props) {
  {
    /* // onclick show modal */
  }

  function showQRCodeModal() {
    console.log("show modal");
  }

  return (
    <>
      <img
        tw="m-2 p-1 border rounded shadow"
        src="https://via.placeholder.com/150"
        onClick={showQRCodeModal}
      />
    </>
  );
}

// --------------------------------------------------------------------------------------------------------------

function youtubeRegex(message) {
  const string = message;

  // function to check for matches
  function getMatches(string, regex, index) {
    index || (index = 1); // default to the first capturing group
    var matches = [];
    var match;
    while ((match = regex.exec(string))) {
      matches.push(match[index]);
    }
    return matches;
  }

  let myString = string;

  // passes regex test
  var myRegEx = /(?:http(?:s)?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'<> #]+)/g;

  // Get an array containing the first capturing group for every match
  var matches = getMatches(myString, myRegEx, 1);

  // Log results
  //console.log(matches.length + ' matches found: ' + JSON.stringify(matches))
  console.log(matches);

  // return the video code
  console.log(matches[0]);
  return matches[0];
}

// --------------------------------------------------------------------------------------------------------------

function ParseMessageReturnEmbed(props) {
  const themessage = props.message;

  function ParseMsg(messagetoparse) {
    console.log("parsing message", messagetoparse);
    console.log("returning video code:", youtubeRegex(messagetoparse));
    return youtubeRegex(messagetoparse);
  }

  return (
    <>
      {/* // fillout area in card */}
      <p>{ParseMsg(themessage)}</p>
      <YoutubeEmbed srclinkcode={ParseMsg(themessage)} />
    </>
  );
}

// ---------------------------------------------------------------------------------------------------------------------

// youtube parse code qrcode

function YoutubeEmbed(props) {
  const width = "560";
  const height = "315";

  // const vidcode = JSON.stringify(props.srclinkcode);
  let vidcode = props.srclinkcode;

  const stringvidcode = vidcode.toString();

  const linkcode = "https://www.youtube.com/embed/VOJQOJwuK0M";
  const linkcodetest = `https://www.youtube.com/embed/${stringvidcode}`;

  console.log("YoutubeEmbed:");
  console.log(props);
  console.log(vidcode);
  console.log(stringvidcode);

  return (
    <>
      <div tw="border">
        {/* // this one works.. */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VOJQOJwuK0M"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src={linkcodetest}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        />
      </div>
    </>
  );
}
