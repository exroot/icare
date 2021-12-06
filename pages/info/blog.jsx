import Head from "next/head";
import Wrapper from "../../components/Wrapper";
import SEO from "../../components/SEO";
import "twin.macro";

const BlogContent = () => {
  return (
    <>
      <SEO
        title="Blog"
        description="Shoutmo's official blog"
        openGraph={{
          url: process.env.NEXT_PUBLIC_CLIENT_URL,
          type: "website",
          description: "Shoutmo's official blog",
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
      <div tw="h-screen flex items-center justify-center py-6">
        <section tw="text-gray-700 overflow-hidden">
          <div tw="container px-5 py-24 mx-auto">
            <div tw="-my-8">
              <div tw="py-8 flex flex-wrap">
                <div tw="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span tw="tracking-widest font-medium  text-gray-900">
                    CATEGORY
                  </span>
                  <span tw="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div tw="md:flex-grow">
                  <h2 tw="text-2xl font-medium text-gray-900 mb-2">
                    Bitters hashtag waistcoat fashion axe chia unicorn
                  </h2>
                  <p tw="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a tw="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <RightArrow />
                  </a>
                </div>
              </div>
              <div tw="py-8 flex border-t-2 border-gray-200 flex-wrap">
                <div tw="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span tw="tracking-widest font-medium  text-gray-900">
                    CATEGORY
                  </span>
                  <span tw="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div tw="md:flex-grow">
                  <h2 tw="text-2xl font-medium text-gray-900  mb-2">
                    Meditation bushwick direct trade taxidermy shaman
                  </h2>
                  <p tw="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a tw="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <RightArrow />
                  </a>
                </div>
              </div>
              <div tw="py-8 flex border-t-2 border-gray-200 flex-wrap">
                <div tw="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span tw="tracking-widest font-medium  text-gray-900">
                    CATEGORY
                  </span>
                  <span tw="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                </div>
                <div tw="md:flex-grow">
                  <h2 tw="text-2xl font-medium text-gray-900  mb-2">
                    Woke master cleanse drinking vinegar salvia
                  </h2>
                  <p tw="leading-relaxed">
                    Glossier echo park pug, church-key sartorial biodiesel
                    vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf
                    moon party messenger bag selfies, poke vaporware kombucha
                    lumbersexual pork belly polaroid hoodie portland craft beer.
                  </p>
                  <a tw="text-indigo-500 inline-flex items-center mt-4">
                    Learn More
                    <RightArrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default function Blog() {
  return (
    <>
      <Head>
        <title>Shoutmo - Blog</title>
      </Head>
      <Wrapper>
        <div>
          <BlogContent />
        </div>
      </Wrapper>
    </>
  );
}

function RightArrow() {
  return (
    <svg
      tw="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M5 12h14"></path>
      <path d="M12 5l7 7-7 7"></path>
    </svg>
  );
}
