import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import PropTypes from "prop-types";
import tw, { css } from "twin.macro";

export default function DownloadQRCodeSection() {
  const downloadEmbed = () => {
    const embed = document.getElementById("embed");
    htmlToImage.toPng(embed).then(function (dataUrl) {
      download(dataUrl, "my-embed.png");
    });
  };

  const downloadEmbedTwo = () => {
    const embed = document.getElementById("embedTwo");
    htmlToImage.toPng(embed).then(function (dataUrl) {
      download(dataUrl, "my-embed.png");
    });
  };

  return (
    <>
      {/* <div tw="flex flex-col w-full bg-gray-600 px-4 justify-center items-center p-6"> */}
      {/* <div tw="flex flex-col w-full justify-center items-center"> */}
      {/* <div tw="flex flex-col w-full justify-center"> */}
      <div tw="flex flex-col">
        {/* <HeadingText /> */}
        <HeadingTextDiff />
        <div tw="my-4 py-4 text-center">
          {/* more info on card layout */}
          <div
            tw="my-4 py-4 text-center rounded-lg border-dashed border-4 border-background-secondary 
        hover:border-primary-light transition duration-300 ease-in"
          >
            <div tw="text-center">
              <div tw="flex justify-center">
                <div tw="flex flex-row bg-gray-900 rounded-lg">
                  <div tw="text-gray-700 text-center px-4 py-2 m-2">
                    <SHOUTMO />
                    <UserInfo />
                  </div>
                  <div tw="text-gray-700 text-center px-4 py-2 m-2">
                    <QRCode />
                  </div>
                </div>
              </div>
            </div>
            <DownloadButton onClick={downloadEmbed} />
          </div>
        </div>

        {/* other card layout */}

        <div
          tw="my-4 py-4 text-center rounded-lg border-dashed border-4 border-background-secondary 
        hover:border-primary-light transition duration-300 ease-in"
        >
          <SHOUTMOMultiColorLogoCard />
          <DownloadButton onClick={downloadEmbedTwo} />
        </div>
      </div>
    </>
  );
}

function SHOUTMOMultiColorLogoCard() {
  return (
    <>
      <div tw="flex flex-col w-full px-4 justify-center items-center">
        <div
          tw="flex flex-row justify-center bg-gray-900 shadow-lg rounded-lg w-auto"
          id="embedTwo"
        >
          <div tw="text-gray-700 text-center px-2 py-2 m-2 mr-0">
            {/* <LogoHero size={90} /> */}
            <LogoHero />
          </div>
          {/* <div tw="p-2 m-2"> */} {/* add more space */}
          <div tw="p-1 m-1">
            <div tw="p-1">
              <div>
                <img
                  tw="object-contain rounded p-1 bg-white h-24"
                  src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=203-213-224"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function TestBanner() {
  return (
    <div tw="flex flex-row justify-center bg-gray-900 shadow-lg rounded-lg my-4 w-auto">
      <div tw="text-gray-700 text-center px-2 py-2 m-2">
        <SHOUTMO />
        <UserInfo />
      </div>
      {/* <div tw="p-2 m-2"> */} {/* add more space */}
      <div tw="p-1 m-1">
        <div tw="p-1">
          <QRCode />
        </div>
      </div>
    </div>
  );
}

function QRCode() {
  return (
    <>
      <div>
        <img
          tw="object-contain rounded p-1 bg-white h-32"
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example&bgcolor=203-213-224"
        />
      </div>
    </>
  );
}

function HeadingTextDiff() {
  return (
    <>
      <div
        tw="appearance-none block bg-gradient-to-r from-primary-light to-secondary-light 
text-gray-100 text-center font-bold border border-primary-light 
rounded-lg py-3 px-6 leading-tight mb-8"
      >
        <div tw="leading-tight p-4 text-left">
          <p tw="text-xl mb-2">
            Make it easy for all of your fans to find you all of your links and
            to follow you through SHOUTMO by including these in your videos or
            other content.
          </p>
          <p tw="text-xl">Animated panels coming soon*</p>
        </div>
      </div>
    </>
  );
}

function HeadingText() {
  return (
    <>
      <div
        tw="flex flex-col w-full rounded-lg shadow-lg p-6 mb-4"
        style={{
          background: "rgba(0, 0, 26, .9)",
          color: "white",
        }}
      >
        <p tw="text-3xl font-extrabold leading-tight">
          Make it easy for all of your fans to find you all of your links and to
          follow you through SHOUTMO by including these in your videos or other
          content.
        </p>
        <p tw="mt-2 text-xl font-bold leading-tight">
          Animated panels coming soon*
        </p>
      </div>
    </>
  );
}

function SHOUTMO() {
  return (
    <>
      <p
        tw="text-6xl leading-none -mt-8"
        style={{
          color: "#ff27e1",
          fontFamily: "basiclazer",
        }}
      >
        SHOUTMO
      </p>
    </>
  );
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
        : tw`text-6xl md:text-6xl lg:text-6xl leading-none -mt-3`
    };

    position: relative;
}
`;
  return (
    <>
      <p css={logoStylesforshoutmo}>Shoutmo</p>
    </>
  );
};

LogoHero.propTypes = {
  size: PropTypes.string,
};

function UserInfo() {
  return (
    <>
      <div tw="flex flex-row w-full">
        {/* // image */}
        <img
          tw="rounded-full w-12 h-12"
          src="https://uifaces.co/our-content/donated/1H_7AxP0.jpg"
          alt=""
        />
        {/* // words */}
        <div tw="pl-2">
          <p tw="text-left font-bold text-gray-400">Matt Cowabunga</p>
          <p tw="text-left text-xs text-gray-500">@MattMEGAbit</p>
        </div>
      </div>
    </>
  );
}

function DownloadButton({ onClick }) {
  return (
    <>
      <button
        tw="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold mt-4 py-2 px-4 rounded inline-flex items-center"
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
  );
}
