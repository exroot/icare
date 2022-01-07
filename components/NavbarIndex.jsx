import Link from "next/link";
import tw, { css } from "twin.macro";

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
  `;
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
            registro
          </a>
        </Link>
      </div>
    </>
  );
};
const Navbar = () => {
  return (
    <>
      <nav tw="fixed w-full z-30 top-0 text-white">
        <div tw="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-6">
          {/* Logo */}
          <div tw="pl-4 flex items-center">
            <span></span>
          </div>
          {/* TODO: Hamburguer button for mobile devices */}
          <div tw="block pr-4">
            <NavItems />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
