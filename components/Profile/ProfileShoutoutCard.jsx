/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import Linkify from 'react-linkify'
import TimeAgo from 'timeago-react'
import tw, { css } from 'twin.macro'

const ProfileShoutoutCard = ({ shoutout }) => {
  const styles = css`
    position: absolute;
    top: 0;
    right: 0;
    width: 45px;
    height: 25px;
    margin-right: -13px;
    margin-top: 0px;
    padding-top: 0.15rem;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Safari prior 9.0 */
    transform: rotate(45deg); /* Standard syntax */
    box-shadow: 0 0 1px 1px #fff, /* inner white */ 0 0 11px 1px #f0f,
      /* middle magenta */ 0 0 11px 2px #0ff;
    border-bottom-left-radius: 5px;
    border-top-right-radius: 5px;
  `

  const isNew = (shoutoutCreation) => {
    const twoDays = 2 * 24 * 60 * 60 * 1000 // 48 hours;
    const twoDaysAgo = Date.now() - twoDays
    return Date.parse(shoutoutCreation) > twoDaysAgo
  }

  return (
    <>
      <div tw="m-2">
        <div tw="p-2 w-64 h-64 bg-primary-800 rounded shadow hover:shadow-lg transition duration-300 ease-in">
          <div tw="p-2 relative text-sm leading-tight text-primary-400 sm:flex sm:items-center">
            <div tw="break-all">
              {/* Shoutout header */}
              <div tw="">
                {/* Shoutout title */}
                <div tw="font-bold text-text-dark text-accent">
                  @{shoutout.creator.username}
                </div>
                {/* Shoutout publication date  */}
                <TimeAgo tw="text-xs mt-1" datetime={shoutout.created_at} />
              </div>
              {/* Shoutout body */}
              <p tw="pt-4 pb-4 text-sm tracking-wide">
                <Linkify
                  componentDecorator={(decoratedHref, decoratedText, key) => (
                    <Fragment key={key}>
                      {/* Link */}
                      <a
                        target="_blank"
                        href={decoratedHref}
                        rel={'noopener noreferrer'}
                        style={{
                          color: 'var(--color-accent)',
                          backgroundColor: 'var(--color-accent-hover-outline)',
                          marginRight: '5px',
                        }}
                        tw="px-2 rounded-full"
                      >
                        {decoratedText}
                      </a>
                    </Fragment>
                  )}
                >
                  {shoutout.text}
                </Linkify>
              </p>
            </div>
            {/* "new" Ribbon */}

            {isNew(shoutout.created_at) && (
              <div
                tw="bg-accent text-sm text-center text-white font-bold tracking-wider"
                css={styles}
              >
                new
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileShoutoutCard
