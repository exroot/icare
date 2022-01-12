import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import tw, { css } from "twin.macro";
import { AnimatePresence, motion } from "framer-motion";
import { BeatLoader } from "react-spinners";
import { RiTeamLine, RiUserHeartLine } from "react-icons/ri";
import useUser from "../../lib/useUser";
import PageLoader from "../../components/PageLoader";
import axios from "../../lib/client";
import resizeImage from "../../utils/resizeImage";
import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar/NavbarAlt";

const Following = () => {
  const { user, isLoading, error } = useUser({ redirectTo: "/login" });
  const [following, setFollowing] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("following");
  useEffect(() => {
    let isMounted = true;
    if (!!user) {
      (async () => {
        setLoading(true);
        try {
          const { data } = await axios({
            url: `/profiles/${user.profile.username}/following`,
            method: "GET",
          });
          console.log("data: ", data.data);
          if (isMounted) {
            setFollowing(data.data.following_list);
            setFollowers(data.data.followers_list);
          }
        } catch (err) {
          console.error(err);
        } finally {
          if (isMounted) {
            setLoading(false);
          }
        }
      })();
    }
    return () => {
      isMounted = false;
    };
  }, [user]);

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
        <title>iCare - Círculo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Siguiendo</h1>
          <Navbar />
        </div>
        <div tw="w-full border-b border-primary-700 mb-4" />
        <div tw="md:flex md:justify-between">
          <div tw="w-full">
            <div tw="max-w-4xl mx-auto sm:px-6 md:px-8">
              <FollowingList
                following={tab === "followers" ? followers : following}
                loading={loading}
                setLoading={setLoading}
                tab={tab}
                setTab={setTab}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

function FollowingList({ following, loading, tab, setTab }) {
  const tabSelected = css`
    ${tw`px-4 py-6 block hover:text-accent focus:outline-none text-accent border-b-2 font-medium border-accent transition duration-300 ease-in`}
  `;
  const tabNormal = css`
    ${tw`text-gray-600 py-4 px-6 block border-b-2 border-transparent hover:border-gray-600 hover:text-white focus:outline-none transition duration-300 ease-in`}
  `;
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
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <div tw="bg-primary-800 px-4 py-8 shadow-lg rounded">
        <div tw="px-4 pb-4 flex justify-between w-full">
          <nav tw="grid grid-cols-2 gap-4 w-full text-base">
            <button
              type="button"
              onClick={() => setTab("following")}
              css={tab === "following" ? tabSelected : tabNormal}
            >
              <span tw="flex justify-center">
                <RiUserHeartLine tw="self-center mr-2" size={16} />
                Siguiendo
              </span>
            </button>
            <button
              type="button"
              onClick={() => setTab("followers")}
              css={tab === "followers" ? tabSelected : tabNormal}
            >
              <span tw="flex justify-center">
                <RiTeamLine tw="self-center mr-2" size={16} />
                Seguidores
              </span>
            </button>
          </nav>
        </div>
        {loading && (
          <motion.div
            tw="mx-auto text-center mt-2"
            variants={loaderAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <BeatLoader color="var(--color-accent)" size={15} />
            <div tw="text-text-dark text-center">Cargando...</div>
          </motion.div>
        )}
        {!loading && <UsersList users={following} />}
      </div>
    </AnimatePresence>
  );
}

function UsersList({ users }) {
  console.log("users: ", users);
  if (!users || users.length < 1) {
    return null;
  }
  const listUsers = users.map((user, i) => <UserCard key={i} user={user} />);
  return (
    <>
      <ul tw="px-4 rounded">{listUsers}</ul>
    </>
  );
}

function UserCard({ user }) {
  const hasNames = !!user.profile.first_name || !!user.profile.last_name;
  const withName = css`
    ${tw`font-bold text-lg leading-tight text-white hover:cursor-pointer hover:underline`}
  `;
  const withoutName = css`
    ${tw`
  mt-3 font-bold text-lg leading-tight text-white hover:cursor-pointer hover:underline
  `}
  `;

  return (
    <>
      <Link
        href={`${process.env.NEXT_PUBLIC_CLIENT_URL + user.profile.username}`}
      >
        <div tw="flex flex-row justify-between cursor-pointer w-full border-accent rounded-t py-4 transition duration-300 ease-in">
          {/* Header */}
          <div tw="pl-2 pr-4 py-2">
            <div tw="flex">
              <div tw="">
                <img
                  width={50}
                  height={50}
                  tw="rounded-full w-12"
                  key={
                    user.profile.image_avatar || "/img/avatar_placeholder.png"
                  }
                  src={
                    user.profile.image_avatar
                      ? user.profile.image_avatar
                      : "/img/avatar_placeholder.png"
                  }
                  alt="avatar picture"
                  quality={75}
                  layout={"fixed"}
                />
              </div>
              <div tw="flex-grow pl-4">
                <div css={hasNames ? withName : withoutName}>
                  <Link href={`/${user.profile.username}`} passHref>
                    <a>{user.profile.username}</a>
                  </Link>
                </div>
                {hasNames && (
                  <div tw="text-sm font-bold text-primary-400">
                    {user.profile.first_name + " " + user.profile.last_name}
                  </div>
                )}
                {/* <div tw="mt-1 font-light text-text-dark">{user.bio}</div> */}
              </div>
            </div>
            {/* <div tw="pl-16 font-light">hi there this is my bio</div> */}
          </div>
          {/* <FollowButton /> */}
        </div>
      </Link>
    </>
  );
}

function FollowButton() {
  return (
    <div
      tw="h-10 w-auto px-4 py-2 font-bold uppercase tracking-wide rounded-full text-accent bg-transparent border border-accent hover:bg-accent-hover-outline duration-200 ease-in-out
    focus:outline-none outline-none"
      // onClick={}
    >
      unfollow
    </div>
  );
}

export default Following;
