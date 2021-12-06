import 'twin.macro'

const FormLabel = ({ htmlFor, children }) => {
  return (
    <label
      tw="block uppercase tracking-wide text-primary-400 text-xs font-bold mb-2"
      htmlFor={htmlFor.toLowerCase()}
    >
      {children}
    </label>
  )
}

export default FormLabel
