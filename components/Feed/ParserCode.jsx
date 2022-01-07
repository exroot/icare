// check if passed in message contains a an embed
// checks then renders out the embed

import { RiMovieFill } from "react-icons/ri";

import { useState } from "react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

import ReactPlayer from "react-player/soundcloud";

import tw, { css } from "twin.macro";

export default function ParseMsg(props) {
  let passedinmsg = props.message;

  // my custom regex
  const checkIfOtherEmbed = /((https?:)?\/\/)?((www|m)\.)?(bitchute|giphy|twitch|twitter|stitcher|soundcloud|youtube|youtu|pscp)?(\.com|\.tv|\.be)?(\/(?:[\w\-]+\?v=|podcast|embed\/|v\/)?)([\w\-]+)(\S+)?$/;
  let m;

  while ((m = checkIfOtherEmbed.exec(passedinmsg)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === checkIfOtherEmbed.lastIndex) {
      checkIfOtherEmbed.lastIndex++;
    }

    // console.log(m[5]); // returns youtube, soundcloud, etc..

    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
      // do something based on what you find
      // console.log(`Found match, group ${groupIndex}: ${match}`);
    });

    if (m[5] == "bitchute") {
      // remove forward and trailing slashes
      let bitchuteVidcode = m[9].replace(/^[\\/]+|[\\/]+$/g, "");
      return <ShowBitchuteEmbed videocode={bitchuteVidcode} />;
    } else if (m[5] == "twitch") {
      let TwitchCode = m[9].replace("/", "");
      return <ShowTwitch TwitchCode={TwitchCode} />;
    } else if (m[5] == "twitter") {
      let getid = /\d{5,25}/; // find the large string id in the URL
      let twitterID = getid.exec(m[0]); // grab the string out of the array
      let twitterTweetCode = twitterID[0];
      return <ShowTweet twitterTweetCode={twitterTweetCode} />;
    } else if (m[5] == "soundcloud") {
      let streamURL = m[0];
      return <ShowSoundCloudEmbed streamURL={streamURL} />;
    } else if (m[5] == "giphy") {
      let giphyCode = m[9].replace("/", "");
      return <ShowGiphy giphyCode={giphyCode} />;
    } else if (m[5] == "youtube") {
      let YoutubeVideocode = m[8];
      return <ShowYoutubeEmbed videocode={YoutubeVideocode} />;
    } else if (m[5] == "stitcher") {
      // working but hacky
      // const stitcherRegex = /(\/e\/)(.*\d{3,10})/i;
      // let geteid = stitcherRegex.exec(m[9]);
      // let eid = geteid[2];
      return null;
      return <ShowStitcherEmbed eid={eid} />;
    } else {
      // swap these if you need to see a placeholder
      // return <PlainMessageWithPlaceholder />;
      return <NoEmbedReturn />;
    }
  }

  // console.log("done matching");

  return <NoEmbedReturn />;
}

// start embeds

function NoEmbedReturn(props) {
  return <></>;
}

function PlainMessageWithPlaceholder(props) {
  return (
    <>
      <div>
        <img src="https://via.placeholder.com/300x200?text=no+embed+link+detected" />
      </div>
    </>
  );
}

// youtube

function ShowYoutubeEmbed(props) {
  const [visibility, setVisibility] = useState(false);
  const style = css`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    & > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <div>
      <div tw="flex items-center">
        <button
          tw="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center mt-1 mb-2"
          onClick={() => setVisibility((prev) => !prev)}
        >
          <RiMovieFill
            size={18}
            // fill="gray"
            tw="float-left mr-1"
          />
          {/* <span>{visibility ? "Hide" : "Play"}</span> */}
          <span>{visibility ? "Hide" : "Show"}</span>
        </button>
      </div>
      <div
        css={style}
        style={{
          display: visibility ? "block" : "none",
        }}
      >
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${props.videocode}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

// bitchute

function ShowBitchuteEmbed(props) {
  const [visibility, setVisibility] = useState(false);
  const style = css`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    & > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <div>
      <div tw="flex items-center">
        <button
          tw="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-1"
          onClick={() => setVisibility((prev) => !prev)}
        >
          <RiMovieFill
            size={24}
            // fill="gray"
            tw="float-left mr-1"
          />
          <span>{visibility ? "Hide" : "Play"}</span>
        </button>
      </div>

      <div
        css={style}
        style={{
          display: visibility ? "block" : "none",
        }}
      >
        <iframe
          width="640"
          height="360"
          scrolling="no"
          frameBorder="0"
          src={`https://www.bitchute.com/embed/${props.videocode}`}
        ></iframe>
      </div>
    </div>
  );
}

//  --------------------------------------------------------------------------------

function ShowSoundCloudEmbed(props) {
  const [visibility, setVisibility] = useState(false);
  const style = css`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    & > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <div>
      <div tw="flex items-center">
        <button
          tw="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-1"
          onClick={() => setVisibility((prev) => !prev)}
        >
          <RiMovieFill
            size={24}
            // fill="gray"
            tw="float-left mr-1"
          />
          <span>{visibility ? "Hide" : "Play"}</span>
        </button>
      </div>

      <div
        css={style}
        style={{
          display: visibility ? "block" : "none",
        }}
      >
        <ReactPlayer
          url={props.streamURL}
          height={166}
          config={{
            soundcloud: {
              options: {
                // height: 166,
                // width: "100%",
                // visual: "false",
                // show_artwork: "true",
                // show_artwork: 1,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

// stitcher

function ShowStitcherEmbed(props) {
  const [visibility, setVisibility] = useState(false);
  const style = css`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    & > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <div>
      <div tw="flex items-center">
        <button
          tw="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-1"
          onClick={() => setVisibility((prev) => !prev)}
        >
          <RiMovieFill
            size={24}
            // fill="gray"
            tw="float-left mr-1"
          />
          <span>{visibility ? "Hide" : "Play"}</span>
        </button>
      </div>

      <div
        css={style}
        style={{
          display: visibility ? "block" : "none",
        }}
      >
        <iframe
          src={`https://www.stitcher.com/s?eid=${props.eid}`}
          // width="220"
          // height="150"
          width="w-full"
          height="1024"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

function ShowTweet(props) {
  return (
    <div tw="flex my-2 mx-4">
      <TwitterTweetEmbed tweetId={props.twitterTweetCode} />
    </div>
  );
}

function ShowGiphy(props) {
  const [visibility, setVisibility] = useState(false);
  const style = css`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    & > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <>
      <div>
        <div tw="flex items-center">
          <button
            tw="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-1"
            onClick={() => setVisibility((prev) => !prev)}
          >
            <RiMovieFill
              size={24}
              // fill="gray"
              tw="float-left mr-1"
            />
            <span>{visibility ? "Hide" : "Play"}</span>
          </button>
        </div>

        <div
          css={style}
          style={{
            display: visibility ? "block" : "none",
          }}
        >
          <iframe
            src={`https://giphy.com/embed/${props.giphyCode}`}
            width="480"
            height="178"
            frameBorder="0"
            // class="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>
            <a href={`https://giphy.com/${props.giphyCode}`}>via GIPHY</a>
          </p>
        </div>
      </div>
    </>
  );
}

function ShowTwitch(props) {
  const domain = "icare.com";

  const [visibility, setVisibility] = useState(false);
  const style = css`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    & > iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;
  return (
    <>
      <div>
        <div tw="flex items-center">
          <button
            tw="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mt-1"
            onClick={() => setVisibility((prev) => !prev)}
          >
            <RiMovieFill
              size={24}
              // fill="gray"
              tw="float-left mr-1"
            />
            <span>{visibility ? "Hide" : "Play"}</span>
          </button>
        </div>

        <div
          css={style}
          style={{
            display: visibility ? "block" : "none",
          }}
        >
          <iframe
            // src={`https://player.twitch.tv/?video=${props.TwitchCode}&parent=${domain}`}
            src={`https://player.twitch.tv/?video=${props.TwitchCode}&autoplay=false&parent=${domain}`}
            frameBorder="0"
            allowFullScreen={true}
            scrolling="no"
            height="378"
            width="620"
          ></iframe>
        </div>
      </div>
    </>
  );
}

//  --------------------------------------------------------------------------------

// notes

// using twitter library
// https://github.com/saurabhnemade/react-twitter-embed#readme
// https://www.npmjs.com/package/react-twitter-embed

// how to customize the twitter embed
// https://saurabhnemade.github.io/react-twitter-embed/?path=/story/twitter-tweet-embed--tweet-with-media-embed

// from twitter website
// https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
// https://blog.twitter.com/developer/en_us/a/2015/embed-twitter-hosted-video-on-your-website.html

// @giphy/react-components @giphy/js-fetch-api

// regex to check if link has an embedded link in it
// const checkForEmbeddedLinkInText = /((?:https?:)?\/\/)?((?:www|m)\.)?(youtube|bitchute|twitter|stitcher|soundcloud|pscp)(.com|.tv)/gim;

// match https OR http OR // OR www. OR m.
// ((?:https?:)?\/\/)?((?:www|m)\.)?

// match sitename
// (youtube|bitchute|twitter|stitcher|soundcloud|pscp|youtu)

// match domain extenstion
// +\.(?:com|org|tv|be)

// match parascope
// (pscp)\.(?:tv))

// match youtube
// ((youtube|youtu\.be)

// match all the other sites
// (bitchute|twitter|stitcher|soundcloud|)\.(?:com)

// match the rest of the string
// ?(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$

// ? means create group for next match ?(www\.)?(sitename)?(\.com), means group 2 is sitename
// ?: non capturing group

// group 5 returns name of site
// ((https?:)?\/\/)?((www|m)\.)?(bitchute|twitter|stitcher|soundcloud|youtube|pscp)

// regex links
// https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285
// https://regex101.com/
// https://www.regular-expressions.info/optional.html
