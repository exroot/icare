import 'twin.macro'

export const ContainerInner = ({ children }) => {
  return <div tw="px-10 pt-2 pb-8 w-full">{children}</div>
}

export const ContainerOuter = ({ children }) => {
  return (
    <div tw="px-4 mb-6">
      <div tw="w-full bg-black rounded-md shadow-md py-4 border-l-4">
        {children}
      </div>
    </div>
  )
}
