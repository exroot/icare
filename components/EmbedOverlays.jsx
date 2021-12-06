import * as htmlToImage from 'html-to-image'
import download from 'downloadjs'
import PropTypes from 'prop-types'
import QRCodeThing from 'qrcode.react'
import tw, { css } from 'twin.macro'

function DownloadQRCodeSection(props) {
  const user = props?.user

  const downloadEmbedTwo = () => {
    const embed = document.getElementById('embedTwo')
    htmlToImage.toPng(embed).then((dataUrl) => {
      download(dataUrl, 'my-embed.png')
    })
  }

  const downloadBigQRCODE = () => {
    const embed = document.getElementById('embedThree')
    htmlToImage.toPng(embed).then((dataUrl) => {
      download(dataUrl, 'my-embed.png')
    })
  }

  return (
    <>
      <div tw="flex flex-col">
        {/* <HeadingText /> */}
        <HeadingTextDiff />

        {/* new QR Code style */}

        <JustTheQRCode user={props?.user} />

        {/* wide style QR Code */}

        <div
          tw="my-4 py-4 text-center rounded-lg border-dashed border-4 border-primary-700 
        hover:border-accent transition duration-300 ease-in"
        >
          <SHOUTMOMultiColorLogoCard user={props?.user} />
          <DownloadButton onClick={downloadEmbedTwo} />
        </div>
      </div>

      {/* Just QR Code */}

      <div tw="my-4 py-4 text-center">
        <div
          tw="my-4 py-4 text-center rounded-lg border-dashed border-4 border-primary-700 
        hover:border-accent transition duration-300 ease-in"
        >
          <JustQRCode user={props?.user} />
          <DownloadButton onClick={downloadBigQRCODE} />
        </div>
      </div>
    </>
  )
}

function UserInfo(props) {
  const profile = props?.user

  return (
    <>
      <div tw="flex flex-row w-full">
        {/* // image */}
        <img
          tw="rounded-full w-12 h-12"
          src={profile?.profile_picture || '/img/avatar_placeholder.png'}
          alt="avatar"
        />
        {/* // words */}
        <div tw="pl-2">
          {profile?.first_name || profile?.last_name ? (
            <p tw="text-left font-bold text-gray-400">
              {profile?.first_name} {profile?.last_name}
            </p>
          ) : (
            <p tw="text-left font-bold text-gray-400"> </p>
          )}
          <p tw="text-left text-xs text-gray-500">@{profile?.username}</p>
        </div>
      </div>
    </>
  )
}

function JustQRCode(props) {
  const profile = props?.user

  return (
    <>
      <div tw="text-center">
        <div tw="flex justify-center">
          <div tw="flex flex-row bg-gray-900 rounded-lg" id="embedThree">
            <BigQRCODE profile={profile?.username} />
          </div>
        </div>
      </div>
    </>
  )
}

function SHOUTMOCardWithPhoto(props) {
  const profile = props?.user

  return (
    <>
      <div tw="text-center w-3 mx-auto">
        <div tw="flex justify-center">
          <div tw="flex flex-row bg-gray-900 rounded-lg" id="embed">
            <div tw="text-center px-4 py-2 m-2">
              <SHOUTMO />
              <UserInfo user={props?.user} />
            </div>
            <div tw="text-center px-4 py-2 m-2">
              <UserQRCode profile={profile?.username} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function SHOUTMOMultiColorLogoCard(props) {
  const profile = props?.user

  return (
    <>
      <div tw="flex flex-col w-full px-4 justify-center items-center">
        <div
          tw="flex flex-row p-3 space-x-3 justify-center bg-black shadow-lg rounded-lg w-auto items-center"
          id="embedTwo"
        >
          <div tw="text-center -mt-4 pl-1">
            <LogoHero />
          </div>
          <div tw="">
            <UserQRCodeSmall profile={profile?.username} />
          </div>
        </div>
      </div>
    </>
  )
}

const BigQRCODE = (props) => (
  <QRCodeThing
    tw="mx-auto border-4 border-gray-100 rounded"
    id="qrcode"
    value={`${process.env.NEXT_PUBLIC_CLIENT_URL}${props?.profile}`}
    size={250}
    bgColor="#CBD5E0"
    fgColor="#000"
    level="L"
    includeMargin={false}
    renderAs="svg"
  />
)

const UserQRCode = (props) => (
  <QRCodeThing
    tw="mx-auto border-4 border-gray-100 rounded"
    id="qrcode"
    value={`${process.env.NEXT_PUBLIC_CLIENT_URL}${props?.profile}`}
    size={128}
    bgColor="#CBD5E0"
    fgColor="#000"
    level="L"
    includeMargin={false}
    renderAs="svg"
  />
)

const UserQRCodeSmall = (props) => (
  <QRCodeThing
    tw="mx-auto border-4 border-gray-100 rounded"
    id="qrcode"
    value={`${process.env.NEXT_PUBLIC_CLIENT_URL}${props?.profile}`}
    size={96}
    bgColor="#CBD5E0"
    fgColor="#000"
    level="L"
    includeMargin={false}
    renderAs="svg"
  />
)

function HeadingTextDiff() {
  return (
    <>
      <div
        tw="mt-2 appearance-none block bg-primary-800
        text-primary-200 text-center
        rounded-lg py-3 px-6 leading-tight mb-4 shadow-2xl"
      >
        <div tw="leading-normal p-4 lg:p-8 text-left">
          <h3 tw="text-xl font-bold mb-2 uppercase">
            Make it easy for all of your fans to find you
          </h3>
          <p tw="text-base mb-4 text-primary-400">
            Your profile with{' '}
            <span tw="text-primary-200 border-b-2 border-accent">
              all your links
            </span>
            . Make everyone follow you through{' '}
            <span tw="text-primary-200 uppercase font-bold">Shoutmo</span> by
            including these in your videos or other content.
          </p>
          <p tw="text-base italic">*Animated panels coming soon*</p>
        </div>
      </div>
    </>
  )
}

function SHOUTMO() {
  return (
    <>
      <p
        tw="text-5xl lg:text-6xl leading-none -mt-8"
        style={{
          color: '#ff27e1',
          fontFamily: 'basiclazer',
        }}
      >
        SHOUTMO
      </p>
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

    ${
      size
        ? `font-size: ${size}px;`
        : tw`text-5xl lg:text-6xl leading-none -mt-3`
    };

    position: relative;
}
`
  return (
    <>
      <span css={logoStylesforshoutmo}>Shoutmo</span>
    </>
  )
}

LogoHero.propTypes = {
  size: PropTypes.string,
}

function DownloadButton({ onClick }) {
  return (
    <>
      <button
        tw="bg-primary-800 hover:bg-primary-700 text-button font-medium mt-4 py-2 px-4 rounded inline-flex items-center shadow"
        onClick={onClick}
      >
        <svg
          tw="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download</span>
      </button>
    </>
  )
}

export default DownloadQRCodeSection

// smaller card to add

// function EmbedCardVideoOverlaySmaller() {
//   return (
//     <>
//       <div tw="flex bg-gray-900 shadow-lg rounded-lg w-auto m-2 ">
//         <div tw="flex items-start px-4">
//           <div>
//             <div tw="flex items-center justify-between">
//               <div tw="">
//                 <SHOUTMOlogo />
//                 {/* <Qrcodewithborder /> */}
//                 <div tw="w-full flex mb-4">
//                   <div tw="overflow-hidden rounded-full w-12 h-12">
//                     <img
//                       src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
//                       alt=""
//                     />
//                   </div>
//                   <div tw="flex-grow pl-3">
//                     <h6 tw="font-bold text-gray-400">Joe Blow</h6>
//                     <p tw="text-xs text-gray-500">@joe.blow</p>
//                   </div>
//                 </div>
//               </div>{" "}
//               <Qrcodewithborder />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import PropTypes from 'prop-types'
// import * as htmlToImage from 'html-to-image'
// import download from 'downloadjs'

// // eslint-disable-next-line no-unused-vars
// import tw, { css } from 'twin.macro'

// import LogoHero from './parts/LogoMultiColor'
// import BigQRCODE from './parts/BigQRCODE'

function downloadJustTheQRCode() {
  const embed = document.getElementById('JustTheQRCode')
  htmlToImage.toPng(embed).then((dataUrl) => {
    download(dataUrl, 'shoutmo-qrcode.png')
  })
}

function JustTheQRCode({ user }) {
  // eslint-disable-next-line camelcase
  const { username } = user

  return (
    <>
      <div tw="my-4 py-4 text-center">
        <div tw="my-4 py-4 text-center rounded-lg border-dashed border-4 border-primary-700 hover:border-accent transition duration-300 ease-in">
          <div tw="flex flex-col w-full px-4 justify-center items-center p-4">
            <div
              tw="flex flex-col p-2 justify-center bg-black shadow-lg rounded-lg w-auto items-center border border-gray-600"
              id="JustTheQRCode"
            >
              <div tw="max-w-sm flex justify-center mx-auto">
                <BigQRCODE profile={username} />
              </div>

              <div tw="flex place-self-start ml-1 -my-3">
                <LogoHero size="36" />
              </div>
              {/* <p tw="inline font-mono text-white text-sm">>>Get @ me</p> */}
            </div>
          </div>
          <PlaceholderButton onClick={downloadJustTheQRCode} />
        </div>
      </div>
    </>
  )
}

// eslint-disable-next-line react/prop-types
function PlaceholderButton({ onClick }) {
  return (
    <>
      <button
        type="button"
        tw="bg-primary-800 hover:bg-primary-700 text-button font-medium mt-4 py-2 px-4 rounded inline-flex items-center shadow"
        onClick={onClick}
      >
        <svg
          tw="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download</span>
      </button>
    </>
  )
}

JustTheQRCode.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string,
    profile_picture: PropTypes.string,
  }),
}

JustTheQRCode.defaultProps = {
  user: {},
}
