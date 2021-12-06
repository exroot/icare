import tw, { css } from "twin.macro";
import { RiArrowRightUpLine } from "react-icons/ri";

export default function FourOhFour() {
  return (
    <>
      <div tw="h-screen w-screen bg-gray-100 flex items-center">
        <div tw="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div tw="max-w-md">
            <SHOUTMO />
            <div tw="text-5xl font-bold">404</div>
            <p tw="text-2xl md:text-3xl font-light leading-normal">
              Sorry we couldn't find this page.
            </p>
            <p tw="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage. <RiArrowRightUpLine tw="inline-block" />
            </p>
          </div>
          <div tw="max-w-lg p-4">
            <p>
              Here's a scene from one of the greatest movies{" "}
              <span tw="font-bold">ever</span>.
            </p>

            <iframe
              width="400"
              height="300"
              src="https://www.youtube-nocookie.com/embed/u3CKgkyc7Qo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

function SHOUTMO() {
  return (
    <>
      <p
        tw="text-6xl leading-none -mt-8"
        style={{
          color: "#ff27e1",
          fontFamily: "basiclazer",
        }}
      >
        SHOUTMO
      </p>
    </>
  );
}

// <div tw="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-8">
// <RiArrowRightUpLine />
// </div>
