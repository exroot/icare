import 'twin.macro'

function TopButtons() {
  return (
    <>
      <div tw="my-3 flex flex-wrap justify-start ">
        <span tw="m-1 bg-gray-500 hover:bg-gray-300 rounded-full px-2 font-bold text-lg leading-loose cursor-pointer">
          new
        </span>
        <span tw="m-1 bg-gray-500 hover:bg-gray-300 rounded-full px-2 font-bold text-lg leading-loose cursor-pointer">
          other
        </span>
        <span tw="m-1 bg-gray-500 hover:bg-gray-300 rounded-full px-2 font-bold text-lg leading-loose cursor-pointer">
          trending
        </span>
        <span tw="m-1 bg-gray-500 hover:bg-gray-300 rounded-full px-2 font-bold text-lg leading-loose cursor-pointer">
          culture
        </span>
        <span tw="m-1 bg-gray-500 hover:bg-gray-300 rounded-full px-2 font-bold text-lg leading-loose cursor-pointer">
          gaming
        </span>
      </div>
    </>
  )
}
export default TopButtons
