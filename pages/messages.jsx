import {
  FaDollarSign,
  FaEllipsisH,
  FaInfoCircle,
  FaPaperPlane,
} from "react-icons/fa";
import "twin.macro";

function FakeNavbar() {
  return (
    <>
      <nav tw="flex items-center justify-between flex-wrap bg-gray-900 p-6">
        <div tw="flex items-center flex-shrink-0 text-white mr-6">
          <span tw="font-semibold text-xl tracking-tight">SHOUTMO</span>
        </div>

        <div tw="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div tw="text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              tw="block mt-4 lg:inline-block lg:mt-0 text-green-200 hover:text-white"
            >
              link
            </a>
          </div>
          <div>
            <a
              href="#"
              tw="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-500 hover:bg-white mt-4 lg:mt-0"
            >
              button
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

function MessagesLayout() {
  return (
    <>
      <div tw="flex">
        <div tw="flex flex-col w-1/4 overflow-auto h-screen bg-white border-r-2 border-gray-300">
          <SidebarUserPaid />
          <SidebarUser />
          <SidebarUser />
          <SidebarUser />
          <SidebarUser />
          <SidebarUser />
          <SidebarUser />
          <SidebarUser />
          <SidebarUser />
          <SidebarUser />
          <SidebarUser />
          <SidebarUser />
        </div>
        <div tw="flex flex-col w-3/4 overflow-auto h-screen bg-gray-100 text-gray-200 p-0 m-0">
          <div tw="overflow-auto bg-gray-500 text-gray-200 m-0 p-0 mb-16">
            <UserMessage />
            <UserMessage />
            <OtherUserMessage />
            <UserMessage />
            <OtherUserMessage />
            <UserMessage />
            <UserMessage />
            <OtherUserMessage />
            <UserMessage />
          </div>
          <UserSettingsBar />

          <div tw="mb-16">
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <OtherUserMessage />
            <UserMessage />
            <UserMessage />
            <UserMessage />
            <OtherUserMessage />
            <UserMessage />
          </div>
          <MessageBar />
        </div>
      </div>
    </>
  );
}

function MessageBar() {
  return (
    <>
      <div tw="fixed flex bg-gray-700 bottom-0 w-3/4">
        <textarea
          tw="flex-grow m-2 py-2 px-4 mr-1 rounded-full border border-gray-300 bg-gray-200 resize-none text-gray-600 outline-none"
          rows="1"
          placeholder="Message..."
        ></textarea>
        <button tw="m-2 outline-none">
          <FaPaperPlane size={21} tw="text-white m-2" />
        </button>
      </div>
    </>
  );
}

function SidebarUser() {
  return (
    <>
      <div tw="flex flex-row border-b border-gray-300 hover:bg-indigo-100 ">
        {/* hover:border-r-4 hover:border-indigo-500 */}
        <div tw="flex-shrink-0 self-center pr-2 p-4">
          <img
            tw="h-16 w-16 shadow-lg rounded"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="ChitChat Logo"
          />
        </div>
        <div tw="flex flex-col w-full self-center">
          <p tw="">@username</p>
          <p tw="text-sm text-gray-600">
            This is a message about something I would message someone.
          </p>
        </div>
      </div>
    </>
  );
}

function PaidIcon() {
  return (
    <>
      <div tw="flex items-stretch bg-green-400 w-6 h-6 rounded-full text-white shadow content-center">
        <FaDollarSign size={14} tw="self-center flex-1" />
      </div>
    </>
  );
}

function SidebarUserPaid() {
  return (
    <>
      <div tw="flex flex-row border-b border-gray-300 bg-green-200 hover:bg-green-100 hover:border-r-4 hover:border-green-500">
        <div tw="flex-shrink-0 self-center pr-2 p-4">
          <img
            tw="h-16 w-16 shadow-lg rounded"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="ChitChat Logo"
          />
        </div>

        <div tw="flex flex-col w-full self-center">
          <div tw="flex flex-row justify-between">
            <p tw="self-center">@username</p>
            <div tw="flex flex-row mr-1">
              <PaidIcon />
            </div>
          </div>
          <p tw="text-sm text-gray-600">
            This is a message about something I would message someone.
          </p>
        </div>
      </div>
    </>
  );
}

function UserMessage() {
  return (
    <>
      <div tw="flex flex-row-reverse w-full clear-both">
        <div tw="w-3/4 p-2 bg-indigo-400 rounded-lg shadow-xl mr-4 ">
          <p tw="text-white p-1 text-left">
            This is a message about something I would message someone.
          </p>
        </div>
      </div>
      <p tw="text-gray-600 text-right clear-both text-sm mr-4 mt-2 mb-4">
        11:01 am | July 4
      </p>
    </>
  );
}

function UserSettingsBar() {
  return (
    <>
      <div tw="fixed flex bg-gray-800 top-auto w-3/4 border-b justify-between">
        {/* <div tw="flex flex-row m-2 py-2 px-4 mr-1 resize-none text-gray-600 outline-none"> */}
        <div tw="flex flex-row px-4 text-gray-600 items-center">
          <img
            tw="h-12 w-12 rounded"
            src="https://randomuser.me/api/portraits/women/21.jpg"
            alt="ChitChat Logo"
          />
          <p tw="ml-2 font-semibold">Username</p>
        </div>
        <div tw="flex flex-row m-2 py-2 px-4 mr-1 resize-none text-gray-600 outline-none">
          <button tw="border-pink-600 hover:bg-pink-500 text-pink-600 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded">
            delete
          </button>

          {/* <button tw="border-pink-600 hover:bg-pink-500 text-pink-600 font-semibold hover:text-white py-2 px-3 ml-2 border hover:border-transparent rounded-full ">
            <FaEllipsisH />
          </button> */}
        </div>
      </div>
    </>
  );
}
function OtherUserMessage() {
  return (
    <>
      <div tw="float-left clear-both w-3/4 p-2 mb-2">
        <div tw="flex flex-row p-2 ">
          <div tw="flex-shrink-0">
            <img
              tw="h-12 w-12 shadow-lg rounded"
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="ChitChat Logo"
            />
          </div>
          <div tw="flex w-3/4 p-2 ml-4 bg-indigo-100 rounded-lg shadow-xl float-left clear-both">
            <p tw="text-gray-600 p-1 text-left">
              XOXO celiac fanny pack kitsch hot chicken, cold-pressed readymade
              pabst organic edison bulb jean shorts. Thundercats messenger bag
              90's slow-carb yr, subway tile retro seitan wayfarers cliche
              bespoke. Tote bag before they sold out bitters, copper mug hell of
              mixtape fixie gastropub plaid vape man braid direct trade paleo
              air plant bushwick. Umami affogato semiotics succulents polaroid
              fashion axe. Hot chicken leggings taiyaki chia gastropub vaporware
              irony.
            </p>
          </div>
        </div>

        <div>
          <p tw="text-gray-600 float-left clear-both text-sm mt-0 mb-4 ml-16 pl-2">
            11:01 am | July 4
          </p>
        </div>
      </div>
    </>
  );
}

export default function MessagesPage() {
  return (
    <>
      <FakeNavbar />
      <MessagesLayout />
    </>
  );
}
