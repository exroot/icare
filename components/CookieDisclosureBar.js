import { RiAlertFill, RiCloseLine } from "react-icons/ri";

import "twin.macro";

export function CookieDisclosureBar(props) {
  return (
    <>
      <div tw="absolute bottom-0 h-auto w-full bg-transparent">
        <div tw="flex text-gray-900 px-6 py-2 border border-black rounded relative mb-4 bg-white mx-auto w-3/4 h-auto">
          <span tw="text-xl inline-block align-middle">
            <svg
              tw="fill-current h-6 w-6 text-gray-900 mr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg>
          </span>

          <span tw="text-sm sm:h-16 md:h-8 lg:h-8 xl:h-6 inline-block align-middle mr-8 text-gray-900">
            This site uses cookies to provide you with a great experience. By
            using this site, you accept our use of cookies.
          </span>

          <span tw="text-xl align-middle right-0 absolute pr-2">
            <svg
              tw="fill-current h-6 w-6 text-black"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </div>
    </>
  );
}

// export function CookiesPopup(props) {
//   return (
//     <div tw="bg-background-primary shadow-md rounded mt-4 border border-gray-600 text-gray-600 mx-8">
//       <div tw="sm:flex sm:items-center px-6 py-4">
//         <RiAlertFill tw="mr-1" size={18} />
//         <div tw="text-center sm:text-left sm:flex-grow ml-4">
//           <p tw="leading-tight text-sm">
//             This site uses cookies to provide you with a great experience. By
//             using this site, you accept our use of cookies.
//           </p>
//         </div>
//         <RiCloseLine tw="text-gray-600 float-right" size={18} />
//       </div>
//     </div>
//   );
// }

// export function CookiesPopupAlt() {
//   return (
//     <>
//       <div
//         tw=" flex bg-indigo-100 border border-pink-900 text-indigo-700 px-4 py-3 mb-8 rounded z-40 absolute bottom-0 left-0 w-full"
//         role="alert"
//       >
//         <div tw="py-1">
//           <svg
//             tw="fill-current h-6 w-6 text-indigo-500 mr-4"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//           >
//             <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
//           </svg>
//         </div>

//         <span tw="inline-block align-middle">
//           This site uses cookies to provide you with a great experience. By
//           using this site, you accept our use of cookies.
//         </span>
//         <span tw="absolute top-0 bottom-0 right-0 px-4 py-3">
//           <svg
//             tw="fill-current h-6 w-6 text-indigo-500"
//             role="button"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//           >
//             <title>Close</title>
//             <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
//           </svg>
//         </span>
//       </div>
//     </>
//   );
// }

// export function CookiesPopupAltTwo() {
//   return (
//     <>
//       <div tw="text-gray-900 px-6 py-4 border-0 rounded relative mb-4 bg-white">
//         <span tw="text-xl inline-block mr-5 align-middle">
//           <svg
//             tw="fill-current h-6 w-6 text-gray-900 mr-4"
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//           >
//             <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
//           </svg>
//         </span>
//         <span tw="inline-block align-middle mr-8">
//           This site uses cookies to provide you with a great experience. By
//           using this site, you accept our use of cookies.
//         </span>
//         <button tw="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
//           <span>×</span>
//         </button>
//       </div>
//     </>
//   );
// }
