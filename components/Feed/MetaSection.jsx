import { FiShare2 } from "react-icons/fi";
import "twin.macro";

export default function MetaSection() {
  const tag = "tag";
  return (
    <>
      {/* // tags */}
      {/* <div tw="flex mr-2 text-gray-700 inline-block align-middle">
        <a href="#" tw="text-blue-500 hover:underline">
          <p>#{tag}</p>
        </a>
      </div>
      <div tw="flex mr-2 text-gray-700 inline-block align-middle">
        <a href="#" tw="text-blue-500 hover:underline">
          <p>#{tag}</p>
        </a>
      </div>
      <div tw="flex mr-2 text-gray-700 inline-block align-middle">
        <a href="#" tw="text-blue-500 hover:underline">
          <p>#{tag}</p>
        </a>
      </div>
      <div tw="flex mr-2 text-gray-700 inline-block align-middle">
        <a href="#" tw="text-blue-500 hover:underline">
          <p>#{tag}</p>
        </a>
      </div> */}
      {/* // share button */}
      <button tw="flex flex-row justify-center items-center w-full space-x-3 text-gray-500 hover:text-blue-500 ml-2">
        <FiShare2 size={26} tw="inline-block align-middle" />
        {/* // onclick show share modal and embed code */}
        <span tw="font-semibold text-lg">Share</span>
      </button>
    </>
  );
}

{
  /* <button tw="flex flex-row justify-center items-center w-full space-x-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#838383"
          stroke-width="2"
          stroke-linecap="square"
          stroke-linejoin="round"
        >
          <circle cx="18" cy="5" r="3"></circle>
          <circle cx="6" cy="12" r="3"></circle>
          <circle cx="18" cy="19" r="3"></circle>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
        </svg>
        <span tw="font-semibold text-lg text-gray-600">Share</span>
      </button> */
}

function BottomSection() {
  return (
    <>
      <hr />
      <div tw="grid grid-cols-3 w-full px-5 px-5 my-3">
        <button tw="flex flex-row justify-center items-center w-full space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#838383"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          >
            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
          </svg>
          <span tw="font-semibold text-lg text-gray-600">Bump</span>
        </button>

        <button tw="flex flex-row justify-center items-center w-full space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#838383"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span tw="font-semibold text-lg text-gray-600">Comment</span>
        </button>

        <button tw="flex flex-row justify-center items-center w-full space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="27"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#838383"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          >
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          <span tw="font-semibold text-lg text-gray-600">Share</span>
        </button>
      </div>
      <hr />
    </>
  );
}

function BottomNavTesting() {
  return (
    <>
      <nav
        class="fixed bottom-0 w-full border border-t-8 border-purple-700
	 bg-white flex overflow-x-auto"
      >
        <a
          href="#"
          class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-100 focus:text-purple-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
            <path
              d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0
				2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
            ></path>
          </svg>

          <span class=" text-sm capitalize">Share</span>
        </a>

        <a
          href="#"
          class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-100 text-purple-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0
				0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07
				5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65
				5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0
				5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>

          <span class="text-sm capitalize">github</span>
        </a>

        <a
          href="#"
          class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-100 focus:text-purple-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bookmark"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>

          <span class="hidden text-sm capitalize">bookmark</span>
        </a>

        <a
          href="#"
          class="flex flex-col flex-grow items-center justify-center
		overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100
		ease-in-out hover:bg-gray-100 focus:text-purple-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bell"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>

          <span class="hidden text-sm capitalize">Bell</span>
        </a>
      </nav>
    </>
  );
}
