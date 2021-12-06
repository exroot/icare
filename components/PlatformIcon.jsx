import {
  FaTwitter,
  FaTwitch,
  FaYoutube,
  FaSoundcloud,
  FaSquare,
  FaPatreon,
  FaVk,
  FaVimeo,
  FaMedium,
  FaLinkedin,
  FaSpotify,
  FaFacebook,
  FaReddit,
  FaWhatsapp,
  FaTelegram,
} from 'react-icons/fa'
import Image from 'next/image'
import { SiStitcher, SiPeriscope, SiUdemy } from 'react-icons/si'
import tw, { css } from 'twin.macro'

const Placeholder = () => {
  return (
    <Image
      width={20}
      height={20}
      src="/img/icons/icon_placeholder.png"
      alt="platform icon placeholder"
    />
  )
}
const PlatformIcon = ({ icon, size = 24, centered }) => {
  const style = centered
    ? css`
        ${tw`mx-auto`}
      `
    : null
  if (icon === 'Telegram') {
    return <FaTelegram size={size} css={style} />
  } else if (icon === 'WhatsApp') {
    return <FaWhatsapp size={size} css={style} />
  } else if (icon === 'Reddit') {
    return <FaReddit size={size} css={style} />
  } else if (icon === 'Facebook') {
    return <FaFacebook size={size} css={style} />
  } else if (icon === 'Twitch') {
    return <FaTwitch size={size} css={style} />
  } else if (icon === 'YouTube') {
    return <FaYoutube size={size} css={style} />
  } else if (icon === 'Twitter') {
    return <FaTwitter size={size} css={style} />
  } else if (icon === 'SoundCloud') {
    return <FaSoundcloud tw="ml-1" size={size} css={style} />
  } else if (icon === 'Udemy') {
    return <SiUdemy size={size} css={style} />
  } else if (icon === 'Vimeo') {
    return <FaVimeo size={size} css={style} />
  } else if (icon === 'VK') {
    return <FaVk size={size} css={style} />
  } else if (icon === 'Brand New Tube') {
    return <Placeholder />
  } else if (icon === 'LinkedIn') {
    return <FaLinkedin size={size} css={style} />
  } else if (icon === 'Parler') {
    return <Placeholder />
  } else if (icon === 'Rumble') {
    return <Placeholder />
  } else if (icon === 'Medium') {
    return <FaMedium size={size} css={style} />
  } else if (icon === 'Periscope') {
    return <SiPeriscope size={size} css={style} />
  } else if (icon === 'iTunes') {
    return <Placeholder />
  } else if (icon === 'Bitchute') {
    return <Placeholder />
  } else if (icon === 'Patreon') {
    return <FaPatreon size={24} />
  } else if (icon === 'Gab') {
    return <Placeholder />
  } else if (icon === 'PayPal') {
    return <FaSquare size={24} />
  } else if (icon === 'Stitcher') {
    return <SiStitcher size={24} />
  } else if (icon === 'Dlive') {
    return <Placeholder />
  } else if (icon === 'amazon') {
    return <FaSquare size={24} />
  } else if (icon === 'spotify') {
    return <FaSpotify size={24} />
  } else if (icon === 'Locals') {
    return <Placeholder />
  } else {
    return <Placeholder />
  }
}

export default PlatformIcon
