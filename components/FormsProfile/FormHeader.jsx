import Link from 'next/link'
import { RiEdit2Line } from 'react-icons/ri'
import useUser from '../../lib/useUser'
import 'twin.macro'

const FormHeader = ({ children, index, profile }) => {
  const { user } = useUser({ oneCall: true })
  return (
    <div tw="px-10 pt-4 flex justify-between">
      <h1 tw="text-2xl text-primary-200 font-bold">{children}</h1>
      {profile && user.username === profile.username && index && (
        <Link href="/profile/settings">
          <a
            href="/profile/settings"
            tw="flex items-center border-2 border-accent text-accent cursor-pointer px-4 py-2 rounded-l-full rounded-r-full hover:font-bold transition duration-200 ease-in"
          >
            <RiEdit2Line tw="mr-1" />
            Update
          </a>
        </Link>
      )}
    </div>
  )
}

export default FormHeader
