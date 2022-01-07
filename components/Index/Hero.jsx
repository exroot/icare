import tw, { css } from "twin.macro";

const Hero = ({ children }) => {
  const heroStyles = css`
    ${tw`
        flex h-screen
        w-full
        text-center
        bg-primary-900
    `}
  `;
  return (
    <>
      <div css={heroStyles}>
        <div tw="m-auto">{children}</div>
      </div>

      {/* <div
        tw="absolute w-full h-64 bottom-0 bg-gradient-to-t from-black flex h-screen
        w-full
        text-center"
      >
        <div tw="m-auto">{children}</div>
      </div>
      <video
        tw="w-full h-64 lg:h-screen object-cover"
        autoplay="true"
        muted="true"
        loop="true"
      >
        <source
          tw="h-screen object-contain"
          src="https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4"
          type="video/mp4"
        />
      </video> */}
    </>
  );
};

export default Hero;
