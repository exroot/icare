/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'
import { ButtonCTA as SubmitButton } from '../Buttons/ButtonCTA'
import PlatformIcon from '../PlatformIcon'
import axios from '../../lib/client'
import Modal from '../Modals/Modal'
import 'twin.macro'

function AddAccountButton({
  socialLinks,
  connected,
  setConnectedPlatforms,
  title,
  placeholder,
  baseURL,
  instructions,
}) {
  const { addToast } = useToasts()
  const [showModal, setShowModal] = useState(false)
  const [identifier, setIdentifier] = useState('')
  const [loading, setLoading] = useState(false)
  const [linkId, setLinkId] = useState(null)
  const onIdentifierChange = (e) => setIdentifier(e.target.value)

  const saveLink = async () => {
    setLoading(true)
    const body = {
      platform_name: title,
      user_username: identifier,
      user_url: baseURL + identifier,
    }
    try {
      await axios({
        url: connected ? `/socialmedia-links/${linkId}` : '/socialmedia-links/',
        method: connected ? 'PATCH' : 'POST',
        body,
      })
      if (!connected) {
        setConnectedPlatforms((prev) => [...prev, title])
      }
      addToast(
        `${title} link ${connected ? 'updated' : 'saved'} sucessfully.`,
        {
          appearance: 'success',
          autoDismiss: true,
        }
      )
      setShowModal(false)
    } catch (err) {
      addToast(`Server error, try again in a few seconds.`, {
        appearance: 'error',
        autoDismiss: true,
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const link = socialLinks.find(
      (userLink) => userLink.platform_name === title
    )
    if (link) {
      setIdentifier(link.user_username)
      setLinkId(link.id)
    }
  }, [socialLinks])

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <div tw="w-full mb-4">
          <h1 tw="text-primary-200 flex justify-center text-lg mb-1 font-extrabold">
            <PlatformIcon icon={title} />
            <span tw="ml-2">{`${title} link`}</span>
          </h1>
          <p tw="text-primary-400 text-sm mb-4">{instructions}</p>
          <div tw="w-full">
            <div tw="flex justify-center">
              <span tw="text-sm border border-primary-700 bg-primary-800 rounded-l px-4 py-2 text-primary-200">
                {baseURL}
              </span>
              <input
                onChange={onIdentifierChange}
                value={identifier}
                name="user_url"
                tw="border truncate border-primary-700 bg-primary-700 rounded-r px-4 py-2 w-full text-primary-200 focus:outline-none hover:border-accent transition duration-300 ease-in"
                type="text"
                placeholder={placeholder}
                autoCorrect="false"
              />
            </div>
          </div>
        </div>
        <div tw="w-full">
          <SubmitButton
            type="button"
            isSubmitting={loading}
            onClick={saveLink}
            centered
            fullWidth
            uppercased={false}
          >
            {`${connected ? 'Update' : 'Save'} Link`}
          </SubmitButton>
        </div>
      </Modal>
      {/* Link button */}
      <div tw="mb-1 rounded-lg">
        <LinkButton
          title={title}
          connected={connected}
          setShowModal={setShowModal}
        />
      </div>
    </>
  )
}

function AddAccounts({ linksAvailable, user }) {
  const [connectedPlatforms, setConnectedPlatforms] = useState([])
  const [socialLinks, setSocialLinks] = useState([])
  const arrayOfNames = linksAvailable.map(
    (socialPlatform) => socialPlatform.name
  )
  let URLs = {}
  linksAvailable.forEach((socialPlatform) => {
    URLs = { ...URLs, [`${socialPlatform.name}`]: socialPlatform.base_url }
  })

  // Profile links
  useEffect(() => {
    let isMounted = true
    ;(async () => {
      const { data } = await axios({
        url: `/profiles/${user.username}`,
        method: 'GET',
        headers: {},
      })
      if (isMounted) {
        setConnectedPlatforms(
          data.data.profile.social_links.map((link) => link.platform_name)
        )
        setSocialLinks(data.data.profile.social_links)
      }
    })()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div tw="mb-2">
      {/* <SearchBar linksAvailable={linksAvailable} arrayOfNames={arrayOfNames} /> */}
      {arrayOfNames.map((name) => (
        <AddAccountButton
          key={name}
          socialLinks={socialLinks}
          connected={connectedPlatforms.includes(name)}
          setConnectedPlatforms={setConnectedPlatforms}
          site={name.toLowerCase()}
          title={name}
          placeholder={name === 'YouTube' ? 'channel ID' : 'username'}
          baseURL={URLs[name]}
          instructions={`You can add your ${name} username here so more people will be capable of find you faster and easier.`}
        />
      ))}
    </div>
  )
}

const LinkButton = ({ title, connected, setShowModal }) => (
  <button
    type="button"
    tw="py-3 my-3 px-4 text-white bg-indigo-700 hover:bg-indigo-600 
  font-semibold hover:shadow rounded flex flex-row w-full justify-between
  transition duration-200 ease-in-out transform"
    onClick={() => setShowModal(true)}
  >
    <div tw="items-center capitalize">
      <PlatformIcon icon={title} />
    </div>
    <div tw="items-center capitalize">
      Connect to <span tw="capitalize">{title || 'sitename'}</span>
    </div>
    <div tw="">
      {connected ? <FaCheckCircle size={24} /> : <FaRegCircle size={24} />}
    </div>
  </button>
)

export default AddAccounts
