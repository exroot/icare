/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import tw, { css } from 'twin.macro'

const SecondaryButtonForResults = ({
  type = 'button',
  href = null,
  isSubmitting = null,
  children,
  ...props
}) => {
  const secondaryButtonStyle = css`
    ${tw`flex items-center border border-accent text-accent cursor-pointer | p-1 sm:p-3 rounded-full focus:outline-none hover:bg-accent-hover-outline transition duration-200 ease-in`}
    ${isSubmitting && tw`cursor-default`}
  `

  if (type === 'link') {
    return (
      <AnimatePresence exitBeforeEnter>
        <Link href={href} {...props} passHref>
          <a css={secondaryButtonStyle}>{children}</a>
        </Link>
      </AnimatePresence>
    )
  }

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.button type={type} css={secondaryButtonStyle} {...props}>
        {isSubmitting ? 'Loading...' : children}
      </motion.button>
    </AnimatePresence>
  )
}
export default SecondaryButtonForResults
