/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-children-prop */
import React, { useEffect, useCallback } from "react";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { BeatLoader } from "react-spinners";
// import localforage from 'localforage'
import useUser from "../../lib/useUser";
import usePaginatedShoutouts from "../../lib/usePaginatedShoutouts";
import Layout from "../../components/Layout";
import PageLoader from "../../components/PageLoader";
import FeedCard from "../../components/Feed/FeedCard";
import ShoutoutInput from "../../components/Feed/ShoutoutInput";
import Navbar from "../../components/Navbar/NavbarAlt";
// import { firebaseCloudMessaging } from '../../utils/webPush'
// import initializeFCM from '../../utils/initializeFCM'
import FeedSkeleton from "../../components/Feed/FeedSkeleton";
import "twin.macro";
import useSuggestedUsers from "../../lib/useSuggestedUsers";
import SuggestedUsers from "../../components/Feed/SuggestedUsers";
import useCategories from "../../lib/useCategories";
import TrendingTags from "../../components/Feed/TrendingTags";

const animationProps = {
  initial: {
    scale: 0.8,
    opacity: 0,
    y: -90,
  },
  animate: {
    scale: 1,
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 90,
  },
};

const Feed = () => {
  const { user, isLoading } = useUser({ redirectTo: "/login" });

  const {
    setSize,
    isReachingEnd,
    shoutouts,
    errorShoutouts,
    mutateShoutouts,
  } = usePaginatedShoutouts("/feed/");
  const { categories, errorCategories } = useCategories();
  const { suggested, errorSuggested } = useSuggestedUsers();

  const loadMore = useCallback(async () => setSize((i) => i + 1));
  if (isLoading || user.is_logged_in === false) {
    return (
      <>
        <Head>
          <title>iCare</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLoader />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>iCare - Inicio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Inicio</h1>
          <Navbar />
        </div>
        <div tw="w-full border-b border-primary-700 mb-4" />

        <div tw="flex justify-between relative">
          <div tw="w-full lg:w-9/12 xl:w-8/12">
            {/* <ShoutoutInput
              mutateShoutouts={mutateShoutouts}
              loading={!shoutouts.length}
            /> */}

            {!shoutouts && !errorShoutouts && <FeedSkeleton />}

            <InfiniteScroll
              dataLength={shoutouts.length} // This is important field to render the next data
              next={loadMore}
              hasMore={!isReachingEnd}
              scrollThreshold={0.6}
              refreshFunction={async () =>
                mutateShoutouts((data) => data, true)
              }
              scrollableTarget="main"
              loader={
                <div tw="flex justify-center text-center sm:px-0 w-full sm:max-w-2xl">
                  <div tw="mx-auto">
                    <div tw="w-full text-primary-200 text-sm font-bold">
                      Loading...
                    </div>
                    <BeatLoader color="var(--color-accent)" tw="pl-4" />
                  </div>
                </div>
              }
              endMessage={
                <AnimatePresence exitBeforeEnter>
                  <motion.div
                    variants={animationProps}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    tw="w-full text-center duration-200 ease-in-out transform font-semibold"
                  >
                    <div tw="w-full sm:max-w-2xl flex flex-col items-center bg-primary-800 leading-none rounded-lg shadow-xl text-primary-200 py-4 px-4 mx-auto ">
                      <h3 tw="text-xl">¡Estás al día!</h3>
                      <div tw="mt-1 font-normal text-primary-400">
                        Siempre podrás revisar la página de explorar y buscar
                        por categorias o nuevos perfiles que te puedan
                        interesar.
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              }
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={
                <h4 tw="text-text-dark text-2xl text-center mb-2">
                  &#8595; Pull down to refresh
                </h4>
              }
              releaseToRefreshContent={
                <h4 tw="text-text-dark text-2xl text-center mb-2">
                  &#8593; Release to refresh
                </h4>
              }
              children={shoutouts.map((shoutout) => (
                <FeedCard
                  shoutout={shoutout}
                  key={shoutout.id}
                  mutateShoutouts={mutateShoutouts}
                />
              ))}
            />
          </div>
          <div tw="hidden lg:block w-72">
            <div tw="mt-0 top-8 right-0 sticky w-auto space-y-8">
              <SuggestedUsers
                suggested={suggested}
                error={errorSuggested}
                loading={!suggested && !errorSuggested}
              />
              {/* <SuggestedUsers
                suggested={suggested}
                error={errorSuggested}
                loading={!suggested && !errorSuggested}
              /> */}
              {categories && (
                <TrendingTags
                  categories={categories}
                  loading={!categories && !errorCategories}
                />
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Feed;
