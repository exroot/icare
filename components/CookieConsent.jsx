import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'
import 'twin.macro'

const CookieConsent = () => {
  const router = useRouter()
  const [consent, setConsent] = useState(false)
  const [visible, setVisible] = useState(consent)

  useEffect(() => {
    const cookiesConsent = window.localStorage.getItem(
      'shoutmo-cookies-consent'
    )
    const isInfoPage = router.pathname.includes('/info')
    if (!cookiesConsent && !isInfoPage) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (consent) {
      window.localStorage.setItem('shoutmo-cookies-consent', true)
      setVisible(false)
    }
  }, [consent])

  const buttonAnimations = {
    whileHover: {
      scale: 1.1,
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.15)',
    },
    whileTap: {
      scale: 0.9,
    },
  }

  const bannerAnimation = {
    initial: {
      y: '2rem',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { delay: 0.3 },
    },
    exit: {
      opacity: 0,
      y: '16rem',
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {visible && (
        <motion.div
          // tw="sticky bottom-0 shadow-lg w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white"
          tw="sticky bottom-0 shadow-lg w-full bg-black text-white"
          variants={bannerAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div tw="block sm:flex justify-center px-8 py-4">
            <div
              tw="self-center
"
            >
              <p tw="text-justify text-sm">
                This website uses cookies to enhance the user experience. By
                continuing to use this site or clicking on Accept, you are
                consenting to our use of cookies and our
                {' '}
                <Link
                  href={`${process.env.NEXT_PUBLIC_CLIENT_URL}info` + `/terms`}
                  passHref
                >
                  <a tw="font-bold underline">privacy policy</a>
                </Link>
                .
              </p>
            </div>

            <div tw="mt-3 sm:mt-0 sm:ml-8 text-center">
              <motion.button
                onClick={() => {
                  setConsent(true)
                }}
                whileHover={buttonAnimations.whileHover}
                whileTap={buttonAnimations.whileTap}
                style={{
                  backfaceVisibility: 'hidden',
                  transform: 'perspective(1px) translateZ(0)',
                }}
                tw="mx-auto font-bold text-gray-100 bg-secondary px-4 py-2 rounded-full focus:outline-none"
              >
                Accept
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CookieConsent
