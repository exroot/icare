import Head from "next/head";
import useUser from "../../lib/useUser";
import Wrapper from "../../components/Wrapper";
import PageLoader from "../../components/PageLoader";
import ShoutoutForm from "../../components/ShoutoutForm";
import "twin.macro";

const Shoutout = () => {
  const { user, isLoading } = useUser({ redirectTo: "/login" });

  if (isLoading || user.is_logged_in === false) {
    return (
      <>
        <Head>
          <title>iCare</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLoader />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>iCare | Shoutout</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        {/* <div tw="max-w-6xl mx-auto px-4 py-4 sm:px-6 md:px-8">
          <h1 tw="text-4xl font-semibold text-text-dark">Profile</h1>
          <div tw="border border-gray-600 rounded-lg" />
        </div>
        <div tw="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div tw="py-4">
            <div tw="text-text-light">User data:</div>
            <ul tw="text-text-light">
              <li>
                ID: <span tw="font-bold text-text-dark">{user.user_id}</span>
              </li>
              <li>
                username:{" "}
                <span tw="font-bold text-text-dark">{user.username}</span>
              </li>
              <li>
                email: <span tw="font-bold text-text-dark">{user.email}</span>
              </li>
            </ul>
          </div>
        </div> */}
        {/* Shoutout Form */}
        <div tw="max-w-6xl mx-auto px-4 py-4 sm:px-6 md:px-8">
          <h1 tw="text-4xl font-semibold text-text-dark">Shoutout Form</h1>
          <div tw="border border-gray-600 rounded-lg" />
          <ShoutoutForm />
        </div>
      </Wrapper>
    </>
  );
};

export default Shoutout;
