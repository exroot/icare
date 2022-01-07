import Image from "next/image";
import Transition from "../Transitions/Transition";
import PropTypes from "prop-types";
import { RiArrowDropDownLine } from "react-icons/ri";
import useUser from "../../lib/useUser";
import OutsideClickHandler from "react-outside-click-handler";
import Link from "next/link";
import "twin.macro";
import resizeImage from "../../utils/resizeImage";

const ProfileDropdown = ({
  dropdownActive,
  setDropdownActive,
  userData,
  handleLogout,
}) => {
  const { user } = useUser({ initialData: userData });
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
            onClick={() =>
              setDropdownActive((prevState) => {
                let newState = {
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
            {user && user.is_logged_in ? (
              <>
                <img
                  key={user.avatar_image || "/img/avatar_placeholder.png"}
                  tw="h-10 w-10 rounded-full border-2 border-button"
                  src={
                    user.avatar_image
                      ? resizeImage(user.avatar_image, [35, 35])
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
          <div tw="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-sm">
            <div
              tw="py-1 rounded-md bg-background-primary shadow-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <Link href="/profile">
                <a
                  href="/profile"
                  tw="block px-4 py-2 text-sm text-text-dark hover:bg-background-secondary transition ease-in-out duration-150"
                  role="menuitem"
                >
                  Mi perfil
                </a>
              </Link>
              <a
                href="#"
                tw="block px-4 py-2 text-sm text-text-dark hover:bg-background-secondary transition ease-in-out duration-150"
                role="menuitem"
              >
                Settings
              </a>
              <button
                tw="block w-full text-left px-4 py-2 text-sm text-text-dark hover:bg-background-secondary transition ease-in-out duration-150"
                role="menuitem"
                onClick={handleLogout}
              >
                Log out
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </OutsideClickHandler>
  );
};

ProfileDropdown.propTypes = {
  dropdownActive: PropTypes.object,
  setDropdownActive: PropTypes.func,
  user: PropTypes.object,
  handleLogout: PropTypes.func,
};

export default ProfileDropdown;
