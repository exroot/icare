import { useRouter } from "next/router";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import PropTypes from "prop-types";
import tw, { css } from "twin.macro";
import QRCode from "qrcode.react";
import axios from "axios";
import SEO from "../../components/SEO";
import PageLoader from "../../components/PageLoader";


const SEOProfile = ({ profile }) => {
  if (!profile) {
    return <SEO />;
  }
  return (
    <SEO
      title={profile.username}
      description={`${profile.username}'s profile page`}
      slug={profile.username}
      type="profile"
      openGraph={{
        profile: {
          firstName: `${profile.first_name ?? ""}`,
          lastName: `${profile.last_name ?? ""}`,
          username: profile.username,
        },
        images: [
          {
            url: `${profile.profile_picture ?? "/img/avatar_placeholder.png"}`,
            width: 150,
            height: 150,
            alt: "Profile Photo",
          },
        ],
      }}
    />
  );
};

const Profile = ({ data }) => {
  const router = useRouter();
  const downloadEmbed = (id) => {
    const embed = document.getElementById(id);
    htmlToImage.toPng(embed).then((dataUrl) => {
      download(dataUrl, "my-embed.png");
    });
  };

  if (router.isFallback) {
    return (
      <>
        <SEOProfile />
        <PageLoader />
      </>
    );
  }
  if (data.notFound) {
    return (
      <>
        <SEOProfile />
        <div tw="flex flex-col w-full bg-gray-900 px-4 justify-center items-center h-screen">
          <SHOUTMO />
          <h3 tw="text-gray-400">
            This user doesn't exist, try search for another.
          </h3>
        </div>
      </>
    );
  }
  return (
    <>
      <SEOProfile profile={data.profile} />
      <div tw="flex flex-col w-full bg-gray-600 px-4 justify-center items-center h-screen">
        <div tw="mb-2 text-center">
          <ShoutmoCardOne profile={data.profile} />
          <DownloadButton onClick={() => downloadEmbed("cardOne")} />
        </div>
        <div tw="mt-2 text-center">
          <ShoutmoCardTwo profile={data.profile} />
          <DownloadButton onClick={() => downloadEmbed("cardTwo")} />
        </div>
      </div>
    </>
  );
};

const ShoutmoCardOne = ({ profile }) => (
  <div
    tw="flex flex-row justify-center bg-gray-900 shadow-lg rounded-lg w-auto"
    id="cardOne"
  >
    <div tw="text-gray-700 text-center px-2 py-2 m-2">
      <SHOUTMO />
      <UserInfo profile={profile} />
    </div>
    {/* <div tw="p-2 m-2"> */} 
    {' '}
    {/* add more space */}
    <div tw="p-1 m-1">
      <div tw="p-1">
        <UserQRCode profile={profile} />
      </div>
    </div>
  </div>
  );

const ShoutmoCardTwo = ({ profile }) => (
  <>
    <div tw="flex flex-col w-full bg-gray-600 px-4 justify-center items-center">
      <div
        tw="flex flex-row justify-center bg-gray-900 shadow-lg rounded-lg w-auto"
        id="cardTwo"
      >
        <div tw="text-gray-700 text-center px-2 py-6 m-2 mr-0">
          <LogoHero />
        </div>
        <div tw="p-1 m-1">
          <div tw="p-1">
            <QRCode
              tw="mx-auto border-4 border-gray-100 h-32 rounded"
              id="qrcode"
              value={
                  `${process.env.NEXT_PUBLIC_CLIENT_URL}${  profile.username}`
                }
              size={128}
              bgColor="#fff"
              fgColor="#000"
              level="L"
              includeMargin={false}
              renderAs="svg"
            />
          </div>
        </div>
      </div>
    </div>
  </>
  );

const SHOUTMO = () => (
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

const UserQRCode = ({ profile }) => (
  <QRCode
    tw="mx-auto border-4 border-gray-100 rounded"
    id="qrcode"
    value={`${process.env.NEXT_PUBLIC_CLIENT_URL}${  profile.username}`}
    size={128}
    bgColor="#fff"
    fgColor="#000"
    level="L"
    includeMargin={false}
    renderAs="svg"
  />
  );

const UserInfo = ({ profile }) => (
  <>
    <div tw="flex flex-row w-full">
      {/* // image */}
      <img
        tw="rounded-full w-12 h-12"
        src={profile.profile_picture || "/img/avatar_placeholder.png"}
        alt=""
      />
      {/* // words */}
      <div tw="pl-2">
        <p tw="text-left font-bold text-gray-400">
          {`${profile.first_name  } ${  profile.last_name}`}
        </p>
        <p tw="text-left text-xs text-gray-500">{`@${  profile.username}`}</p>
      </div>
    </div>
  </>
  );

const DownloadButton = ({ onClick }) => (
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

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  const { username } = params;
  try {
    const { data: response } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/profiles/${username}`
    );
    return { props: { data: response.data } };
  } catch (err) {
    console.error(err);
    return { props: { data: { notFound: true } } };
  }
}

export default Profile;
