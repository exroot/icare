import React, { useState, useEffect, useRef } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import tw, { css } from "twin.macro";

// import SiteLogo from "../testing/components/sitelogo";
// import SearchBar from "../testing/components/searchbar";

import {
  FaRegEnvelope,
  FaAngleDown,
  FaAngleRight,
  FaRegCircle,
  FaTwitter,
  FaChessKnight,
  FaBell,
  FaInbox,
  FaCogs,
  FaUsers,
  FaUser,
  FaQuestion,
  FaCube,
  FaSearch,
  FaArrowLeft,
} from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { CgFeed } from "react-icons/cg";

export default function Basic() {
  return (
    <>
      {/* <NotLoggedInNavbar /> */}
      <Layout />
    </>
  );
}

function Layout() {
  const [page, setPage] = useState("Settings");
  const [show, setShow] = useState(false);
  let Page = null;
  if (page === "Settings") {
    Page = <ContentArea />;
  } else if (page === "Page One") {
    Page = <PageOne />;
  } else if (page === "Page Two") {
    Page = <PageTwo />;
  } else if (page === "Page Three") {
    Page = <PageThree />;
  } else {
    Page = <PageFour />;
  }
  return (
    <>
      <section tw="h-screen w-screen bg-gray-900 flex flex-col min-h-0 min-w-0 overflow-hidden">
        <main tw="flex-1 flex flex-col min-h-0 min-w-0 overflow-y-auto">
          {/* {page === "Settings" ? (
            <div tw="hidden md:block">
              <Topnavbar />
            </div>
          ) : (
            <Topnavbar />
          )} */}
          <Topnavbar setShow={setShow} />
          {Page}

          {/* <PageContentAreaReversed /> */}
          {/* <PageContentAreaAlt /> */}
          {/* <PageContentAreaDiff /> */}
        </main>
        <BottomMenu page={page} setPage={setPage} />
      </section>
    </>
  );
}

const PageOne = () => {
  return (
    <>
      <div>
        <h1 tw="text-4xl text-center text-white">Page One</h1>
      </div>
    </>
  );
};

const PageTwo = () => {
  return (
    <>
      <div>
        <h1 tw="text-4xl text-center text-white">Page Two</h1>
      </div>
    </>
  );
};

const PageThree = () => {
  return (
    <>
      <div>
        {/* <h1 tw="text-4xl text-center text-white">Page Three</h1> */}
        <FeedPageLayoutTesting />
      </div>
    </>
  );
};

const PageFour = () => {
  return (
    <>
      <div>
        <h1 tw="text-4xl text-center text-white">Page Four</h1>
        <SuggestInstallAppModal />
        <div tw="text-white m-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non
            odio euismod lacinia at quis risus sed vulputate. Ut consequat
            semper viverra nam libero. Nunc eget lorem dolor sed viverra ipsum.
            Commodo sed egestas egestas fringilla phasellus faucibus scelerisque
            eleifend. Tincidunt dui ut ornare lectus sit amet est placerat in.
            Ac ut consequat semper viverra nam libero. Mauris ultrices eros in
            cursus turpis massa. Ac turpis egestas maecenas pharetra. Posuere
            lorem ipsum dolor sit amet consectetur. Urna neque viverra justo
            nec. Lacus viverra vitae congue eu consequat ac felis donec.
            Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt
            tortor. Faucibus pulvinar elementum integer enim neque volutpat ac
            tincidunt. Risus feugiat in ante metus dictum at tempor commodo
            ullamcorper.
          </p>
          <p>
            Malesuada fames ac turpis egestas sed tempus. Purus in massa tempor
            nec feugiat nisl pretium fusce. Vehicula ipsum a arcu cursus vitae.
            Nunc id cursus metus aliquam eleifend mi in nulla. Nec tincidunt
            praesent semper feugiat nibh sed pulvinar proin. In metus vulputate
            eu scelerisque felis imperdiet. Condimentum lacinia quis vel eros
            donec ac odio tempor. Morbi quis commodo odio aenean sed adipiscing
            diam. Egestas egestas fringilla phasellus faucibus. Ut tortor
            pretium viverra suspendisse potenti nullam ac tortor. Mauris vitae
            ultricies leo integer malesuada nunc vel risus. Sit amet facilisis
            magna etiam tempor orci. Sociis natoque penatibus et magnis dis
            parturient. Velit dignissim sodales ut eu sem integer. Purus in
            massa tempor nec. Nibh cras pulvinar mattis nunc sed. Ipsum a arcu
            cursus vitae congue. Tellus orci ac auctor augue mauris augue. Orci
            nulla pellentesque dignissim enim. Bibendum enim facilisis gravida
            neque convallis a cras semper auctor. Venenatis cras sed felis eget
            velit aliquet sagittis. Leo urna molestie at elementum eu facilisis
            sed odio. A diam maecenas sed enim ut sem viverra aliquet.{" "}
          </p>
          <p>
            Quis commodo odio aenean sed adipiscing diam. Tristique senectus et
            netus et. At risus viverra adipiscing at in tellus. A erat nam at
            lectus urna. Donec et odio pellentesque diam volutpat commodo sed
            egestas. Scelerisque fermentum dui faucibus in ornare quam viverra
            orci. Lectus proin nibh nisl condimentum id venenatis. Habitant
            morbi tristique senectus et netus. Purus ut faucibus pulvinar
            elementum integer enim neque volutpat ac. Duis at consectetur lorem
            donec massa sapien faucibus et. Proin fermentum leo vel orci porta
            non. Tempus egestas sed sed risus pretium quam. Viverra vitae congue
            eu consequat ac. Urna porttitor rhoncus dolor purus non enim
            praesent elementum facilisis. Nunc eget lorem dolor sed viverra
            ipsum nunc. Hendrerit gravida rutrum quisque non tellus. Enim tortor
            at auctor urna nunc.{" "}
          </p>
          <p>
            Vestibulum mattis ullamcorper velit sed ullamcorper. Nunc mattis
            enim ut tellus elementum sagittis vitae. Malesuada proin libero nunc
            consequat interdum varius sit amet mattis. Blandit aliquam etiam
            erat velit scelerisque in dictum non consectetur. Congue quisque
            egestas diam in arcu cursus euismod quis viverra. Sed viverra tellus
            in hac habitasse platea dictumst vestibulum rhoncus. Diam sit amet
            nisl suscipit adipiscing bibendum est ultricies. Tincidunt eget
            nullam non nisi est sit amet facilisis magna. Porttitor massa id
            neque aliquam vestibulum morbi blandit.
          </p>
        </div>
      </div>
    </>
  );
};

function ContentArea() {
  return (
    <>
      {/* <PageContentArea /> */}
      <CenteredMenu />
    </>
  );
}

function Topnavbar() {
  const [dropdown, setDropdown] = useState({
    notifications: false,
    profile: false,
  });
  return (
    <>
      <nav tw="sticky top-0 bg-white px-6 py-2 flex items-center min-w-0 h-14 bg-gray-900 text-gray-400 space-x-2 border-b border-gray-800">
        <SiteLogo />
        <span tw="flex-1"></span>
        <span tw="mr-2 mr-24 hidden md:block md:w-1/2">
          {/* <SearchBar /> */}
          <input
            type="text"
            placeholder="Search people, shows, and more"
            tw="w-full border-2 px-2 py-1 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-gray-300 focus:bg-gray-100"
          />
        </span>
        <span tw="flex-1"></span>

        <ProfileDropdown dropdown={dropdown} setDropdown={setDropdown} />
        <NotificationsDropdown dropdown={dropdown} setDropdown={setDropdown} />
        <SettingsButtonModal />
      </nav>
    </>
  );
}

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
                  Your Profile
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

function SettingsButtonModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        tw="active:bg-pink-600 font-bold uppercase text-sm outline-none focus:outline-none"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <FiSettings size={24} />
      </button>

      {showModal ? (
        <>
          <div
            tw="justify-center items-center flex overflow-y-scroll fixed inset-0 z-50 outline-none focus:outline-none sm:mx-auto"
            onClick={() => setShowModal(false)}
          >
            <div tw="w-full h-auto">
              <div tw="bg-white w-full h-screen md:h-full sm:mx-auto md:max-w-md md:rounded-xl">
                <ul tw="divide-y divide-gray-200 text-gray-900 text-center justify-center items-center">
                  <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                    <p tw="" onClick={() => setShowModal(false)}>
                      option
                    </p>
                  </li>
                  <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                    <p tw="" onClick={() => setShowModal(false)}>
                      option
                    </p>
                  </li>
                  <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                    <p tw="" onClick={() => setShowModal(false)}>
                      option
                    </p>
                  </li>
                  <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                    <p tw="" onClick={() => setShowModal(false)}>
                      option
                    </p>
                  </li>
                  <li tw="px-4 py-3 sm:px-6 hover:bg-gray-100 hover:text-gray-900">
                    <p tw="" onClick={() => setShowModal(false)}>
                      option1
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div tw="opacity-75 fixed inset-0 z-40 bg-gray-900"></div>
        </>
      ) : null}
    </>
  );
}

function PageContentAreaReversed() {
  return (
    <>
      <section tw="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
        <div tw="flex lg:flex-row h-full w-full">
          {/* <!-- overflow content right --> */}
          <div tw="h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
            <div tw="w-full h-full min-h-0 min-w-0 overflow-auto space-y-4">
              {/* <RightCard /> */}
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
            </div>
          </div>
          {/* <!-- control content left --> */}
          <div tw="pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap space-y-4 hidden sm:block">
            <div tw="bg-gray-100 w-full h-24 min-h-0 min-w-0 border border-gray-400"></div>
            <div tw="bg-gray-100 w-full h-24 min-h-0 min-w-0 border border-gray-400"></div>
          </div>
        </div>
      </section>
    </>
  );
}

function PageContentArea() {
  return (
    <>
      <section tw="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
        <div tw="flex lg:flex-row h-full w-full">
          {/* <!-- control content left --> */}
          <div tw="pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap space-y-4 hidden sm:block">
            <div tw="bg-gray-100 w-full h-24 min-h-0 min-w-0 border border-gray-400"></div>
            <div tw="bg-gray-100 w-full h-24 min-h-0 min-w-0 border border-gray-400"></div>
          </div>

          <div tw="h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
            {/* <!-- overflow content right --> */}
            <div tw="w-full h-full min-h-0 min-w-0 overflow-auto space-y-4">
              {/* <RightCard /> */}
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
              <div tw="bg-gray-100 w-full h-64 border border-gray-400"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PageContentAreaDiff() {
  return (
    <>
      <div tw="bg-white overflow-hidden shadow sm:rounded-lg w-full max-w-3xl h-72 mt-12 mx-auto">
        <div tw="flex flex-col md:flex-row justify-center">
          <div>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
          </div>
          <div tw="h-auto w-36 bg-gray-500">
            <MenuItem />
          </div>
        </div>
      </div>
    </>
  );
}

function MenuItem() {
  return (
    <>
      <li tw="flex items-center space-x-1 hover:bg-gray-600 rounded-full p-1 mx-3">
        <div tw="flex justify-center items-center">
          {/* <FaChessKnight size={16} tw="w-4 h-4 text-gray-700" /> */}
        </div>
        <p tw="text-gray-700 font-bold">menu item</p>
      </li>
    </>
  );
}

function PageContentAreaAlt() {
  return (
    <>
      <section tw="flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
        <div tw="flex lg:flex-row h-full w-full">
          {/* <!-- control content left --> */}
          <div tw="pb-2 lg:pb-0 w-full lg:max-w-sm px-3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap space-y-4 hidden sm:block bg-gray-700"></div>

          <div tw="h-full w-full lg:flex-1 px-3 min-h-0 min-w-0">
            {/* <!-- overflow content right --> */}
            <div tw="w-full h-full min-h-0 min-w-0 overflow-auto space-y-4 bg-gray-700">
              {/* <RightCard /> */}

              <div tw="overflow-hidden sm:rounded-md">
                <ul tw="divide-y divide-gray-800">
                  <RightCard />
                  <RightCard />
                  <RightCard />
                  <RightCard />
                  <RightCard />
                </ul>
              </div>

              {/* asdf */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function BottomMenu({ page, setPage }) {
  const selectedStyle = css`
    ${tw`sm:border-b border-gray-900 flex-1 sm:w-full h-full w-full text-purple-500 block p-3 bg-opacity-75`}
  `;
  const defaultStyle = css`
    ${tw`sm:border-b border-gray-900 flex-1 sm:w-full h-full w-full hover:text-purple-500 block p-3`}
  `;
  return (
    <>
      {/* <!-- mobile and tablet menu --> */}
      <aside tw="lg:hidden xl:hidden w-full h-12 bg-gray-900 text-gray-400 border-t border-gray-800">
        <ul tw="flex flex-row w-full">
          <li
            css={page === "Settings" ? selectedStyle : defaultStyle}
            onClick={() => setPage("Settings")}
          >
            <FiSettings size={24} tw="mx-auto" />
          </li>
          <li
            css={page === "Page One" ? selectedStyle : defaultStyle}
            onClick={() => setPage("Page One")}
          >
            <FaRegEnvelope size={24} tw="mx-auto" />
          </li>
          <li
            css={page === "Page Two" ? selectedStyle : defaultStyle}
            onClick={() => setPage("Page Two")}
          >
            <FaSearch size={24} tw="mx-auto" />
          </li>
          <li
            css={page === "Page Three" ? selectedStyle : defaultStyle}
            onClick={() => setPage("Page Three")}
          >
            <CgFeed size={24} tw="mx-auto" />
          </li>
          <li
            css={page === "Page Four" ? selectedStyle : defaultStyle}
            onClick={() => setPage("Page Four")}
          >
            <FaUsers size={24} tw="mx-auto" />
          </li>
        </ul>
      </aside>
    </>
  );
}

function MenuCard() {
  return (
    <>
      <li tw="flex items-center space-x-4 hover:bg-gray-600 hover:text-gray-100 text-gray-700 rounded-full p-3 mx-auto">
        <div tw="flex justify-center items-center">
          <FaChessKnight size={36} tw="w-6 h-6" />
        </div>
        <p tw="font-bold">menu item</p>
      </li>
    </>
  );
}

function ShoutoutMenuCard() {
  return (
    <>
      <li tw="flex items-center space-x-4 hover:bg-gray-600 hover:text-gray-100 text-gray-700 rounded-full p-3 mx-auto border">
        <div tw="flex justify-center items-center">
          <FaChessKnight size={36} tw="w-6 h-6" />
        </div>
        <p tw="font-bold">Shoutout</p>
      </li>
    </>
  );
}

function SiteLogo() {
  return (
    <>
      <div tw="flex items-center flex-shrink-0 text-white mr-6">
        <div tw="flex items-center h-16 pb-2 w-full">
          <h1
            tw="w-full font-bold text-5xl text-center"
            // className="threedeeshadow"
            style={{
              fontFamily: "basiclazer",
              color: "#ff27e1",
            }}
          >
            Shoutmo
          </h1>
        </div>
      </div>
    </>
  );
}

function RightCard() {
  return (
    <>
      <li tw="px-4 py-4 sm:px-6">
        <div tw="flex justify-between items-center">
          <a href="#" tw="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
              alt="avatar"
              tw="mr-4 w-10 h-10 object-cover rounded-full"
            />
            <h1 tw="font-bold hover:underline">Joe Schmoe</h1>
            {/* <h1 tw="text-gray-700 hover:underline">@JoeS</h1> */}
          </a>
        </div>
        <div tw="mt-2">
          <p tw="mt-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>
      </li>
    </>
  );
}

function CenteredMenu() {
  const [tab, setTab] = useState("Profile");
  return (
    <>
      {/* // desktop menu  */}
      <section tw="hidden md:block flex-1 pt-3 md:py-6 md:px-2 md:mx-2 lg:mb-0 lg:min-h-0 lg:min-w-0">
        <div tw="flex lg:flex-row h-full w-full">
          {/* // columns */}
          <div tw="w-3/4 xl:w-1/2 h-full grid grid-cols-4 gap-4 bg-white mx-auto rounded xl:rounded-xl">
            <div tw="border-r border-gray-700">
              {/* <p>menu</p> */}
              <MockMenu tab={tab} setTab={setTab} />
            </div>
            <div tw="col-span-3 overflow-y-scroll">
              <MockSettings tab={tab} />
            </div>
          </div>
        </div>
      </section>

      {/* // smaller menu  */}
      <section tw="block md:hidden md:mx-auto md:w-3/4 flex-1 pt-3 md:p-6 lg:mb-0 lg:min-h-0 lg:min-w-0">
        <div tw="flex lg:flex-row h-full w-full">
          <div tw="w-full h-full bg-white">
            <div tw="">
              <MobileTopMenu />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function MobileTopMenu() {
  return (
    <>
      <nav tw="absolute w-full top-0 px-6 py-2 flex items-center min-w-0 h-16 bg-gray-900 text-gray-400 space-x-2 border-b border-gray-800 bg-indigo-600 text-white">
        <span tw="flex-1">
          <FaArrowLeft size={24} tw="" />
        </span>
        <p tw="font-bold">MENU</p>
        <span tw="flex-1"></span>
        <span tw="mr-2 mr-24 hidden md:block md:w-1/2"></span>
      </nav>
    </>
  );
}
const AccountSettings = () => {
  return (
    <>
      <div tw="w-full mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div tw="bg-white w-full max-w-md mx-auto">
          <div tw="divide-y divide-gray-200">
            <div tw="py-6 px-4 sm:p-6 lg:pb-8">
              <div>
                <h2 tw="text-lg leading-6 font-medium text-gray-900">
                  Account
                </h2>
                <p tw="mt-1 text-sm text-gray-500">
                  Set your accounts settings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const PasswordSettings = () => {
  return (
    <>
      <div tw="w-full mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div tw="bg-white w-full max-w-md mx-auto">
          <div tw="divide-y divide-gray-200">
            <div tw="py-6 px-4 sm:p-6 lg:pb-8">
              <div>
                <h2 tw="text-lg leading-6 font-medium text-gray-900">
                  Password
                </h2>
                <p tw="mt-1 text-sm text-gray-500">
                  Settings related with password.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NotificationsSettings = () => {
  return (
    <>
      <div tw="w-full mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div tw="bg-white w-full max-w-md mx-auto">
          <div tw="divide-y divide-gray-200">
            <div tw="py-6 px-4 sm:p-6 lg:pb-8">
              <div>
                <h2 tw="text-lg leading-6 font-medium text-gray-900">
                  Notifications
                </h2>
                <p tw="mt-1 text-sm text-gray-500">
                  This information is related with notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BillingSettings = () => {
  return (
    <>
      <div tw="w-full mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div tw="bg-white w-full max-w-md mx-auto">
          <div tw="divide-y divide-gray-200">
            <div tw="py-6 px-4 sm:p-6 lg:pb-8">
              <div>
                <h2 tw="text-lg leading-6 font-medium text-gray-900">
                  Billing
                </h2>
                <p tw="mt-1 text-sm text-gray-500">Information about billing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const IntegrationsSettings = () => {
  return (
    <>
      <div tw="w-full mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div tw="bg-white w-full max-w-md mx-auto">
          <div tw="divide-y divide-gray-200">
            <div tw="py-6 px-4 sm:p-6 lg:pb-8">
              <div>
                <h2 tw="text-lg leading-6 font-medium text-gray-900">
                  Integrations
                </h2>
                <p tw="mt-1 text-sm text-gray-500">Info about integrations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProfileSettings = () => {
  return (
    <>
      <div tw="w-full mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div tw="bg-white w-full max-w-md mx-auto">
          <form
            tw="divide-y divide-gray-200"
            action="#"
            // method="POST"
          >
            <div tw="py-6 px-4 sm:p-6 lg:pb-8">
              <div>
                <h2 tw="text-lg leading-6 font-medium text-gray-900">
                  Profile
                </h2>
                <p tw="mt-1 text-sm text-gray-500">
                  This information will be displayed publicly.
                </p>
              </div>

              <div tw="mt-6 grid grid-cols-12 gap-6">
                <div tw="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="first_name"
                    tw="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    autoComplete="given-name"
                    tw="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div tw="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="last_name"
                    tw="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    autoComplete="family-name"
                    tw="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div tw="col-span-12">
                  <label
                    htmlFor="url"
                    tw="block text-sm font-medium text-gray-700"
                  >
                    URL
                  </label>
                  <input
                    type="text"
                    name="url"
                    id="url"
                    tw="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div tw="col-span-12 sm:col-span-6">
                  <label
                    htmlFor="company"
                    tw="block text-sm font-medium text-gray-700"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    autoComplete="organization"
                    tw="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* <!-- Privacy section --> */}
            <div tw="pt-6 divide-y divide-gray-200">
              <div tw="px-4 sm:px-6">
                <div>
                  <h2 tw="text-lg leading-6 font-medium text-gray-900">
                    Privacy
                  </h2>
                  <p tw="mt-1 text-sm text-gray-500">
                    Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
                  </p>
                </div>
                <ul tw="mt-2 divide-y divide-gray-200">
                  <li tw="py-4 flex items-center justify-between">
                    <div tw="flex flex-col">
                      <p
                        id="privacy-option-label-1"
                        tw="text-sm font-medium text-gray-900"
                      >
                        Available to hire
                      </p>
                      <p
                        id="privacy-option-description-1"
                        tw="text-sm text-gray-500"
                      >
                        Nulla amet tempus sit accumsan. Aliquet turpis sed sit
                        lacinia.
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-pressed="true"
                      aria-labelledby="privacy-option-label-1"
                      aria-describedby="privacy-option-description-1"
                      tw="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <span tw="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        tw="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      ></span>
                    </button>
                  </li>
                  <li tw="py-4 flex items-center justify-between">
                    <div tw="flex flex-col">
                      <p
                        id="privacy-option-label-2"
                        tw="text-sm font-medium text-gray-900"
                      >
                        Make account private
                      </p>
                      <p
                        id="privacy-option-description-2"
                        tw="text-sm text-gray-500"
                      >
                        Pharetra morbi dui mi mattis tellus sollicitudin cursus
                        pharetra.
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-pressed="false"
                      aria-labelledby="privacy-option-label-2"
                      aria-describedby="privacy-option-description-2"
                      tw="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <span tw="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        tw="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      ></span>
                    </button>
                  </li>
                  <li tw="py-4 flex items-center justify-between">
                    <div tw="flex flex-col">
                      <p
                        id="privacy-option-label-3"
                        tw="text-sm font-medium text-gray-900"
                      >
                        Allow commenting
                      </p>
                      <p
                        id="privacy-option-description-3"
                        tw="text-sm text-gray-500"
                      >
                        Integer amet, nunc hendrerit adipiscing nam. Elementum
                        ame
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-pressed="true"
                      aria-labelledby="privacy-option-label-3"
                      aria-describedby="privacy-option-description-3"
                      tw="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <span tw="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        tw="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      ></span>
                    </button>
                  </li>
                  <li tw="py-4 flex items-center justify-between">
                    <div tw="flex flex-col">
                      <p
                        id="privacy-option-label-4"
                        tw="text-sm font-medium text-gray-900"
                      >
                        Allow mentions
                      </p>
                      <p
                        id="privacy-option-description-4"
                        tw="text-sm text-gray-500"
                      >
                        Adipiscing est venenatis enim molestie commodo eu gravid
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-pressed="true"
                      aria-labelledby="privacy-option-label-4"
                      aria-describedby="privacy-option-description-4"
                      tw="ml-4 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      <span tw="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        tw="translate-x-0 inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                      ></span>
                    </button>
                  </li>
                </ul>
              </div>
              <div tw="mt-4 py-4 px-4 flex justify-end sm:px-6">
                <button
                  type="button"
                  tw="bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  tw="ml-5 bg-indigo-700 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

function MockSettings({ tab }) {
  if (tab === "Profile") {
    return <ProfileSettings />;
  } else if (tab === "Account") {
    return <AccountSettings />;
  } else if (tab === "Password") {
    return <PasswordSettings />;
  } else if (tab === "Notifications") {
    return <NotificationsSettings />;
  } else if (tab === "Billing") {
    return <BillingSettings />;
  } else if (tab === "Integrations") {
    return <IntegrationsSettings />;
  }
  return null;
}

function MockMenu({ tab, setTab }) {
  const selectedStyle = css`
    ${tw`cursor-pointer bg-indigo-50 border-indigo-500 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700 border-l-4 px-3 py-2 flex items-center text-sm font-medium`}
  `;
  const defaultStyle = css`
    ${tw`cursor-pointer border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900  mt-1 border-l-4 px-3 py-2 flex items-center text-sm font-medium`}
  `;

  const iconStyleSelected = css`
    ${tw`text-indigo-500 hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
  `;
  const iconStyleDefault = css`
    ${tw`text-gray-400 hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
  `;
  return (
    <>
      <aside tw="py-6 lg:col-span-3">
        <nav>
          <a
            onClick={() => setTab("Profile")}
            css={tab === "Profile" ? selectedStyle : defaultStyle}
            aria-current="page"
          >
            <svg
              css={tab === "Profile" ? iconStyleSelected : iconStyleDefault}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span tw="truncate">Profile</span>
          </a>

          <a
            onClick={() => setTab("Account")}
            css={tab === "Account" ? selectedStyle : defaultStyle}
          >
            <svg
              css={tab === "Account" ? iconStyleSelected : iconStyleDefault}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span tw="truncate">Account</span>
          </a>

          <a
            onClick={() => setTab("Password")}
            css={tab === "Password" ? selectedStyle : defaultStyle}
          >
            <svg
              css={tab === "Password" ? iconStyleSelected : iconStyleDefault}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
              />
            </svg>
            <span tw="truncate">Password</span>
          </a>

          <a
            onClick={() => setTab("Notifications")}
            css={tab === "Notifications" ? selectedStyle : defaultStyle}
          >
            <svg
              css={
                tab === "Notifications" ? iconStyleSelected : iconStyleDefault
              }
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span tw="truncate">Notifications</span>
          </a>

          <a
            onClick={() => setTab("Billing")}
            css={tab === "Billing" ? selectedStyle : defaultStyle}
          >
            <svg
              css={tab === "Billing" ? iconStyleSelected : iconStyleDefault}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <span tw="truncate">Billing</span>
          </a>

          <a
            onClick={() => setTab("Integrations")}
            css={tab === "Integrations" ? selectedStyle : defaultStyle}
          >
            <svg
              css={
                tab === "Integrations" ? iconStyleSelected : iconStyleDefault
              }
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
              />
            </svg>
            <span tw="truncate">Integrations</span>
          </a>
        </nav>
      </aside>
    </>
  );
}

function SuggestInstallAppModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        tw="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open modal
      </button>

      {showModal ? (
        <>
          <div
            tw="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none h-screen mx-8 sm:m-6 sm:h-full"
            onClick={() => setShowModal(false)}
          >
            <div tw="relative w-auto my-6 mx-auto max-w-lg space-y-2">
              {/*content*/}
              <div tw="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header s logo */}
                <div tw="flex items-center pt-5 pb-3 rounded-t">
                  {/* <h3 tw="text-3xl font-semibold text-center mx-auto">
                    Modal Title
                  </h3> */}

                  {/* // shoutmo logo  */}

                  <div tw="flex flex-shrink-0 text-white mx-auto">
                    <div tw="flex items-center h-20 w-20 bg-black rounded-full shadow-lg">
                      <p
                        tw="font-bold inline-block align-middle mx-auto mb-4"
                        className="threedeeshadow"
                        style={{
                          fontFamily: "basiclazer",
                          // fontSize: 96 + "px",
                          fontSize: 6 + "rem",
                        }}
                      >
                        S
                      </p>
                    </div>
                  </div>
                  {/* // shoutmo logo  */}
                </div>

                <div tw="relative pt-3 pb-6 px-6 flex-auto">
                  <p tw="mt-4 mb-1 text-gray-600 text-xl leading-relaxed font-semibold text-center mx-auto">
                    Add SHOUTMO to your Home screen?
                  </p>
                  <p tw="mb-4 text-gray-500 text-lg leading-relaxed text-center mx-auto">
                    Get to the app easier by adding it to your home screen.
                  </p>
                </div>
                <div tw="flex content-center border-b border-t border-solid border-gray-300 rounded-t hover:bg-gray-200">
                  <p tw="my-3 text-gray-600 text-lg leading-relaxed text-indigo-600 font-semibold text-center mx-auto">
                    Add to Home screen
                  </p>
                </div>
                <div tw="flex items-center hover:bg-gray-200">
                  <p tw="my-3 text-gray-600 text-lg leading-relaxed font-semibold text-center mx-auto">
                    Cancel
                  </p>
                </div>
                {/* end body*/}
              </div>
            </div>
          </div>
          <div tw="opacity-75 fixed inset-0 z-40 bg-gray-900"></div>
        </>
      ) : null}
    </>
  );
}

function FeedPageLayoutTesting() {
  return (
    <>
      {/* <div tw="w-full h-screen mt-16 mx-auto">
        <MakeShoutoutNew />
        <RightFeedCards />
      </div> */}

      <div tw="h-screen w-full bg-gray-900">
        {/* <!-- content area --> */}

        {/* <!-- inside content area --> */}

        <div tw="flex justify-center mx-auto">
          {/* <!-- inside content area main section --> */}

          {/* <!-- inside content area main section --> */}

          <div tw="max-w-lg bg-gray-900">
            <FeedContentPanelFull />
          </div>

          <div tw="max-w-sm hidden md:block bg-gray-900">
            <FeedSideSectionAlt />
          </div>
          {/* <!-- end inside content area main section --> */}
        </div>
      </div>
    </>
  );
}

function FeedSideSectionAlt() {
  return (
    <>
      <div tw="m-2 space-y-3">
        <Tags />
        <RelatedUserCards />
      </div>
    </>
  );
}

function Tags() {
  return (
    <>
      <div>
        <p tw="font-bold text-xl bg-purple-600 rounded-xl p-2">Tags</p>

        <div tw="py-3">
          <div tw="my-3 flex flex-wrap -m-1">
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #winter
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #stark
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #gameofthrones
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #battle
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #jhonsnow
            </span>
            <span tw="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">
              #kinglandings
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function RelatedUserCards() {
  return (
    <>
      <p tw="font-bold text-xl bg-purple-600 rounded-xl p-2">Related Users</p>

      <div>
        <SidebarUserCard />
        <SidebarUserCard />
        <SidebarUserCard />
        <SidebarUserCard />
        <SidebarUserCard />
        <SidebarUserCard />
      </div>
    </>
  );
}

function SidebarUserCard() {
  return (
    <>
      <div tw="my-2">
        <div tw="w-full flex p-1 bg-white hover:bg-purple-200 rounded-lg border-purple-400 hover:border-purple-200 shadow mx-auto">
          <div tw="flex-shrink-0 flex align-middle">
            <img
              tw="h-12 w-12 rounded-full flex align-middle self-center"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="avatar"
            />
          </div>
          <div tw="flex-grow ml-3 mr-8 self-center">
            <h4 tw="text-gray-900 leading-tight">@JackyJives</h4>
            <p tw="text-gray-600 leading-normal">Jacky Jive</p>
          </div>

          <FaAngleRight
            tw="flex align-middle self-center text-purple-600"
            size={36}
          />
        </div>
      </div>
    </>
  );
}
function FeedContentPanelFull() {
  return (
    <>
      <div tw="w-full overflow-y-scroll h-screen">
        <div tw="flex flex-col justify-between items-start">
          {/* inside content panel - start */}
          <MakeShoutoutNew />
          <RightFeedCards />
          {/* inside content panel - end */}
        </div>
      </div>
    </>
  );
}

function MakeShoutoutNew() {
  return (
    <>
      <div tw="max-w-md border border-gray-700 rounded p-4 mx-auto">
        <div tw="flex justify-between items-center">
          <div tw="min-w-0 flex-1 flex items-center">
            <div tw="flex-shrink-0">
              {/* icon  */}

              <div tw="h-12 w-12 rounded-full bg-blue-500 p-1 shadow" alt="">
                <svg
                  tw="bg-gray-700 rounded-full"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    // strokeWidth="1"
                    d="M17.223 7.03c-1.584-3.686-4.132-6.49-5.421-5.967c-2.189.891 1.304 5.164-9.447 9.533c-.929.379-1.164 1.888-.775 2.792c.388.902 1.658 1.801 2.587 1.424c.161-.066.751-.256.751-.256c.663.891 1.357.363 1.604.928l1.158 2.66c.219.502.715.967 1.075.83l2.05-.779c.468-.178.579-.596.436-.924c-.154-.355-.786-.459-.967-.873c-.18-.412-.769-1.738-.938-2.156c-.23-.568.259-1.031.97-1.104c4.894-.512 5.809 2.512 7.475 1.834c1.287-.525 1.025-4.259-.558-7.942zm-.551 5.976c-.287.115-2.213-1.402-3.443-4.267c-1.231-2.863-1.076-5.48-.79-5.597c.286-.115 2.165 1.717 3.395 4.58c1.231 2.863 1.124 5.167.838 5.284z"
                  />
                </svg>
              </div>
              {/* icon  */}
            </div>

            <div tw="min-w-0 flex-1 px-4 text-gray-700">
              <div>
                {/* <p tw="font-bold">Ted Fox</p> */}
                <p tw="text-xl font-extrabold text-gray-200 sm:text-2xl">
                  SHOUTOUT
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* shoutout input  */}
        <div tw="flex flex-row justify-end space-x-2 space-y-2 items-center mt-2">
          <textarea
            id="shoutoutinput"
            name="shoutoutinput"
            rows="6"
            tw="max-w-lg block w-full bg-gray-300 focus:bg-indigo-100 sm:text-sm border ring-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent hover:outline-none hover:bg-gray-400"
          ></textarea>
        </div>
        {/* shoutout input  */}

        {/* send  */}

        <div tw="flex flex-row justify-end space-x-2 items-center mt-2">
          <button
            type="button"
            tw="w-1/4 px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span tw="mx-auto">Send</span>
          </button>
          {/* <FiSettings size={24} /> */}
        </div>
        {/* send  */}
      </div>
    </>
  );
}

function RightFeedCards() {
  return (
    <>
      <ul tw="space-y-6 mt-12">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </ul>
    </>
  );
}

function FeedCard() {
  return (
    <>
      <div tw="max-w-md border border-gray-700 rounded p-4 mx-auto">
        {/* <div tw="max-w-4xl px-10 py-6 border border-gray-700 rounded-lg mx-auto"> */}
        <div tw="flex justify-between items-center">
          <div tw="min-w-0 flex-1 flex items-center">
            <div tw="flex-shrink-0">
              <img
                tw="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div tw="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4 text-gray-300">
              <div>
                {/* // text-indigo-600 / text-gray-500 */}
                <p tw="text-sm font-medium font-bold hover:underline ">
                  Ted Fox
                </p>
                <p tw="mt-1 flex items-center text-sm">
                  <span tw="hover:underline">@TedIsDaMan</span>
                </p>
              </div>
            </div>
          </div>

          {/* <a
            href="#"
            tw="px-2 py-1 bg-gray-700 text-gray-400 font-bold rounded"
          >
            Laravel
          </a> */}
        </div>
        <div tw="mt-6 sm:mt-3">
          {/* <a href="#" tw="text-2xl text-gray-700 font-bold hover:underline"> */}
          {/* <p tw="text-xl text-gray-700 font-bold"> */}

          {/* <p tw="text-xl text-gray-600 font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p> */}
          <p tw="mt-2 text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in
            modi ratione libero!
          </p>
        </div>
        {/* <div tw="flex justify-between items-center mt-4"> */}
        <div tw="flex justify-end items-center mt-4">
          {/* <a href="#" tw="text-blue-500 hover:underline">
            Read more
          </a> */}
          <div>
            <a href="#" tw="flex items-center">
              {/* <img
                src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                alt="avatar"
                tw="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
              /> */}
              {/* <h1 tw="text-gray-700 font-bold hover:underline">Alex John</h1> */}

              <span tw="font-light text-gray-300 text-sm">2 days ago</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function TopProfileEditCard() {
  return (
    <>
      <div tw="max-w-md border border-gray-700 rounded p-4 mx-auto">
        <div tw="flex justify-between items-center">
          <div tw="min-w-0 flex-1 flex items-center">
            <div tw="flex-shrink-0">
              <img
                tw="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div tw="min-w-0 flex-1 px-4 text-gray-700">
              <div>
                {/* <p tw="font-bold">Ted Fox</p> */}
                <p tw="text-xl font-bold text-gray-900 sm:text-2xl">Ted Fox</p>
                <p tw="flex items-center">
                  <span tw="">@TedizDaMan</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div tw="flex flex-row justify-end space-x-2 items-center mt-2">
          <button
            type="button"
            tw="inline-flex items-center flex-1 px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span tw="mx-auto">Edit Profile</span>
          </button>
          <FiSettings size={24} />
        </div>
        <div tw="flex flex-row space-x-2 items-center mt-2">
          <p>
            <span tw="font-bold">99</span> Fans
          </p>
          <p>
            <span tw="font-bold">99</span> Shouts
          </p>
          <p>
            <span tw="font-bold">99</span> Follows
          </p>
        </div>
      </div>
    </>
  );
}

function TopCard() {
  return (
    <>
      <section aria-labelledby="profile-overview-title">
        <div tw="rounded-lg bg-white overflow-hidden shadow">
          <h2 tw="sr-only" id="profile-overview-title">
            Profile Overview
          </h2>
          <div tw="bg-white p-6">
            <div tw="sm:flex sm:items-center sm:justify-between">
              <div tw="sm:flex sm:space-x-5">
                <div tw="flex-shrink-0">
                  <img
                    tw="mx-auto h-20 w-20 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt=""
                  />
                </div>
                <div tw="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                  <p tw="text-sm font-medium text-gray-600">Welcome back,</p>
                  <p tw="text-xl font-bold text-gray-900 sm:text-2xl">
                    Rebecca Nicholas
                  </p>
                  <p tw="text-sm font-medium text-gray-600">Product Designer</p>
                </div>
              </div>
              <div tw="mt-5 flex justify-center sm:mt-0">
                <a
                  href="#"
                  tw="flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  {" "}
                  View profile{" "}
                </a>
              </div>
            </div>
          </div>
          <div tw="border-t border-gray-200 bg-gray-50 grid grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
            <div tw="px-6 py-5 text-sm font-medium text-center">
              <span tw="text-gray-900">12</span>
              <span tw="text-gray-600">Vacation days left</span>
            </div>

            <div tw="px-6 py-5 text-sm font-medium text-center">
              <span tw="text-gray-900">4</span>
              <span tw="text-gray-600">Sick days left</span>
            </div>

            <div tw="px-6 py-5 text-sm font-medium text-center">
              <span tw="text-gray-900">2</span>
              <span tw="text-gray-600">Personal days left</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
