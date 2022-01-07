import OutsideClickHandler from "react-outside-click-handler";
import "twin.macro";

const ProfileDropdown = ({ dropdown, setDropdown }) => {
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        if (dropdown.profile) {
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
                  profile: !prevState.profile,
                  notifications: false,
                };
                return newState;
              })
            }
            tw="max-w-xs w-auto flex py-1 pl-1 pr-2 items-center text-sm rounded-full focus:outline-none"
            id="user-menu"
            aria-label="User menu"
            aria-haspopup="true"
          >
            <img
              tw="object-cover w-10 h-10 rounded-full ml-auto border focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent hidden md:block"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="avatar"
            />
          </button>
        </div>

        {dropdown.profile && (
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
                  Mi perfil
                </a>
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
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </OutsideClickHandler>
  );
};

export default ProfileDropdown;
