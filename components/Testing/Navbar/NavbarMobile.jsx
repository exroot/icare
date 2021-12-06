import tw, { css } from "twin.macro";

const NavbarMobile = ({ left, title, right }) => {
  const headerStyle = css`
    ${tw`fixed flex flex-wrap flex-col w-full top-0 bg-white`} &::before {
      background-color: rgba(219, 219, 219, 1);
      bottom: -1px;
      height: 1px;
      content: "";
      left: 0;
      right: 0;
      position: absolute;
      z-index: 50;
    }
  `;
  return (
    <header css={headerStyle}>
      <div tw="flex flex-row h-12 px-4 justify-between items-center w-full text-gray-500">
        {/* Left */}
        <div tw="flex flex-row">{left}</div>
        {/* Center */}
        <h1 tw="block text-center text-black">{title}</h1>
        {/* Right */}
        <div tw="flex flex-row justify-end">{right}</div>
      </div>
    </header>
  );
};

export default NavbarMobile;
