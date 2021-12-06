import Link from "next/link";
import { useRouter } from "next/router";
import tw, { css } from "twin.macro";

const MockMenu = () => {
  const { pathname } = useRouter();
  const selectedStyle = css`
    ${tw`cursor-pointer bg-indigo-50 border-indigo-500 text-indigo-700 hover:bg-indigo-50 hover:text-indigo-700 border-l-4 px-3 py-2 flex items-center text-sm font-medium`}
  `;
  const defaultStyle = css`
    ${tw`cursor-pointer border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900  mt-1 border-l-4 px-3 py-2 flex items-center text-sm font-medium`}
  `;

  const iconStyleSelected = css`
    ${tw`text-indigo-500 hover:text-indigo-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
  `;
  const iconStyleDefault = css`
    ${tw`text-gray-400 hover:text-gray-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6`}
  `;
  return (
    <>
      <aside tw="py-6 lg:col-span-3">
        <nav>
          <Link href="/testing/NewLayout/settings" passHref>
            <a
              css={
                pathname === "/testing/NewLayout/settings"
                  ? selectedStyle
                  : defaultStyle
              }
              aria-current="page"
            >
              <svg
                css={
                  pathname === "/testing/NewLayout/settings"
                    ? iconStyleSelected
                    : iconStyleDefault
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span tw="truncate">Profile</span>
            </a>
          </Link>
          <Link href="/testing/NewLayout/settings/account" passHref>
            <a
              css={
                pathname === "/testing/NewLayout/settings/account"
                  ? selectedStyle
                  : defaultStyle
              }
            >
              <svg
                css={
                  pathname === "/testing/NewLayout/settings/account"
                    ? iconStyleSelected
                    : iconStyleDefault
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span tw="truncate">Account</span>
            </a>
          </Link>
          <Link href="/testing/NewLayout/settings/password" passHref>
            <a
              css={
                pathname === "/testing/NewLayout/settings/password"
                  ? selectedStyle
                  : defaultStyle
              }
            >
              <svg
                css={
                  pathname === "/testing/NewLayout/settings/password"
                    ? iconStyleSelected
                    : iconStyleDefault
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                />
              </svg>
              <span tw="truncate">Password</span>
            </a>
          </Link>
          <Link href="/testing/NewLayout/settings/notifications" passHref>
            <a
              css={
                pathname === "/testing/NewLayout/settings/notifications"
                  ? selectedStyle
                  : defaultStyle
              }
            >
              <svg
                css={
                  pathname === "/testing/NewLayout/settings/notifications"
                    ? iconStyleSelected
                    : iconStyleDefault
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span tw="truncate">Notifications</span>
            </a>
          </Link>
          <Link href="/testing/NewLayout/settings/billing" passHref>
            <a
              css={
                pathname === "/testing/NewLayout/settings/billing"
                  ? selectedStyle
                  : defaultStyle
              }
            >
              <svg
                css={
                  pathname === "/testing/NewLayout/settings/billing"
                    ? iconStyleSelected
                    : iconStyleDefault
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span tw="truncate">Billing</span>
            </a>
          </Link>
          <Link href="/testing/NewLayout/settings/integrations" passHref>
            <a
              css={
                pathname === "/testing/NewLayout/settings/integrations"
                  ? selectedStyle
                  : defaultStyle
              }
            >
              <svg
                css={
                  pathname === "/testing/NewLayout/settings/integrations"
                    ? iconStyleSelected
                    : iconStyleDefault
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              <span tw="truncate">Integrations</span>
            </a>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default MockMenu;
