import 'twin.macro'

function Categories() {
  return (
    <>
      <div tw="flex flex-row space-x-3 overflow-x-scroll text-white">
        {/* // TODO add gradient then flip gradient on hover  */}
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </>
  )
}

function CategoryCard() {
  return (
    <>
      <div tw="h-24 w-40 bg-blue-600 pl-3 pt-3 flex-shrink-0 w-60 h-36 hover:bg-blue-400 rounded">
        <p tw="text-xl font-bold">#tag</p>
      </div>
    </>
  )
}

export default Categories
