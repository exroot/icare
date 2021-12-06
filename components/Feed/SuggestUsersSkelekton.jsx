import React from 'react'
import ContentLoader from 'react-content-loader'
import 'twin.macro'

const SuggestedUsersSkeleton = () => (
  <>
    <div tw="flex flex-col items-center px-3 space-y-1">
      <div tw="flex flex-col h-full w-full">
        <p tw="text-primary-200 text-sm font-bold uppercase">Also check out</p>
      </div>
      <Suggested />
      <Suggested />
      <Suggested />
      <Suggested />
      <Suggested />
    </div>
  </>
)

const Suggested = () => (
  <div tw="w-full flex items-center bg-primary-800 hover:bg-primary-700 pl-2 xl:pl-4 cursor-pointer duration-100 ease-in rounded-lg z-10">
    <MyLoader />
  </div>
)

const MyLoader = () => (
  <ContentLoader
    speed={1}
    viewBox="0 0 476 124"
    backgroundColor="var(--color-primary-600)"
    foregroundColor="var(--color-primary-700)"
    style={{ width: '100%' }}
  >
    <rect x="115" y="68" rx="3" ry="3" width="152" height="16" />
    <circle cx="50" cy="62" r="40" />
    <rect x="115" y="33" rx="3" ry="3" width="180" height="16" />
  </ContentLoader>
)

export default SuggestedUsersSkeleton
