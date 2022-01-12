import React from "react";
import { RiTwitterFill, RiDiscordFill } from "react-icons/ri";
import Wrapper from "../../components/Wrapper";
import SEO from "../../components/SEO";
import "twin.macro";

const Contact = () => (
  <>
    <SEO
      title="Contact us"
      description="Let us know how we can help you, contact with us."
      openGraph={{
        url: process.env.NEXT_PUBLIC_CLIENT_URL,
        type: "website",
        description: "Let us know how we can help you, contact with us.",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_CLIENT_URL}img/shoutmo.png`,
            width: 1000,
            height: 300,
            alt: "Shoutmo image",
          },
        ],
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
    <Wrapper>
      <div tw="w-full mx-auto px-0 sm:px-6 md:px-8">
        <div tw="">
          {/* <div tw="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}
          {/* <ContactForm /> */}
          <GetStartedTodaySection />
          {/* <TweetUsBanner /> */}
          {/* <MessagesOnTwitterBanner /> */}
          <FollowUsOnTwitterBanner />
          <DiscordChannelSection />
        </div>
      </div>
    </Wrapper>
  </>
);

export default Contact;

function GetStartedTodaySection() {
  return (
    <>
      <div
        tw="flex flex-col w-full rounded-lg shadow-lg"
        style={{
          background: "rgba(0, 0, 26, .9)",
          color: "white",
        }}
      >
        <div tw="text-3xl font-extrabold leading-tight ml-6 py-8 text-left">
          <p tw="text-5xl">We're busy building this thing out!</p>
          <p>
            <span
              tw="text-2xl font-bold leading-tight"
              style={{
                color: "#ff08ff",
              }}
            >
              Got a question? Want to get involved? Just wanna to say hi?
            </span>
          </p>

          <p tw="mt-2">Best way to reach us is at the links below:</p>
        </div>
      </div>
    </>
  );
}

function FollowUsOnTwitterBanner() {
  return (
    <>
      <a href="https://twitter.com/shoutmofficial">
        <div
          tw=" py-3 my-3 px-4 bg-white text-white bg-indigo-800 hover:bg-indigo-600
          font-semibold hover:shadow rounded flex flex-row w-full justify-between
          transition duration-200 ease-in-out transform"
        >
          {/* // link to our twitter */}
          <p tw="text-3xl font-extrabold leading-tight my-2">
            <RiTwitterFill tw="inline-block mr-2" fill="#1b95e0" size={48} />

            <span tw="inline-block align-middle">Siguenos en Twitter</span>
          </p>
        </div>
      </a>

      {/* <div
        tw=" py-3 my-3 px-4 bg-white text-white bg-indigo-800 hover:bg-indigo-600
          font-semibold hover:shadow rounded flex flex-row w-full justify-between
          transition duration-200 ease-in-out transform"
      >
        <a href="https://twitter.com/shoutmofficial">
          <p tw="text-3xl font-extrabold leading-tight my-2 mx-auto text-center">
            <RiTwitterFill tw="inline-block mr-2" fill="#1b95e0" size={48} />

            <span tw="inline-block align-middle">
              Click here to follow us on Twitter
            </span>
          </p>
        </a>
      </div> */}
    </>
  );
}

function DiscordChannelSection() {
  return (
    <>
      <a href="https://discord.gg/7BTNuxrjwJ">
        <div
          tw="py-3 my-3 px-4 bg-white text-white bg-indigo-800 hover:bg-indigo-600
          font-semibold hover:shadow rounded flex flex-row w-full justify-between
          transition duration-200 ease-in-out transform"
        >
          <p tw="text-3xl font-extrabold leading-tight my-2">
            <RiDiscordFill tw="inline-block mr-2" fill="#7289DA" size={48} />
            <span tw="inline-block align-middle">Join our Discord server</span>
          </p>
        </div>
      </a>
    </>
  );
}

function TweetUsBanner() {
  return (
    <>
      <div
        tw="flex flex-col w-full rounded-lg shadow-lg mt-4"
        style={{
          background: "rgba(0, 0, 26, .9)",
          color: "white",
        }}
      >
        <a href="#">
          <p tw=" text-3xl font-extrabold leading-tight my-2 mx-auto text-center">
            <RiTwitterFill tw="inline-block" fill="#1b95e0" size={48} />
            <span tw="inline-block align-middle">Tweet something @ us</span>
          </p>
        </a>
      </div>
    </>
  );
}

function MessagesOnTwitterBanner() {
  return (
    <>
      <div
        tw="flex flex-col w-full rounded-lg shadow-lg mt-4"
        style={{
          background: "rgba(0, 0, 26, .9)",
          color: "white",
        }}
      >
        <a href="https://twitter.com/shoutmofficial">
          <p tw=" text-3xl font-extrabold leading-tight my-2 mx-auto text-center">
            <RiTwitterFill tw="inline-block" fill="#1b95e0" size={48} />
            <span tw="inline-block align-middle">Message us on Twitter</span>
          </p>
        </a>
      </div>
    </>
  );
}

function ContactForm() {
  return (
    <>
      <div tw="text-center w-full" />
      <div tw="max-w-screen-xl mt-4 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
        <div tw="flex flex-col justify-between">
          <div>
            <h2 tw="text-4xl lg:text-5xl font-bold leading-tight">
              Lets talk about everything!
            </h2>
            <p tw="text-gray-700 mt-8">
              Got a question? Want to get involved? Or if you just want to say
              hi, go ahead and drop us line here or reach out to us on Twitter
              at @SHOUTMOFFICIAL. We love talking shop and meeting new people!
            </p>
          </div>
          <div tw="mt-8 text-center" />
        </div>
        <div tw="">
          <div>
            <span tw="uppercase text-sm text-gray-600 font-bold">
              Full Name
            </span>
            <input
              tw="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
              type="text"
              placeholder=""
            />
          </div>
          <div tw="mt-8">
            <span tw="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input
              tw="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none"
              type="text"
            />
          </div>
          <div tw="mt-8">
            <span tw="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea tw="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none" />
          </div>
          <div tw="mt-8">
            <button tw="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// tweet link button

{
  /* <a
            href="https://twitter.com/share?ref_src=twsrc%5Etfw"
            class="twitter-share-button"
            data-show-count="false"
          >
            Tweet
          </a> */
}

{
  /* // link to our twitter */
}
{
  /* <a href="https://twitter.com/shoutmofficial">
            <p tw=" text-3xl font-extrabold leading-tight mt-8 mb-3 mx-auto text-center">
              <RiTwitterFill tw="inline-block" fill="#1b95e0" size={48} />
              <span tw="inline-block">@SHOUTMOFFICIAL</span>
            </p>
          </a> */
}

{
  /* // link to dm us on twitter */
}
{
  /* <a href="https://twitter.com/messages/compose?recipient_id=1303504989499936771&ref_src=twsrc%5Etfw">
            <button
              tw="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-4 mb-4 mr-2"
              href="https://twitter.com/messages/compose?recipient_id=1303504989499936771&ref_src=twsrc%5Etfw"
              data-screen-name="http://twitter.com/shoutmofficial"
              data-show-count="false"
            >
              Message us on Twitter
            </button>
          </a> */
}

{
  /* // link to tweet to us on twitter */
}
{
  /* <a href="https://twitter.com/intent/tweet?screen_name=shoutmofficial&ref_src=twsrc%5Etfw">
            <button
              tw="bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mb-4"
              // tw="twitter-mention-button"
              tw=""
              data-show-count="false"
            >
              Tweet @ us
            </button>
          </a> */
}
