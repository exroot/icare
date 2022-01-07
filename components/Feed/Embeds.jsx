/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { RiMovieFill } from "react-icons/ri";
import ReactPlayer from "react-player/soundcloud";
import { css } from "twin.macro";

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

const ButtonVisibility = ({ setVisibility, visibility, ...props }) => (
  <button
    type="button"
    tw="bg-primary-200 hover:bg-primary-100 text-primary-900 font-bold py-1 px-2 rounded-full inline-flex items-center ml-2 mt-1 text-sm focus:outline-none transition duration-300 ease-in"
    onClick={() => setVisibility((prev) => !prev)}
    {...props}
  >
    <RiMovieFill size={14} tw="mr-1" />
    {!visibility ? "Mostrar" : "Ocultar"}
  </button>
);

export const BitchuteEmbed = ({ videocode }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <ButtonVisibility setVisibility={setVisibility} visibility={visibility} />
      {visibility && (
        <div
          css={style}
          style={{
            display: visibility ? "block" : "none",
          }}
        >
          <iframe
            title="bitchute embed"
            width="560"
            height="315"
            scrolling="no"
            frameBorder="0"
            src={`https://www.bitchute.com/embed/${videocode}`}
            allowFullScreen
          />
        </div>
      )}
    </>
  );
};

export const YoutubeEmbed = ({ videocode }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <ButtonVisibility setVisibility={setVisibility} visibility={visibility} />
      {visibility && (
        <div
          css={style}
          style={{
            display: visibility ? "block" : "none",
          }}
        >
          <iframe
            title="YouTube embed"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videocode}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </>
  );
};

export const TwitterEmbed = ({ twitterTweetCode }) => (
  <div>
    <TwitterTweetEmbed key={twitterTweetCode} tweetId={twitterTweetCode} />
  </div>
);

export const SoundCloudEmbed = ({ streamURL }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <ButtonVisibility setVisibility={setVisibility} visibility={visibility} />

      {visibility && (
        <div
          css={style}
          style={{
            display: visibility ? "block" : "none",
          }}
        >
          <ReactPlayer
            url={streamURL}
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
      )}
    </>
  );
};

export const TwitchEmbed = ({ twitchCode }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <ButtonVisibility setVisibility={setVisibility} visibility={visibility} />
      {visibility && (
        <div
          css={style}
          style={{
            display: visibility ? "block" : "none",
          }}
        >
          <iframe
            title="Twitter embed"
            src={`https://player.twitch.tv/?video=${twitchCode}&autoplay=false&parent=${process.env.NEXT_PUBLIC_CLIENT_URL}`}
            frameBorder="0"
            allowFullScreen
            scrolling="no"
            height="378"
            width="620"
          />
        </div>
      )}
    </>
  );
};

export const ShowGiphy = ({ giphyCode }) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <>
      <ButtonVisibility setVisibility={setVisibility} visibility={visibility} />
      {visibility && (
        <div
          css={style}
          style={{
            display: visibility ? "block" : "none",
          }}
        >
          <iframe
            title="giphy embed"
            src={`https://giphy.com/embed/${giphyCode}`}
            width="480"
            height="178"
            frameBorder="0"
            allowFullScreen
          />
          <p>
            <a href={`https://giphy.com/${giphyCode}`}>via GIPHY</a>
          </p>
        </div>
      )}
    </>
  );
};
