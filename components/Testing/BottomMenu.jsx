import tw, { css } from "twin.macro";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaRegEnvelope, FaUsers, FaSearch } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { CgFeed } from "react-icons/cg";

function BottomMenu() {
  const { pathname } = useRouter();
  const selectedStyle = css`
    ${tw`sm:border-b border-gray-900 flex-1 sm:w-full h-full w-full text-purple-500 block p-3 bg-opacity-75`}
  `;
  const defaultStyle = css`
    ${tw`sm:border-b border-gray-900 flex-1 sm:w-full h-full w-full hover:text-purple-500 block p-3`}
  `;

  return (
    <>
      {/* <!-- mobile and tablet menu --> */}
      <div tw="fixed bottom-0 lg:hidden xl:hidden w-full h-12 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div tw="flex flex-row w-full">
          <Link href="/testing/NewLayout/settings" passHref>
            <a
              css={pathname.includes("settings") ? selectedStyle : defaultStyle}
            >
              <FiSettings size={24} tw="mx-auto" />
            </a>
          </Link>
          <Link href="/testing/NewLayout/messages" passHref>
            <a
              css={
                pathname === "/testing/NewLayout/messages"
                  ? selectedStyle
                  : defaultStyle
              }
            >
              <FaRegEnvelope size={24} tw="mx-auto" />
            </a>
          </Link>
          <Link href="/testing/NewLayout/search" passHref>
            <a
              css={
                pathname === "/testing/NewLayout/search"
                  ? selectedStyle
                  : defaultStyle
              }
            >
              <FaSearch size={24} tw="mx-auto" />
            </a>
          </Link>
          <Link href="/testing/NewLayout" passHref>
            <a
              css={
                pathname === "/testing/NewLayout" ? selectedStyle : defaultStyle
              }
            >
              <CgFeed size={24} tw="mx-auto" />
            </a>
          </Link>
          <Link href="/testing/NewLayout/circle" passHref>
            <a
              css={
                pathname === "/testing/NewLayout/circle"
                  ? selectedStyle
                  : defaultStyle
              }
            >
              <FaUsers size={24} tw="mx-auto" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BottomMenu;
