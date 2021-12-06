import Wrapper from "../../components/Wrapper";
import Link from "next/link";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";
import { css } from "twin.macro";

const InfoPage = () => {
  const styles = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const cardAnimations = {
    whileHover: {
      scale: 1.06,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.15)",
    },
    whileTap: {
      scale: 0.9,
    },
  };
  return (
    <>
      <SEO
        title="SHOUTMO Information Center"
        description="FAQ's · Blog · Contact · Privacy Policy · Terms of Service · Meet the team"
        openGraph={{
          url: process.env.NEXT_PUBLIC_CLIENT_URL,
          type: "website",
          description:
            "FAQ's · Blog · Contact · Privacy Policies · Terms of Service · Meet the team",
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
        <div tw="mb-6 px-4">
          <div tw="grid grid-cols-1 gap-5 px-4 text-center">
            {/* Help & faqs */}
            <h2 tw="text-xl text-text-darker font-bold text-left">Help</h2>
            <div tw="grid sm:grid-cols-2 gap-4 px-6 py-4 border border-text-dark border-dotted">
              <Link href="/info/help" passHref>
                <motion.a
                  tw="bg-gradient-to-r from-green-400 to-blue-500 min-w-full h-32 px-5 py-5 rounded relative"
                  whileHover={cardAnimations.whileHover}
                  whileTap={cardAnimations.whileTap}
                >
                  {/* Card header */}
                  <div tw="" css={styles}>
                    <h2 tw="text-xl text-gray-100 font-bold uppercase tracking-widest">
                      Help
                    </h2>
                  </div>
                </motion.a>
              </Link>
              <Link href="/info/faqs" passHref>
                <motion.a
                  tw="bg-gradient-to-r from-blue-500 to-green-400 min-w-full h-32 px-5 py-5 rounded relative"
                  whileHover={cardAnimations.whileHover}
                  whileTap={cardAnimations.whileTap}
                >
                  {/* Card header */}
                  <div tw="" css={styles}>
                    <h2 tw="text-xl text-gray-100 font-bold uppercase tracking-widest">
                      FAQs
                    </h2>
                  </div>
                </motion.a>
              </Link>
            </div>

            {/* Extras */}
            <h2 tw="text-xl text-text-darker font-bold text-left">
              About & contact
            </h2>
            <div tw="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-4 border border-text-dark border-dotted">
              <Link href="/info/about" passHref>
                <motion.a
                  tw="bg-gradient-to-r from-yellow-400 to-red-500 min-w-full h-32 px-5 py-5 rounded relative"
                  whileHover={cardAnimations.whileHover}
                  whileTap={cardAnimations.whileTap}
                >
                  {/* Card header */}
                  <div tw="" css={styles}>
                    <h2 tw="text-xl text-gray-100 font-bold uppercase tracking-widest">
                      About us
                    </h2>
                  </div>
                </motion.a>
              </Link>
              <Link href="/info/contact" passHref>
                <motion.a
                  tw="bg-gradient-to-r from-red-500 to-yellow-400 min-w-full h-32 px-5 py-5 rounded relative"
                  whileHover={cardAnimations.whileHover}
                  whileTap={cardAnimations.whileTap}
                >
                  {/* Card header */}
                  <div tw="" css={styles}>
                    <h2 tw="text-xl text-gray-100 font-bold uppercase tracking-widest">
                      Contact us
                    </h2>
                  </div>
                </motion.a>
              </Link>
            </div>
            {/* Privacy & Terms */}
            <h2 tw="text-xl text-text-darker font-bold text-left">Policies</h2>
            <div tw="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-4 border border-text-dark border-dotted">
              <Link href="/info/privacy" passHref>
                <motion.a
                  tw="bg-gradient-to-r from-indigo-400 to-pink-500 min-w-full h-32 px-5 py-5 rounded relative"
                  whileHover={cardAnimations.whileHover}
                  whileTap={cardAnimations.whileTap}
                >
                  {/* Card header */}
                  <div tw="" css={styles}>
                    <h2 tw="text-xl text-gray-100 font-bold uppercase tracking-widest">
                      Privacy policies
                    </h2>
                  </div>
                </motion.a>
              </Link>
              <Link href="/info/terms" passHref>
                <motion.a
                  tw="bg-gradient-to-r from-pink-500 to-indigo-400 min-w-full h-32 px-5 py-5 rounded relative"
                  whileHover={cardAnimations.whileHover}
                  whileTap={cardAnimations.whileTap}
                >
                  {/* Card header */}
                  <div tw="" css={styles}>
                    <h2 tw="text-xl text-gray-100 font-bold uppercase tracking-widest">
                      Terms of service
                    </h2>
                  </div>
                </motion.a>
              </Link>
            </div>
            {/* About & meet the team */}
            <h2 tw="text-xl text-text-darker font-bold text-left">Extras</h2>
            <div tw="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 py-4 border border-text-dark border-dotted">
              <Link href="/info/blog" passHref>
                <motion.a
                  tw="bg-gradient-to-r from-green-400 to-blue-600 min-w-full h-32 px-5 py-5 rounded relative"
                  whileHover={cardAnimations.whileHover}
                  whileTap={cardAnimations.whileTap}
                >
                  {/* Card header */}
                  <div tw="" css={styles}>
                    <h2 tw="text-xl text-gray-100 font-bold uppercase tracking-widest">
                      Blog
                    </h2>
                  </div>
                </motion.a>
              </Link>
              <Link href="/info/meettheteam" passHref>
                <motion.a
                  tw="bg-gradient-to-r from-blue-600 to-green-400 min-w-full h-32 px-5 py-5 rounded relative"
                  whileHover={cardAnimations.whileHover}
                  whileTap={cardAnimations.whileTap}
                >
                  {/* Card header */}
                  <div tw="" css={styles}>
                    <h2 tw="text-xl text-gray-100 font-bold uppercase tracking-widest">
                      Meet the team
                    </h2>
                  </div>
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default InfoPage;
