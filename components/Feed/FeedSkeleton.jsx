import React from 'react'
import ContentLoader from 'react-content-loader'
import 'twin.macro'

const FeedSkeleton = () => (
  <div tw="w-full">
    <FeedCardSkeleton />
    <FeedCardSkeleton />
    <FeedCardSkeleton />
    <FeedCardSkeleton />
    <FeedCardSkeleton />
    <FeedCardSkeleton />
    <FeedCardSkeleton />
    <FeedCardSkeleton />
    <FeedCardSkeleton />
  </div>
)

const FeedCardSkeleton = () => (
  <div tw="relative sm:px-0 sm:mx-auto w-full xl:w-120 sm:max-w-2xl">
    <div tw="relative text-primary-200 bg-primary-800 rounded-lg w-full mb-2 duration-300 ease-in-out shadow-2xl p-6">
      <MyLoader />
    </div>
  </div>
)

const MyLoader = (props) => (
  <ContentLoader
    speed={1}
    viewBox="0 0 476 124"
    backgroundColor="var(--color-primary-600)"
    foregroundColor="var(--color-primary-700)"
    style={{ width: '100%' }}
  >
    <rect x="56" y="12" rx="3" ry="3" width="88" height="6" />
    <rect x="56" y="27" rx="3" ry="3" width="52" height="6" />
    <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
    <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
    <rect x="2" y="91" rx="3" ry="3" width="124" height="5" />
    <rect x="3" y="4" rx="0" ry="0" width="43" height="41" />
  </ContentLoader>
)

export default FeedSkeleton
