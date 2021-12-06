import React from 'react';
import Wrapper from '../../components/Wrapper';
import SEO from '../../components/SEO';
import 'twin.macro';

const FAQ = () => (
  <SEO>
    <SEO
      title="Frequently Asked Questions"
      description="What is SHOUTMO? · How to use SHOUTMO? · Linking your accounts · Creating shoutouts..."
      openGraph={{
        url: process.env.NEXT_PUBLIC_CLIENT_URL,
        type: 'website',
        description:
            'What is SHOUTMO? · How to use SHOUTMO? · Linking your accounts · Creating shoutouts...',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_CLIENT_URL}img/shoutmo.png`,
            width: 1000,
            height: 300,
            alt: 'Shoutmo image',
          },
        ],
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
    <Wrapper>
      <div tw="max-w-6xl mx-auto px-4 py-4 sm:px-6 md:px-8">
        {/* <div tw="p-1 bg-gray-400 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500"> */}
        {/* <div tw="p-1 bg-gray-400">
              <h1 tw="text-4xl font-semibold text-text-dark">FAQ</h1>
              <div tw="rounded-lg" />
            </div> */}
      </div>
      <div tw="w-full mx-auto px-0 sm:px-6 md:px-8">
        <div tw="pb-4">
          {/* <FAQPageContent /> */}
          <FaqAccordion />
        </div>
      </div>
    </Wrapper>
  </SEO>
);

export default FAQ;

function FAQPageContent() {
  return (
    <>
      <section>
        <SectionTitle title="What is SHOUTMO?" />
        <p tw="text-base font-semibold text-text-dark">
          We're a social networking and sharing platform. We make it easy to
          share your total online web presence with one simple easy to share
          link.
        </p>

        <p tw="text-base font-semibold text-text-dark">
          Today content creators have a multitude of channels through which they
          can reach their audience.
        </p>

        <p tw="text-base font-semibold text-text-dark">
          With new platforms popping up everyday, how can content creators
          enable their audiences to find them across all platforms?
        </p>

        <p tw="text-base font-semibold text-text-dark">
          SHOUTMO is a link sharing service that empowers content creators and
          their fans to connect easily with just one link. Just sign up for an
          account, add your links and then share your SHOUTMO account - easy
          peasy!
        </p>

        <p tw="text-base font-semibold text-text-dark">
          For example, sometimes we follow people on youtube or check their
          tweets on twitter. Other times we listen to their podcasts on Stitcher
          or listen to their latest mix on Soundcloud.
        </p>

        <p tw="text-base font-semibold text-text-dark">
          That's a lot accounts and platforms to keep track of isn't it?
        </p>

        <p tw="text-base font-semibold text-text-dark">
          What if you want to throw a couple bucks at someone because you
          thought that live stream they did was great and you want to support
          them? What if you're a writer and you want people to be able to easily
          find and buy your book? Where do people go to buy your book?
        </p>

        <p tw="text-base font-semibold text-text-dark">
          It shouldn't be hard to find the people who's content you love online.
          Or where they are and what their up to. You should just be able to
          share a link and no matter if you've moved to a new platform or are on
          10 different platforms, your fans should be able to find you easily.
          That's where we come in!
        </p>
      </section>

      <section>
        <SectionTitle title="How to use SHOUTMO?" />
        <Blahblah />
      </section>

      <section>
        <SectionTitle title="Linking your accounts" />
        <Blahblah />
      </section>

      <section>
        <SectionTitle title="Creating shoutouts" />
        <VideoEmbed />
        <Blahblah />
      </section>
    </>
  );
}

  <p tw="text-2xl pt-8 pb-1 font-semibold text-text-dark">Creating shoutouts</p>;

function SectionTitle(props) {
  return (
    <>
      <p tw="text-2xl pt-8 pb-1 font-semibold text-text-dark">{props.title}</p>
    </>
  );
}
function Blahblah() {
  return (
    <>
      <p tw="text-base font-semibold text-text-dark" />
    </>
  );
}

function VideoEmbed() {
  return (
    <>
      <div tw="mx-auto w-full p-2 my-6">
        <p tw="text-base font-semibold text-text-dark pb-1">VIDEO TITLE</p>

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/RC7aud4b3dQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  );
}

function FaqAccordion() {
  return (
    <>
      <div tw="h-screen">
        <section tw="text-gray-700">
          <div tw="container px-5 pt-12 pb-24 mx-auto">
            <div tw="text-center mb-12">
              <h1 tw="sm:text-3xl text-2xl font-bold text-center text-gray-600 mb-4">
                Frequently Asked Questions
              </h1>
              <p tw="text-gray-600 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Here's some answers to the most common questions about how to
                use our service.
              </p>
            </div>

            <div tw="flex flex-wrap lg:w-4/5 mx-auto">
              <div tw="w-full lg:w-4/5 py-2 mx-auto">
                <details tw="mb-4">
                  <summary
                    tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600
                    py-2 rounded-lg text-gray-100 focus:outline-none"
                  >
                    What is SHOUTMO?
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">
                      In simple terms, we're a semi-social network. After you
                      sign up for an account and fill out your profile you will
                      be able to add links to all the platforms and social
                      networks that you're active on.
                    </p>
                    <p tw="mb-2">
                      People can share a link to their profile and if someone
                      clicks that get instant access to everywhere online their
                      at.
                    </p>
                    <p tw="mb-2">
                      You can also follow other people who are on SHOUTMO. This
                      subscribes you to their posts so that they show up in your
                      feed. In addition to that you will get direct push
                      notifications from them when they post here linking to
                      content from different platforms.
                    </p>
                    <p tw="mb-2">
                      Why is this important? Well sometimes people switch
                      platforms for "reasons" and you don't want to loose touch
                      with the people you connect with. That's where we come in.
                      We're a decentralized linking platform that works outside
                      of all of these platforms to enable you to stay connected.
                    </p>
                    <p tw="mb-1">
                      Basic gist is, peoples web pressence is so fragmented
                      online these days and we believe we have come up with a
                      solution for it. The web is about you, your connections
                      and sharing interests. That's where we come in.
                    </p>
                  </div>
                </details>
                {/* <details tw="mb-4">
                  <summary tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600 px-4 py-2 rounded-lg text-gray-100 focus:outline-none">
                    How long has this site been live?
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">I'll let you know when we launch.</p>
                  </div>
                </details> */}

                <details tw="mb-4">
                  <summary tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600 px-4 py-2 rounded-lg text-gray-100 focus:outline-none">
                    How can I add links to my profile?
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">
                      Click the "Update Links" button in the sidebar. We're
                      adding new links all the time. If there's a specific
                      platform, site or network that you would like us to get
                      added, send us a message on Twitter and we'll get it in.
                    </p>
                  </div>
                </details>

                <details tw="mb-4">
                  <summary tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600 px-4 py-2 rounded-lg text-gray-100 focus:outline-none">
                    Can I upload anything I want on there?
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">
                      Short answer is no. Use your best judgement and see are
                      terms and conditions for more details
                      <a href="/info/terms">here</a>
                      .
                    </p>
                  </div>
                </details>
                <details tw="mb-4">
                  <summary tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600 px-4 py-2 rounded-lg text-gray-100 focus:outline-none">
                    How can I get involved?
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">
                      If you would like to contribute send us a DM on twitter
                      and we can chat.
                    </p>
                  </div>
                </details>

                <details tw="mb-4">
                  <summary tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600 px-4 py-2 rounded-lg text-gray-100 focus:outline-none">
                    How can I contribute?
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">
                      If you would like to contribute send us a DM on twitter
                      and we can chat. Nothing ventured nothing gained.
                      amiright?
                    </p>
                  </div>
                </details>

                <details tw="mb-4">
                  <summary tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600 px-4 py-2 rounded-lg text-gray-100 focus:outline-none">
                    How can I donate to support development?
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">
                      We're working on getting something setup right now.
                    </p>
                  </div>
                </details>

                <details tw="mb-4">
                  <summary tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600 px-4 py-2 rounded-lg text-gray-100 focus:outline-none">
                    How to contact us?
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">
                      The absolute best way to contact us right now is to click
                      the "Send Feedback" button in the sidebar. We're going to
                      try and respond to all submissions within 24 hours.
                    </p>
                  </div>
                </details>

                <details tw="mb-4">
                  <summary tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600 px-4 py-2 rounded-lg text-gray-100 focus:outline-none">
                    I have an idea for a cool feature to add!
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">
                      🙌🏻 Hit us up if you have any feedback, find a bug, or have
                      a feature request. Go ahead and click the "Send Feedback"
                      button in the sidebar. This is the best way to contact us.
                      We will try to respond to all submissions within 24 hours.
                    </p>
                  </div>
                </details>

                <PrivacyAndTerms />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

function PrivacyAndTerms() {
  return (
    <>
      {/* <div tw="px-6 py-4 mx-auto text-left bg-gray-600 rounded">
          <span tw="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2">
            <a href="/info/terms">Terms and Conditions</a>
          </span>
          <span tw="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2">
            <a href="/info/privacy">Privacy Policy</a>
          </span>
          <span tw="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2">
            <a href="/info/contact">Feedback</a>
          </span>
        </div> */}

      <div tw="px-0 py-4 mx-auto text-center text-sm">
        {/* <span tw="inline-block bg-gray-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2"> */}
        <a href="/info/privacy" tw="inline-block mr-2">
          Privacy
        </a>

        <a href="/info/terms" tw="inline-block mr-2">
          Terms and Conditions
        </a>

        <a href="/info/contact" tw="inline-block mr-2">
          Feedback
        </a>
      </div>
    </>
  );
}
