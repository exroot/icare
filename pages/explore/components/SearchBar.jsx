import 'twin.macro'

function Search() {
  return (
    <>
      <div>
        <form tw="my-4 flex flex-wrap justify-start">
          <input
            tw="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white w-1/2"
            placeholder="Find people, creators and topics that interest you"
          />
          <button
            type="button"
            tw="px-8 rounded-r-lg bg-blue-600 text-gray-800 font-bold p-4 uppercase border-blue-500 border-t border-b border-r text-white"
          >
            Search
          </button>
        </form>
      </div>
    </>
  )
}

export default Search
