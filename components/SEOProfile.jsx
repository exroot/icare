/* eslint-disable react/prop-types */
import React from 'react'
import SEO from './SEO'

const SEOProfile = ({ profile }) => {
  if (!profile) {
    return <SEO />
  }
  return (
    <SEO
      title={profile.username}
      description={profile.bio ?? `${profile.username}'s profile page`}
      slug={profile.username}
      type="profile"
      openGraph={{
        profile: {
          firstName: `${profile.first_name ?? ''}`,
          lastName: `${profile.last_name ?? ''}`,
          username: profile.username,
        },
        images: [
          {
            url: `${profile.profile_picture ?? '/img/avatar_placeholder.png'}`,
            width: 150,
            height: 150,
            alt: 'Profile Photo',
          },
        ],
      }}
    />
  )
}
export default SEOProfile
