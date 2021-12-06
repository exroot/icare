import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import OutsideClickHandler from 'react-outside-click-handler'
import { RiMapPin2Line, RiLinksLine } from 'react-icons/ri'
import SecondaryButton from '../Buttons/SecondaryButton'
import Linkify from 'react-linkify'
import 'twin.macro'

const ProfileCard = ({ profile, setPreview }) => {
  return (
    <div tw="w-full bg-background-primary rounded-md shadow-md pb-4">
      <div tw="rounded-md">
        {/* Cover image */}
        <div tw="overflow-hidden w-full rounded-t">
          <div
            tw="w-full bg-cover bg-center bg-gray-400"
            style={{
              height: '20rem',
              backgroundImage: `url(${
                profile.cover_picture && profile.cover_picture
              })`,
            }}
          ></div>
        </div>
        {/* Profile image */}
        <div tw="flex justify-start -mt-8">
          <img
            src={profile.profile_picture || '/img/avatar_placeholder.png'}
            tw="rounded-full border-solid border-background-primary border-4 -mt-8 ml-4"
            style={{
              maxHeight: '8rem',
            }}
          />
        </div>
        {/* User info */}
        <div tw="px-8 pb-6 pt-2">
          {/* Header */}
          <div tw="flex justify-between">
            <div>
              {profile.first_name || profile.last_name ? (
                <h1 tw="text-text-darker text-sm font-bold font-sans text-xl">
                  {profile.first_name} {profile.last_name}
                </h1>
              ) : (
                <h1 tw="text-text-darker text-sm font-bold font-sans text-xl">
                  {profile.username} profile page
                </h1>
              )}

              <span tw="text-text-dark">@{profile.username}</span>
            </div>
            <div>
              <SecondaryButton onClick={() => setPreview(false)}>
                Close preview
              </SecondaryButton>
            </div>
          </div>
          {/* Body */}
          <div tw="block text-left">
            {/* Bio */}
            {profile.bio && (
              <p tw="mt-2 font-sans font-light text-text-dark break-all">
                {profile.bio}
              </p>
            )}
            <div tw="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {/* Geo info */}
              {profile.location_city || profile.location_country ? (
                <div tw="flex justify-start">
                  <RiMapPin2Line tw="mt-3 mr-2 w-4 text-lg text-primary-light" />
                  {profile.location_city && (
                    <p tw="mt-2 font-sans font-light text-text-dark mr-2">
                      {profile.location_city}
                    </p>
                  )}

                  {profile.location_country && (
                    <p tw="mt-2 font-sans font-light text-text-dark">
                      {profile.location_country}
                    </p>
                  )}
                </div>
              ) : null}

              {/* Website */}
              {profile.website && (
                <div tw="flex justify-start">
                  <RiLinksLine tw="mt-3 mr-2 w-4 text-lg text-primary-light" />
                  <Linkify
                    componentDecorator={(decoratedHref, decoratedText, key) => (
                      <>
                        <a
                          target="_blank"
                          href={decoratedHref}
                          rel={'noopener noreferrer'}
                          key={key}
                          style={{
                            color: '#667eea',
                          }}
                          tw="mt-2 font-sans text-text-dark"
                        >
                          {decoratedText}
                        </a>
                      </>
                    )}
                  >
                    {profile.website}
                  </Linkify>
                </div>
              )}
            </div>
          </div>
        </div>
        <div tw="flex justify-center pb-3 text-text-dark">
          <div tw="text-center mr-3 border-r pr-3">
            <h2>34</h2>
            <span>Shoutouts</span>
          </div>
          <div tw="text-center">
            <h2>42</h2>
            <span>Followers</span>
          </div>
        </div>
      </div>
    </div>
  )
}
const ProfilePreview = ({ profile, show, setPreview }) => {
  const container = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
  }
  const backup = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 0.5,
    },
    exit: {
      opacity: 0,
    },
  }
  const modal = {
    initial: {
      scale: 1.2,
      opacity: 0,
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 1.2,
    },
  }
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          tw="w-full overflow-x-hidden fixed inset-0 outline-none focus:outline-none z-50"
          variants={container}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Gray background */}
          <div tw="w-full fixed inset-0">
            <motion.div
              tw="absolute inset-0 bg-black"
              variants={backup}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </div>
          <OutsideClickHandler onOutsideClick={() => setPreview(false)}>
            {/* Modal */}
            <motion.div
              tw="relative mt-4 mb-8 w-11/12 md:w-5/6 my-6 mx-auto"
              variants={modal}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <ProfileCard profile={profile} setPreview={setPreview} />
            </motion.div>
          </OutsideClickHandler>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
export default ProfilePreview
