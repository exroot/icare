import React from 'react'
import 'twin.macro'

const Page = () => (
  <>
    <div tw="bg-blue-200 grid grid-flow-col grid-cols-12 grid-rows-1 gap-0">
      <div tw="hidden md:flex md:flex-col bg-blue-600 w-full relative min-h-screen text-center md:col-span-4 lg:col-span-3 border-r border-black">
        <div tw="w-full sticky top-0">
          <div tw="w-full py-10 bg-red-400">
            <h1 tw="text-4xl text-white">Ayyy elmioos</h1>
          </div>
          <div tw="mt-24 bg-purple-400 w-full h-auto">
            <div tw="text-xl text-black">Item 1</div>
            <div tw="text-xl text-black">Item 1</div>
            <div tw="text-xl text-black">Item 1</div>
            <div tw="text-xl text-black">Item 1</div>
            <div tw="text-xl text-black">Item 1</div>
            <div tw="text-xl text-black">Item 1</div>
          </div>
        </div>
      </div>
      {/* Feed page */}
      <div tw="bg-blue-500 w-full h-auto col-span-full md:col-span-8 lg:col-span-7 ">
        <div tw="h-full w-full overflow-y-auto">
          <div tw="">
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
            <div tw="w-full h-24 bg-yellow-200 hover:bg-yellow-100 border-b border-black" />
          </div>
        </div>
      </div>

      <div tw="hidden lg:flex lg:flex-col lg:col-span-4 border-l border-black bg-blue-900 pr-4 lg:pr-0 justify-between items-center mx-auto w-full">
        <div tw="w-full h-24 bg-purple-400 sticky top-0" />
      </div>
    </div>
  </>
)

export default Page
