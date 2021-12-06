import 'twin.macro'

const Separator = ({ children }) => {
  return (
    <div tw="mt-5 mb-2 flex items-center justify-between">
      <span tw="border-b border-primary-400 w-1/5 lg:w-1/4"></span>
      <span tw="text-xs text-center text-primary-400 uppercase">
        {children}
      </span>
      <span tw="border-b border-primary-400 w-1/5 lg:w-1/4"></span>
    </div>
  )
}

export default Separator
