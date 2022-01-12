import React from "react";
import { useRouter } from "next/router";
import SEO from "../components/SEO";
import Hero from "../components/Index/Hero";
import Navbar from "../components/NavbarIndex";
import LogoHero from "../components/Logo/LogoHero";
import GlowButton from "../components/Buttons/GlowButton";
import useUser from "../lib/useUser";
import CookieConsent from "../components/CookieConsent";
import "twin.macro";

const Home = () => {
  const router = useRouter();
  const { user } = useUser({
    redirectTo: router.query.next || "/feed",
    redirectIfFound: true,
    oneCall: true,
  });
  return (
    <>
      <SEO
        description="Share your connections now"
        openGraph={{
          url: process.env.NEXT_PUBLIC_CLIENT_URL,
          type: "website",
          description: "Share your connections now",
          images: [
            {
              url: process.env.NEXT_PUBLIC_CLIENT_URL + "img/icare.png",
              width: 1000,
              height: 300,
              alt: "icare image",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      <Hero>
        <div tw="mb-8 leading-none">
          <LogoHero />
          <p tw="text-gray-400 mt-2 font-light tracking-wide text-base md:text-2xl lg:text-4xl">
            Unete ahora mismo y <span tw="text-accent">cuida de ti.</span>
          </p>
        </div>
        <GlowButton href="/info/about" hero={true}>
          Ver más
        </GlowButton>
        {/* <TakeActionButtonArea /> */}
      </Hero>
      {/* <CookieConsent /> */}
    </>
  );
};

export default Home;

function TakeActionButtonArea() {
  return (
    <>
      <div tw="justify-center mt-5 sm:mt-8">
        <div tw="">
          <a
            href="/info/about"
            tw="px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out md:py-4 md:text-lg"
          >
            Learn More
          </a>

          <a
            href="/info/about"
            tw="ml-4 px-12 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg"
          >
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}
