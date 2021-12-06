import { useRouter } from "next/router";
import Link from "next/link";
import { RiArrowRightSFill } from "react-icons/ri";
import tw, { css } from "twin.macro";

const Container = ({ children }) => {
  return (
    <div tw="px-4 mb-6">
      <div tw="w-full bg-background-primary rounded-md shadow-md py-4">
        {children}
      </div>
    </div>
  );
};

const Item = ({ href, children }) => {
  const router = useRouter();
  const styles = css`
    ${tw`w-full block text-text-dark hover:text-primary-light hover:font-bold transition duration-200 ease-in py-4 pl-10`}
    ${router.pathname === href
      ? tw`border-l-4 border-primary-light pl-0 font-bold text-primary-light`
      : ""}
  `;
  return (
    <Link href={href}>
      <a href={href} css={styles}>
        <span tw="flex">
          {router.pathname === href && (
            <RiArrowRightSFill tw="text-2xl text-primary-light" />
          )}
          {children}
        </span>
      </a>
    </Link>
  );
};

const ProfileNavigation = () => {
  return (
    <Container>
      <Item href="/profile/settings">Profile information</Item>
      <Item href="/profile/settings/security">Security</Item>
      <Item href="/profile/settings/preferences">Preferences</Item>
      {/* <Item href="/profile/settings/assets">Assets</Item> */}
      <Item href="/profile/settings/extras">Extras</Item>
    </Container>
  );
};

export default ProfileNavigation;
