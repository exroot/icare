/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Linkify from 'react-linkify'
import {
  YoutubeEmbed,
  BitchuteEmbed,
  TwitterEmbed,
  SoundCloudEmbed,
  TwitchEmbed,
  ShowGiphy,
} from './Feed/Embeds'
import 'twin.macro'

const Parser = ({ message }) => {
  // my custom regex
  const checkIfOtherEmbed = /((https?:)?\/\/)?((www|m)\.)?(bitchute|giphy|twitch|twitter|stitcher|soundcloud|youtube|youtu|pscp)?(\.com|\.tv|\.be)?(\/(?:[\w\-]+\?v=|podcast|embed\/|v\/)?)([\w\-]+)(\S+)?$/

  const m = checkIfOtherEmbed.exec(message)

  while (m !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m[5] === 'bitchute') {
      // remove forward and trailing slashes
      const bitchuteVidcode = m[9].replace(/^[\\/]+|[\\/]+$/g, '')
      return <BitchuteEmbed key={bitchuteVidcode} videocode={bitchuteVidcode} />
    }
    if (m[5] === 'twitch') {
      const twitchCode = m[9].replace('/', '')
      return <TwitchEmbed key={twitchCode} twitchCode={twitchCode} />
    }
    if (m[5] === 'twitter') {
      const getid = /\d{5,25}/ // find the large string id in the URL
      const twitterID = getid.exec(m[0]) // grab the string out of the array
      const twitterTweetCode = twitterID[0]
      return (
        <TwitterEmbed
          key={twitterTweetCode}
          twitterTweetCode={twitterTweetCode}
        />
      )
    }
    if (m[5] === 'soundcloud') {
      const streamURL = m[0]
      return <SoundCloudEmbed key={streamURL} streamURL={streamURL} />
    }
    if (m[5] === 'giphy') {
      const giphyCode = m[9].replace('/', '')
      return <ShowGiphy key={giphyCode} giphyCode={giphyCode} />
    }
    if (m[5] === 'youtube') {
      const YoutubeVideocode = m[8]
      // recheck for valid videos
      const regEx =
        '^(?:https?:)?//[^/]*(?:youtube(?:-nocookie)?.com|youtu.be).*[=/]([-\\w]{11})(?:\\?|=|&|$)'
      const matches = message.match(regEx)

      if (!matches) {
        // return null if a video url it's not provided
        return null
      }

      return (
        <YoutubeEmbed key={YoutubeVideocode} videocode={YoutubeVideocode} />
      )
    }
    if (m[5] === 'stitcher') {
      // working but hacky
      // const stitcherRegex = /(\/e\/)(.*\d{3,10})/i;
      // let geteid = stitcherRegex.exec(m[9]);
      // let eid = geteid[2];
      return null
      //  return <ShowStitcherEmbed eid={eid} />
    }
    // swap these if you need to see a placeholder
    // return <PlainMessageWithPlaceholder />;
    return null
  }
  return null
}

const Linkit = ({ children }) => (
  <Linkify
    componentDecorator={(decoratedHref, decoratedText, key) => (
      <Fragment key={key}>
        {/* Link */}
        <a
          target="_blank"
          href={decoratedHref}
          rel="noopener noreferrer"
          style={{
            color: 'var(--color-accent)',
            backgroundColor: 'var(--color-primary-900)',
          }}
          tw="px-2 rounded-full"
        >
          {decoratedText}
        </a>
        <Parser message={decoratedText} />
      </Fragment>
    )}
  >
    {/* Actual text inside anchor tag */}
    {children}
  </Linkify>
)

export default Linkit
