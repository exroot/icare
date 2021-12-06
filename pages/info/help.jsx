import Wrapper from "../../components/Wrapper";
import SEO from "../../components/SEO";
import "twin.macro";

const Help = () => {
  return (
    <>
      <SEO
        title="Help"
        description="Information about SHOUTMO"
        openGraph={{
          url: process.env.NEXT_PUBLIC_CLIENT_URL,
          type: "website",
          description: "Information about SHOUTMO",
          images: [
            {
              url: process.env.NEXT_PUBLIC_CLIENT_URL + "img/shoutmo.png",
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
        <HelpPageContent />
      </Wrapper>
    </>
  );
};

export default Help;

function HelpPageContent() {
  return (
    <>
      <div tw="h-screen">
        <FaqAccordion />
        {/* <HelpPageWords /> */}
        {/* <DifferentFAQLayout /> */}
      </div>
    </>
  );
}

function HelpPageWords() {
  return (
    <>
      <div tw="w-full sm:w-1/2 md:w-1/3">
        <h1 tw="font-sans font-thin mb-4">Article title</h1>

        <p tw="text-gray-900 mb-3">
          Written by Walter Bishop on 25 May 2070. Posted in News
        </p>

        <h2 tw="font-sans font-thin leading-normal mb-4">
          The observers are coming. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi.
        </h2>

        <p tw="text-gray-900 mb-6 leading-tight">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div>
          <a href="#" tw="text-black mr-2">
            READ MORE
          </a>
          <a href="#" tw="text-black">
            5 COMMENTS
          </a>
        </div>
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
                <details tw="mb-4">
                  <summary tw="font-semibold rounded-md py-2 px-4 w-full bg-indigo-600 px-4 py-2 rounded-lg text-gray-100 focus:outline-none">
                    How long has this site been live?
                  </summary>

                  <div tw="p-4 w-full text-gray-600">
                    <p tw="mb-2">I'll let you know when we launch.</p>
                  </div>
                </details>

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
                      <a href="/info/terms">here</a>.
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
                      and we can chat.{" "}
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

// <details tw="mb-4">
// <summary tw="font-semibold  bg-gray-200 rounded-md py-2 px-4">
//   title about some topic
// </summary>

// <span>
//   Laboris qui labore cillum culpa in sunt quis sint veniam.
//   Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
//   minim velit nostrud pariatur culpa magna in aute.
// </span>
// </details>

{
  /* <p tw="text-2xl pt-8 pb-1 font-semibold text-text-dark">Help </p>

      <p tw="text-base font-semibold text-text-dark">
        Sed porttitor turpis quis est pellentesque, in accumsan risus porta.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Maecenas quis elit sed felis dapibus sodales ut auctor
        nibh. Mauris dapibus diam in ante scelerisque ultrices. Nam tincidunt
        lorem vel ultricies sodales. Nullam facilisis placerat pulvinar. Nullam
        in arcu urna. Pellentesque tempus lorem et ligula viverra convallis.
        Integer id vehicula quam, sit amet dictum urna. Praesent pellentesque
        hendrerit risus non pharetra. In a libero finibus, hendrerit justo quis,
        consequat nunc. Sed iaculis efficitur nunc sagittis hendrerit. Praesent
        ligula augue, malesuada quis pretium semper, facilisis non quam.
        Phasellus ac placerat mi. Quisque ac fermentum tellus.
      </p> */
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

// <p tw="mb-2"></p>

function DifferentFAQLayout() {
  return (
    <>
      <div tw="bg-gray-100 pt-10">
        <div tw="mx-auto max-w-6xl">
          <div tw="p-2 bg-gray-100 rounded">
            <div tw="flex flex-col md:flex-row">
              <div tw="md:w-1/3 p-4 text-sm">
                <div tw="text-3xl">
                  Frequently asked <span tw="font-medium">Questions</span>
                </div>
                <div tw="my-2">Wondering how our service works ?</div>
                <div tw="mb-2">
                  Confused about how we can improve your business ?
                </div>
                <div tw="text-xs text-gray-600">
                  Dive into our FAQ for more details
                </div>
              </div>
              <div tw="md:w-2/3">
                <div tw="p-4">
                  <div tw="mb-2">
                    <div tw="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                      <div tw="flex-auto">
                        How to install it with windows server ?
                      </div>
                      <div tw="px-2 mt-1">
                        <div style="">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            // tw="feather feather-chevron-down w-5 h-5"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div tw="mb-2">
                    <div tw="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                      <div tw="flex-auto">
                        How to use it with other integrations ?
                      </div>
                      <div tw="px-2 mt-1">
                        <div style="">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            // tw="feather feather-chevron-down w-5 h-5"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div tw="mb-2">
                    <div tw="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                      <div tw="flex-auto">How to build an app ?</div>
                      <div tw="px-2 mt-1">
                        <div style="">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            // tw="feather feather-chevron-up w-5 h-5"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg> */}
                        </div>
                      </div>
                    </div>
                    <div
                      tw="p-2 text-justify text-left text-gray-800 mb-5 bg-white"
                      style=""
                    >
                      Lorem, ipsum dolor sit amet consectetur{" "}
                      <span tw="font-bold">adipisicing elit</span>. Mollitia
                      temporibus doloremque non eligendi unde ipsam?
                      Voluptatibus, suscipit deserunt quidem delectus
                      perferendis velit molestias, veritatis officia fugiat
                      cumque quaerat earum adipisci?
                    </div>
                  </div>
                  <div tw="mb-2">
                    <div tw="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                      <div tw="flex-auto">How to download it ?</div>
                      <div tw="px-2 mt-1">
                        <div style="">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            // tw="feather feather-chevron-down w-5 h-5"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div tw="mb-2">
                    <div tw="font-medium rounded-sm text-lg px-2 py-3 flex text-gray-800 flex-row-reverse mt-2 cursor-pointer text-black bg-white hover:bg-white">
                      <div tw="flex-auto">How to use extensions ?</div>
                      <div tw="px-2 mt-1">
                        <div style="">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            // tw="feather feather-chevron-down w-5 h-5"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
