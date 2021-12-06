import { useRouter } from 'next/router'
import SidebarItem from './SidebarItem'
import { FaBullhorn } from 'react-icons/fa'
import PrimaryButton from '../Buttons/PrimaryButton'
import {
  RiDashboardLine,
  RiLinksLine,
  RiUserSettingsLine,
  RiSettings3Line,
  RiQuestionLine,
  RiDashboardFill,
  RiLinksFill,
  RiUserSettingsFill,
  RiFeedbackLine,
  RiSearchLine,
} from 'react-icons/ri'
import { FiUsers } from 'react-icons/fi'
import { BiUserPin } from 'react-icons/bi'
import useUser from '../../lib/useUser'

import 'twin.macro'

const SidebarAuthenticated = ({ setShowModal, router }) => {
  return (
    <nav tw="flex-1 pr-2 pl-2 pt-4 pb-6 bg-background-primary">
      <div className="app-area">
        <SidebarItem href={'/feed'} pathname={router.pathname}>
          {router.pathname === '/feed' ? (
            <RiDashboardFill tw="mt-1 mr-2 w-4 text-lg" />
          ) : (
            <RiDashboardLine tw="mt-1 mr-2 w-4 text-lg" />
          )}
          Feed
        </SidebarItem>

        <SidebarItem href={'/links'} pathname={router.pathname}>
          {router.pathname === '/links' ? (
            <RiLinksFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiLinksLine tw="mt-1 mr-2 text-lg" />
          )}
          Update links
        </SidebarItem>

        <SidebarItem href={'/profile'} pathname={router.pathname}>
          {router.pathname === '/profile' ? (
            <RiUserSettingsFill tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiUserSettingsLine tw="mt-1 mr-2 text-lg" />
          )}
          Update profile
        </SidebarItem>
        {/* Search */}
        <SidebarItem href={'/search'} pathname={router.pathname}>
          {router.pathname === '/search' ? (
            <RiSearchLine tw="mt-1 mr-2 text-lg" />
          ) : (
            <RiSearchLine tw="mt-1 mr-2 text-lg" />
          )}
          Search
        </SidebarItem>
        {/* Following */}
        <SidebarItem href={'/following'} pathname={router.pathname}>
          {router.pathname === '/following' ? (
            <BiUserPin tw="mt-1 mr-2 text-lg" />
          ) : (
            <BiUserPin tw="mt-1 mr-2 text-lg" />
          )}
          Following
        </SidebarItem>
        {/* 
        <SidebarItem href={"/"} pathname={router.pathname} tw="">
          <FiUsers tw="mt-1 mr-2 text-lg" />
          My Circle
        </SidebarItem> */}

        {/* ShoutoutButton */}
        <div tw="mt-4">
          <SidebarItem href="#">
            <PrimaryButton onClick={() => setShowModal(true)} tw="w-full">
              <div tw="flex justify-center">
                <FaBullhorn size={18} tw="mr-1" />
                Shoutout
              </div>
            </PrimaryButton>
          </SidebarItem>
        </div>
      </div>

      <div
        className="help-area"
        tw="-ml-4 bg-background-primary pl-4 pr-2 pt-4"
      >
        <SidebarItem
          href={'/profile/settings'}
          pathname={router.pathname}
          tw=""
        >
          <RiSettings3Line tw="mt-1 mr-2 text-lg" />
          Settings
        </SidebarItem>

        <SidebarItem href={'/info/help'} pathname={router.pathname} tw="">
          <RiQuestionLine tw="mt-1 mr-2 text-lg" />
          Help
        </SidebarItem>

        <SidebarItem href={'/info/contact'} pathname={router.pathname} tw="">
          <RiFeedbackLine tw="mt-1 mr-2 text-lg" />
          Send Feedback
        </SidebarItem>
      </div>
    </nav>
  )
}

const SidebarUnauthenticated = ({ router }) => {
  return (
    <nav tw="flex-1 pr-2 pl-2 pt-4 pb-6 bg-background-primary">
      <div className="app-area">
        <SidebarItem href={'/shoutouts'}>
          <div tw="flex justify-center">
            <FaBullhorn tw="mt-1 mr-2 text-lg" />
            Shoutouts
          </div>
        </SidebarItem>
      </div>
      <div
        className="help-area"
        tw="-ml-4 bg-background-primary pl-4 pr-2 pt-4"
      >
        <SidebarItem href={'/info/help'} pathname={router.pathname} tw="">
          <RiQuestionLine tw="mt-1 mr-2 text-lg" />
          Help
        </SidebarItem>

        <SidebarItem href={'/info/contact'} pathname={router.pathname} tw="">
          <RiFeedbackLine tw="mt-1 mr-2 text-lg" />
          Send Feedback
        </SidebarItem>
      </div>
    </nav>
  )
}

const Sidebar = ({ setShowModal }) => {
  const { user } = useUser()
  const router = useRouter()
  return (
    <div tw="hidden md:flex md:flex-shrink-0 md:w-56 lg:w-64">
      <div tw="flex flex-col w-full">
        {/* <div tw="flex items-center h-16 pb-2 flex-shrink-0 bg-gray-900">
                    Import some logo
                </div> */}
        <div tw="flex items-center h-16 pb-2 bg-background-primary w-full">
          <h1
            tw="text-secondary w-full font-bold text-5xl text-center"
            style={{
              fontFamily: 'basiclazer',
            }}
          >
            Shoutmo
          </h1>
        </div>
        <div
          tw="h-0 flex-1 flex flex-col overflow-y-auto"
          style={{
            scrollbarWidth: 'thin',
          }}
        >
          {/* Sidebar component */}
          {!!user && user.is_logged_in ? (
            <SidebarAuthenticated setShowModal={setShowModal} router={router} />
          ) : (
            <SidebarUnauthenticated router={router} />
          )}

          {/* sidebar footer */}
          <div tw="text-sm text-gray-600 w-full pl-6 pb-4 pt-2 font-semibold bg-background-primary">
            <p>© 2020 SHOUTMO</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
