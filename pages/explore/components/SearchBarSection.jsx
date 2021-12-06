/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
import { useState, useEffect } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import { BeatLoader } from 'react-spinners'
import { AnimatePresence, motion } from 'framer-motion'
import tw, { css } from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'
import { FaAngleRight } from 'react-icons/fa'
import resizeImage from '../../../utils/resizeImage'
import SecondaryButton from '../../../components/Buttons/SecondaryButton'
import { BiError } from 'react-icons/bi'
import SecondaryButtonForResults from '../../../components/Buttons/SecondaryButtonResultsCardFromSearch'

function SearchBarSection() {
  return (
    <>
      <div tw="w-full space-y-4">
        <SearchPage />
      </div>
    </>
  )
}

const SearchPage = () => {
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [results, setResults] = useState([])

  // console.log(results)

  return (
    <>
      <div tw="">
        <div>
          {/* Search Bar */}
          <SearchBar
            setLoading={setLoading}
            setResults={setResults}
            setError={setError}
          />
        </div>
        <div tw="mt-4">
          {/* Search Results */}
          {results.length === 0 ? null : (
            <ResultsContainer
              isLoading={isLoading}
              results={results}
              error={error}
            />
          )}
        </div>
      </div>
    </>
  )
}

const SearchBar = ({ setLoading, setResults, setError }) => {
  const [searchTerm, setSearchTerm] = useState('') // this holds the search term that use effect watches

  useEffect(() => {
    if (searchTerm.length === 0) {
      setResults([])
      setLoading(false)
      setError(false)
    }
    if (searchTerm.length > 0) {
      setLoading(true)
      const delayDebounceFn = setTimeout(() => {
        fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/profile-search/?keyword=${searchTerm}`
        )
          .then((data) => data.json())
          .then((data) => {
            setResults(data.data.results)
            setLoading(false)
          })
          .catch((err) => {
            setError(true)
            setLoading(false)
          })
      }, 2500)

      return () => clearTimeout(delayDebounceFn)
    }
  }, [searchTerm])

  return (
    <div tw="text-gray-600 flex flex-row items-center">
      <input
        tw="bg-background-primary border border-gray-600 h-10 px-5 w-full pl-10 rounded-full focus:outline-none"
        type="search"
        autoComplete="off"
        name="search"
        placeholder="Find Someone"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* <RiSearchLine tw="text-gray-600 absolute mt-3 ml-4" /> */}
      <RiSearchLine tw="text-gray-600 absolute m-3" size={20} />
    </div>
  )
}

const ResultsContainer = ({ results, isLoading, error }) => {
  const [isFollower, setFollower] = useState(false)
  const resultsAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
    exit: (i) => ({
      opacity: 0,
      y: 50,
      transition: {
        delay: i * 0.3,
      },
    }),
  }
  const loaderAnimation = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      y: 50,
    },
  }
  if (error) {
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          tw="mx-auto text-center"
          variants={loaderAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Status loading={isLoading} error={error} topic="results" />
        </motion.div>
      </AnimatePresence>
    )
  }
  return (
    <AnimatePresence exitBeforeEnter>
      <div tw="bg-primary-800 px-4 py-8 shadow-lg rounded">
        {/* Results */}
        {isLoading && (
          <motion.div
            tw="mx-auto text-center"
            variants={loaderAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <BeatLoader color="#eb008d" size={15} />
            <div tw="text-white text-center">Loading results...</div>
          </motion.div>
        )}
        {!isLoading && results.length === 0 && (
          <div tw="text-center text-white">Empty search.</div>
        )}
        {!isLoading && results.length > 0 && (
          <ul>
            {results.map((result, i) => (
              <motion.li
                key={i}
                variants={resultsAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={i}
                tw="bg-transparent rounded mb-2"
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, .17)',
                }}
              >
                <SearchResult
                  result={result}
                  isFollower={isFollower}
                  setFollower={setFollower}
                />
              </motion.li>
            ))}
          </ul>
        )}
        {!isLoading && (
          <motion.div
            tw="mt-4"
            variants={loaderAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div tw="text-center text-white  text-center">
              <span tw="font-bold">{`${results.length}`}</span> results
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  )
}

const SearchResult = ({ result, isFollower, setFollower }) => {
  const headerStyle = css`
    ${tw`pl-4`}
    ${!(result.first_name || result.last_name) ? tw`mt-3` : tw`mt-1`}
  `
  return (
    <Link href={`/${result.username}`} passHref>
      <div
        tw="flex justify-between bg-primary-800 hover:bg-primary-600 rounded hover:cursor-pointer hover:underline"
        type="link"
        href={`/${result.username}`}
      >
        {/* Left */}
        <div tw="flex content-center p-3">
          {/* image / avatar */}
          <div tw="h-12 w-12 overflow-hidden rounded-full">
            <img
              key={result.profile_picture || '/img/avatar_placeholder.png'}
              alt={`${result.username} avatar`}
              src={
                result.profile_picture
                  ? resizeImage(result.profile_picture, [50, 50])
                  : '/img/avatar_placeholder.png'
              }
              tw="object-cover h-full w-full"
            />
          </div>
          {/* User data */}
          <div css={headerStyle}>
            <div tw="text-sm font-bold text-white hover:cursor-pointer hover:underline">
              <a>@{result.username}</a>
            </div>
            <div tw="text-white">
              {result.first_name} {result.last_name}
            </div>
          </div>
        </div>
        {/* Right */}
        <div tw="self-center mr-3">
          <SecondaryButtonForResults type="link" href={`/${result.username}`}>
            <div tw="flex flex-row space-x-2 items-center">
              <FaAngleRight tw="" size={16} />
            </div>
          </SecondaryButtonForResults>
        </div>
      </div>
    </Link>
  )
}

const Status = ({ loading, error, topic }) => {
  if (error) {
    return (
      <div tw="w-full flex py-12">
        <span tw="w-full text-red-400 text-sm sm:text-xl font-extrabold py-4 rounded-lg border border-red-400 text-center bg-primary-800">
          <div tw="flex justify-center text-4xl">
            <BiError />
          </div>
          An error has ocurred while fetching your {topic}.
          <span tw="block text-center text-base font-light text-primary-200">
            Please reload the page and try again. If the error persists,{' '}
            <span tw="underline font-normal">
              <Link href="/info/contact">contact us</Link>
            </span>
            .
          </span>
        </span>
      </div>
    )
  }
  if (loading) {
    return (
      <div tw="w-full py-12 text-primary-200">
        <div tw="flex justify-center">
          <BeatLoader color="var(--color-accent)" />
        </div>
        <div tw="w-full text-center">
          <span tw="text-primary-200 font-bold">Loading links...</span>
        </div>
      </div>
    )
  }
  return null
}

export default SearchBarSection
