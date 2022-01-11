/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import useUser from "../../lib/useUser";
import Transition from "../Transitions/Transition";
import resizeImage from "../../utils/resizeImage";
import tw, { css } from "twin.macro";

const ProfileDropdown = ({
  dropdownActive,
  setDropdownActive,
  userData,
  handleLogout,
}) => {
  const { user } = useUser({ initialData: userData });
  const useData = user && user.is_logged_in;
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (dropdownActive.profile) {
          setDropdownActive({ profile: false, notifications: false });
        }
      }}
    >
      <div tw="relative">
        <div>
          <button
            type="button"
            disabled={!useData}
            onClick={() =>
              setDropdownActive((prevState) => {
                const newState = {
                  profile: !prevState.profile,
                  notifications: false,
                };
                return newState;
              })
            }
            tw="w-auto flex items-center text-sm rounded-full focus:outline-none"
            id="user-menu"
            aria-label="User menu"
            aria-haspopup="true"
          >
            {useData ? (
              <>
                <img
                  key={
                    user?.profile?.image_avatar
                      ? user?.profile?.image_avatar
                      : "/img/avatar_placeholder.png"
                  }
                  tw="h-10 w-10 rounded-full border-2 border-button"
                  src={
                    user?.profile?.image_avatar
                      ? user?.profile?.image_avatar
                      : "/img/avatar_placeholder.png"
                  }
                  width="60px"
                  height="60px"
                  alt="Profile avatar"
                />
              </>
            ) : (
              <span tw="text-button">Loading</span>
            )}
          </button>
        </div>
        {/* Profile dropdown card */}
        <Transition show={dropdownActive.profile}>
          <div tw="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-lg border border-accent">
            {/* <div tw="w-48 space-x-1">
              <TopButton />
              <TopButton />
              <TopButton />
            </div> */}
            <div
              tw="py-1 rounded-md bg-primary-900 shadow-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <Link href="/profile" passHref>
                <a
                  tw="block px-4 py-2 text-sm text-primary-400 hover:text-primary-200 hover:font-bold hover:bg-primary-800 ease-in-out duration-150"
                  role="menuitem"
                >
                  Mi perfil
                </a>
              </Link>
              <Link href="/following" passHref>
                <a
                  tw="block px-4 py-2 text-sm text-primary-400 hover:text-primary-200 hover:font-bold hover:bg-primary-800 ease-in-out duration-150"
                  role="menuitem"
                >
                  Mi círculo
                </a>
              </Link>
              <Link href="/settings" passHref>
                <a
                  tw="block px-4 py-2 text-sm text-primary-400 hover:text-primary-200 hover:font-bold hover:bg-primary-800 ease-in-out duration-150"
                  role="menuitem"
                >
                  Configuración
                </a>
              </Link>
              <button
                type="button"
                tw="block w-full text-left px-4 py-2 text-sm text-primary-400 hover:text-primary-200 hover:font-bold hover:bg-primary-800 ease-in-out duration-150"
                role="menuitem"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </OutsideClickHandler>
  );
};

// function TopButton({ title }) {
//   const [TopButtonSelected, setTopButtonSelected] = useState(false)

//   const activeStyle = css`
//     ${tw`bg-accent text-white hover:bg-accent`}
//   `
//   const inactiveStyle = css`
//     ${tw`bg-gray-500`}
//   `

//   const handleClick = () => {
//     console.log(`button clicked for ${title}`)
//     setTopButtonSelected(true)
//   }

//   return (
//     <>
//       <button
//         tw="m-1 bg-gray-500 hover:bg-gray-300 rounded-full px-2 font-bold text-lg leading-loose cursor-pointer | focus:outline-none | text-sm capitalize"
//         type="button"
//         onClick={() => handleClick()}
//         css={TopButtonSelected === 'true' ? activeStyle : inactiveStyle}
//       >
//         {title || 'title'}
//       </button>
//     </>
//   )
// }

ProfileDropdown.propTypes = {
  dropdownActive: PropTypes.object,
  setDropdownActive: PropTypes.func,
  user: PropTypes.object,
  handleLogout: PropTypes.func,
};

export default ProfileDropdown;
