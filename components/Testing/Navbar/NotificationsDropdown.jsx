import OutsideClickHandler from "react-outside-click-handler";
import { FaBell } from "react-icons/fa";
import "twin.macro";

const NotificationsDropdown = ({ dropdown, setDropdown }) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (dropdown.notifications) {
          setDropdown({ profile: false, notifications: false });
        }
      }}
    >
      <div tw="relative">
        <div>
          <button
            onClick={() =>
              setDropdown((prevState) => {
                let newState = {
                  notifications: !prevState.notifications,
                  profile: false,
                };
                return newState;
              })
            }
            tw="max-w-xs w-auto flex py-1 pl-1 pr-2 items-center text-sm rounded-full focus:outline-none"
            id="user-menu"
            aria-label="User menu"
            aria-haspopup="true"
          >
            <FaBell size={24} tw="hidden md:block" />
          </button>
        </div>

        {dropdown.notifications && (
          <div tw="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-sm">
            <div
              tw="py-1 rounded-md bg-background-primary shadow-lg"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <div
                tw="py-1 rounded-md bg-background-primary"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu"
              >
                <a
                  href="/profile"
                  tw="block px-4 py-2 text-sm text-text-dark hover:bg-background-secondary transition ease-in-out duration-150"
                  role="menuitem"
                >
                  Notification #1
                </a>
                <a
                  href="#"
                  tw="block px-4 py-2 text-sm text-text-dark hover:bg-background-secondary transition ease-in-out duration-150"
                  role="menuitem"
                >
                  Notification #2
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default NotificationsDropdown;
