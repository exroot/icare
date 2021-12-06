import 'twin.macro'

const FormLabel = ({ htmlFor, children }) => {
  return (
    <label
      tw="block tracking-wide text-primary-200 mb-2 font-bold"
      htmlFor={htmlFor.toLowerCase()}
    >
      {children}
    </label>
  )
}

export default FormLabel
