/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'twin.macro'

import useTrendingTags from '../../../lib/useTrendingTagsFetcher'

const TrendingTags = () => (
  <>
    <div tw="flex flex-col items-center">
      <GetTags />
    </div>
  </>
)

function GetTags() {
  const { loading, data } = useTrendingTags()
  // console.log(data)
  return (
    <>
      <div tw="w-full">
        <div tw="flex flex-wrap -m-1">
          {loading && <p>loading</p>}

          {data.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </div>
    </>
  )
}

const Tag = ({ children }) => (
  <>
    {/* hover:bg-secondary */}
    <a tw="text-primary-400 m-1  hover:text-white rounded px-2 font-semibold leading-loose cursor-pointer uppercase">
      <span tw="font-bold">#</span>
      {children}
    </a>
  </>
)

export default TrendingTags
