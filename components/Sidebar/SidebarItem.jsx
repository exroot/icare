import PropTypes from "prop-types";
import Link from "next/link";
import tw, { css } from "twin.macro";

const SidebarItem = ({ children, href, pathname }) => {
  const selectedStyle = css`
    ${tw`mt-1 flex items-center px-4 py-2 text-base leading-8 font-medium text-primary-light rounded-md bg-background-secondary focus:outline-none focus:bg-background-secondary transition ease-in-out duration-150`}
  `;
  const defaultStyle = css`
    ${tw`mt-1 flex items-center px-4 py-2 text-base leading-8 font-medium text-gray-500 rounded-md hover:text-text-darker hover:bg-background-secondary focus:outline-none focus:text-text-darker focus:bg-background-secondary transition ease-in-out duration-150 cursor-pointer`}
  `;
  const itemStyle = pathname === href ? selectedStyle : defaultStyle;
  return (
    <>
      <Link href={href} as={href}>
        <a className="group" css={itemStyle} href={href}>
          {children}
        </a>
      </Link>
    </>
  );
};

SidebarItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

export default SidebarItem;
