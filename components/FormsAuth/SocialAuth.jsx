/* eslint-disable camelcase */
import React from 'react'
import GoogleLogin from 'react-google-login'
import TwitterLogin from 'react-twitter-login'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from '../../lib/client'
import useUser from '../../lib/useUser'
import {
  FacebookAuthButton,
  GoogleAuthButton,
  TwitterAuthButton,
} from './SocialAuthButtons'
import 'twin.macro'

const SocialAuth = () => {
  const { mutateUser } = useUser({
    redirectTo: '/feed',
    redirectIfFound: true,
    oneCall: true,
  })
  const handleTwitterSubmit = async (error, successResponse) => {
    if (error) {
      console.error('Error on twitter login submit: ', error)
      return
    }
    const { oauth_token, oauth_token_secret } = successResponse
    try {
      const body = {
        access_token_key: oauth_token,
        access_token_secret: oauth_token_secret,
      }
      const { data } = await axios({
        url: '/social-auth/twitter/',
        body,
        method: 'POST',
      })
      /* TODO: REMOVE LOCALSTORAGE BEFORE OFFICIAL RELEASE */
      localStorage.setItem('access', data.tokens.access)
      localStorage.setItem('refresh', data.tokens.refresh)
      await mutateUser(null, true)
    } catch (err) {
      console.error(err)
    }
  }

  const handleFacebookSumbit = async (res) => {
    try {
      const { data } = await axios({
        url: '/social-auth/facebook/',
        body: {
          auth_token: res.accessToken,
        },
        method: 'POST',
      })
      /* TODO: REMOVE LOCALSTORAGE USAGE BEFORE OFFICIAL RELEASE */
      localStorage.setItem('access', data.tokens.access)
      localStorage.setItem('refresh', data.tokens.refresh)
      await mutateUser(null, true)
    } catch (err) {
      console.error(err)
    }
  }

  const handleGoogleSubmit = async (res) => {
    try {
      const { data } = await axios({
        url: '/social-auth/google/',
        body: {
          auth_token: res.tokenId,
        },
        method: 'POST',
      })
      /* TODO: REMOVE LOCALSTORAGE USAGE BEFORE OFFICIAL RELEASE */
      localStorage.setItem('access', data.tokens.access)
      localStorage.setItem('refresh', data.tokens.refresh)
      await mutateUser(null, true)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div tw="grid grid-cols-3 gap-2">
      {' '}
      <FacebookLogin
        appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID}
        autoLoad={false}
        fields="name,email,picture"
        callback={handleFacebookSumbit}
        render={(renderProps) => (
          <FacebookAuthButton onClick={renderProps.onClick} />
        )}
      />
      <GoogleLogin
        clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <GoogleAuthButton
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Sign in with Google
          </GoogleAuthButton>
        )}
        buttonText="Sign in with Google"
        onSuccess={(successResponse) => handleGoogleSubmit(successResponse)}
        onFailure={(err) => console.error(err)}
        cookiePolicy="single_host_origin"
      />
      <TwitterLogin
        consumerKey={process.env.NEXT_PUBLIC_TWITTER_CONSUMER_KEY}
        consumerSecret={process.env.NEXT_PUBLIC_TWITTER_CONSUMER_SECRET}
        authCallback={handleTwitterSubmit}
      >
        <TwitterAuthButton>Sign in with Twitter</TwitterAuthButton>
      </TwitterLogin>
    </div>
  )
}

export default SocialAuth
