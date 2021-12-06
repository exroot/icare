import React from 'react'
import Link from 'next/link'
import tw, { css } from 'twin.macro'
import SEO from '../../components/SEO'

function PrivacyContent() {
  return (
    <>
      <p tw="text-2xl pb-2 font-bold">Privacy Policy</p>
      <p tw="pb-2">
        This privacy policy discloses the privacy practices for
        http://www.shoutmo.com and the SHOUTMO app. This privacy policy applies
        solely to information collected by this web site. It will notify you of
        the following:
      </p>
      <p tw="pb-2">
        What personally identifiable information is collected from you through
        the web site, how it is used and with whom it may be shared. What
        choices are available to you regarding the use of your data. The
        security procedures in place to protect the misuse of your information.
        How you can correct any inaccuracies in the information. Information
        collection, use, and sharing
      </p>
      <p tw="pb-2">
        We are the sole owners of the information collected on this site. We
        only have access to/collect information that you voluntarily give us via
        email or other direct contact from you. We will not sell or rent this
        information to anyone.
      </p>
      <p tw="pb-2">
        We will use your information to respond to you, regarding the reason you
        contacted us. We will not share your information with any third party
        outside of our organization, other than as necessary to fulfill your
        request, e.g. to process a credit card.
      </p>
      <p tw="pb-2">
        Unless you ask us not to, we may contact you via email in the future to
        tell you about specials, new products or services, or changes to this
        privacy policy.
      </p>
      <p tw="pb-2">
        Your access to and control over information You may opt out of any
        future contacts from us at any time. You can do the following at any
        time by contacting us via the email address or phone number given on our
        website:
      </p>
      <p tw="pb-2">
        See what data we have about you, if any. Change/correct any data we have
        about you. Have us delete any data we have about you. Express any
        concern you have about our use of your data. Security
      </p>
      <p tw="pb-2">
        We take precautions to protect your information. When you submit
        sensitive information via the website, your information is protected
        both online and offline.
      </p>
      <p tw="pb-2">
        Wherever we collect sensitive information (such as credit card data),
        that information is encrypted and transmitted to us in a secure way. You
        can verify this by looking for a closed lock icon at the bottom of your
        web browser, or looking for "https" at the beginning of the address of
        the web page.
      </p>
      <p tw="pb-2">
        While we use encryption to protect sensitive information transmitted
        online, we also protect your information offline. Only employees who
        need the information to perform a specific job (for example, billing or
        customer service) are granted access to personally identifiable
        information. The computers/servers in which we store personally
        identifiable information are kept in a secure environment.
      </p>
      <p tw="text-xl pb-2 pt-2 font-bold">Credit card information</p>
      <p tw="pb-2">
        We do not store your credit card information directly. It is passed
        through to a third party credit card processing merchant using 128-bit
        SSL encryption. We only keep your credit card's brand, last 4 digits and
        expiration date to assist and remind you of any billing related issues.
      </p>
      <p tw="text-xl pb-2 pt-2 font-bold">Cookies</p>
      <p tw="pb-2">
        We use "cookies" on this site. A cookie is a piece of data stored on a
        site visitor's hard drive to help us improve your access to our site and
        identify repeat visitors to our site. For instance, when we use a cookie
        to identify you, you would not have to log in with a password more than
        once, thereby saving time while on our site. Cookies can also enable us
        to track and target the interests of our users to enhance the experience
        on our site. Usage of a cookie is in no way linked to any personally
        identifiable information on our site.
      </p>
      <p tw="pb-2">
        If you do not want to be tracked by Google Analytics you may opt-out
        using Google's official opt-out browser add-on .
      </p>
      <p tw="text-xl pb-2 pt-2 font-bold">Links</p>
      <p tw="pb-2">
        This web site contains links to other sites. Please be aware that we are
        not responsible for the content or privacy practices of such other
        sites. We encourage our users to be aware when they leave our site and
        to read the privacy statements of any other site that collects
        personally identifiable information.
      </p>
      <p tw="text-xl pb-2 pt-2 font-bold">Updates</p>
      <p tw="pb-2">
        Our privacy policy may change from time to time and all updates will be
        posted on this page.
      </p>
      <p tw="pb-2">
        If you feel that we are not abiding by this privacy policy, you should
        contact us immediately via email.
      </p>
      <p tw="pb-2 pt-2">Last updated September 23rd 2020</p>
    </>
  )
}

function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description={`This privacy policy discloses the privacy practices for
        ${process.env.NEXT_PUBLIC_CLIENT_URL} and the SHOUTMO app. This privacy policy applies
        solely to information collected by this web site.`}
        openGraph={{
          url: process.env.NEXT_PUBLIC_CLIENT_URL,
          type: 'website',
          description: `This privacy policy discloses the privacy practices for
          ${process.env.NEXT_PUBLIC_CLIENT_URL} and the SHOUTMO app. This privacy policy applies
          solely to information collected by this web site.`,
          images: [
            {
              url: process.env.NEXT_PUBLIC_CLIENT_URL + 'img/shoutmo.png',
              width: 1000,
              height: 300,
              alt: 'Shoutmo image',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Navbar />
      <PrivacyCard />
    </>
  )
}

function PrivacyCard() {
  return (
    <>
      <div tw="min-h-screen bg-gray-700 py-6 mt-12 flex flex-col justify-center sm:py-12">
        <div tw="relative py-3 sm:mx-auto">
          <div tw="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div tw="max-w-md mx-auto">
              <div tw="py-8 leading-6 space-y-4 text-gray-700 sm:leading-7">
                <PrivacyContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const NavItems = () => {
  const listStyles = css`
    ${tw`py-2 px-4
      cursor-pointer
      transition duration-500 ease-in-out
      uppercase
      font-light
      `}
    &:hover {
      text-shadow: -0.04em 0 #ff08ff, 0.04em 0 cyan;
    }
  `
  return (
    <>
      <div tw="flex flex-wrap font-bold">
        <Link href="/login">
          <a css={[listStyles, tw`mr-4`]} href="/login">
            login
          </a>
        </Link>
        <Link href="/signup">
          <a css={listStyles} href="/signup">
            signup
          </a>
        </Link>
      </div>
    </>
  )
}

function Navbar() {
  return (
    <>
      <nav tw="fixed w-full z-30 top-0 text-white bg-black">
        <div tw="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-3">
          <div tw="pl-4 flex items-center">
            <span>
              <LogoHero size={45} />
            </span>
          </div>
          <div tw="block pr-4">
            <NavItems />
          </div>
        </div>
      </nav>
    </>
  )
}

const LogoHero = ({ size }) => {
  const logoStylesforshoutmo = css`
      ${tw`
          uppercase
          text-white
          tracking-wide
      `}
      font-family: "basiclazer";
      /* blue glow - low intensity */
      text-shadow:  -0.04em 0 #ff08ff, 
      0.04em 0 cyan, 
      0 0 10px blue, 0 0 5px blue, 
      0 0 0px blue, 0 0 1px blue, 
      0 0 40px blue;
      /* no shadow */
      text-shadow:  -0.04em 0 #ff08ff, 0.04em 0 cyan;
  
      ${size ? `font-size: ${size}px;` : tw`text-5xl lg:text-6xl leading-none`};
  
      position: relative;
  }
  `
  return (
    <>
      <span css={logoStylesforshoutmo}>Shoutmo</span>
    </>
  )
}

export default Privacy
