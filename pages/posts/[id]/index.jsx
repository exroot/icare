import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../../components/Layout";
import Navbar from "../../../components/Navbar/NavbarAlt";
import NotFoundPage from "../../../components/404";
import axios from "axios";
import tw, { css } from "twin.macro";
import { BsArrowLeft } from "react-icons/bs";
import Linkit from "../../../components/Linkit";
import Linkify from "react-linkify";
import axiosClient from "../../../lib/client";
import useUser from "../../../lib/useUser";
import { ENDPOINTS } from "../../../utils/api";
import { BeatLoader } from "react-spinners";
import useComments from "../../../lib/useComments";
import redirectTo from "../../../utils/redirectTo";
import ReactHashtag from "react-hashtag";
import { useRouter } from "next/router";

const Comment = ({ comment, setTextareaValue, inputCommentRef, setFocus }) => {
  const handleHashtag = (hashtag) => {
    const [_, tag] = hashtag.split("#");
    return !isNaN(tag);
  };

  return (
    <div
      id={comment.id}
      tw="w-auto text-lg text-primary-400 bg-primary-800 focus:border-blue-400 px-4 py-2 rounded"
      onDoubleClick={() => {
        setTextareaValue((prevText) => {
          if (!prevText.length) {
            return `#${comment.id}\n`;
          }
          return `${prevText}#${comment.id}\n`;
        });

        inputCommentRef.current.focus();
      }}
    >
      <div tw="">
        <span tw="font-light text-xs">#{comment.id}</span>
        <h3 tw="font-bold text-primary-200">{comment.user.profile.username}</h3>
      </div>

      <p>
        <ReactHashtag
          renderHashtag={(hashtagValue) => {
            const isQuote = handleHashtag(hashtagValue);
            if (isQuote) {
              return (
                <a
                  tw="text-accent"
                  href={`${hashtagValue}`}
                  onClick={() => setFocus(hashtagValue.split("#")[1])}
                >
                  {hashtagValue}
                </a>
              );
            }
            return (
              <Link href={`/feed?query=${hashtagValue.split("#")[1]}`} passhref>
                <a tw="text-accent cursor-pointer">{hashtagValue}</a>
              </Link>
            );
          }}
        >
          {comment.body}
        </ReactHashtag>
      </p>
    </div>
  );
};

const Post = ({ data }) => {
  const { pathname, query } = useRouter();
  const [textareaValue, setTextareaValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [idFocused, setIdFocused] = useState(null);
  const [focusedHistory, setFocusedHistory] = useState([]);
  const {
    comments,
    isLoadingMore,
    errorComments,
    mutateComments,
  } = useComments({
    postId: data.id,
    initialData: data.comments,
  });

  useEffect(() => {
    if (idFocused && focusedHistory.length > 0) {
      const prevElementFocused = document.getElementById(
        focusedHistory[focusedHistory.length - 1]
      );
      prevElementFocused.style = "border: none";

      setFocusedHistory((prevHistory) => {
        return [...prevHistory, idFocused];
      });

      const newElementFocused = document.getElementById(idFocused);
      newElementFocused.style = "border: 2px solid var(--color-accent)";
      return;
    } else if (idFocused) {
      setFocusedHistory([idFocused]);
      const newElementFocused = document.getElementById(idFocused);
      newElementFocused.style = "border: 2px solid var(--color-accent)";
    }
  }, [idFocused]);

  const inputCommentRef = useRef(null);
  const { user } = useUser();
  const sendComment = async (comment) => {
    setLoading(true);
    try {
      const body = {
        body: comment,
        post_id: data.id.toString(),
        user_id: user.id.toString(),
      };
      await mutateComments((comments) => {
        let newComment = { ...body, user };
        return [...comments, newComment];
      }, false);
      const res = await axiosClient({
        url: ENDPOINTS.comments,
        body,
        method: "POST",
      });
      setTextareaValue("");
      inputCommentRef.current.focus();
      setTimeout(() => {
        redirectTo(`#${res.data.data.id}`);
      }, 1000);
    } catch (err) {
      console.log("ERROR: ", err);
    } finally {
      setLoading(false);
    }
  };

  if (data.notFound) {
    //  Show profile doesnt exist
    return (
      <>
        <Head>iCare - Post no encontrado</Head>
        <NotFoundPage />
      </>
    );
  }
  return (
    <>
      <Head>
        <title>iCare -{data.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div tw="w-full flex justify-between items-center sticky top-0 backdrop-blur-md bg-transparent/5 z-50">
          <h1 tw="text-primary-200 text-3xl font-extrabold flex space-x-2">
            <Link href="/feed" passhref>
              <a>
                <BsArrowLeft tw="mt-2" />
              </a>
            </Link>

            <a href="#body" tw="flex">
              {/* <span tw="font-light">#{data.id}</span>  */}

              {`${data.title}`}
            </a>
          </h1>
          <Navbar />
        </div>
        <div tw="w-full border-b border-primary-700 mb-4" />
        <div tw="block xl:flex xl:justify-between">
          <p tw="text-primary-400 text-xl py-8 xl:pr-8" id="body">
            {data.body}
          </p>
          <div tw="bg-primary-800 w-full px-6 py-4 text-center rounded-lg max-w-sm">
            {/* head */}
            <div tw="mx-auto">
              <img
                tw="h-32 w-32 rounded-full mx-auto"
                src={data?.user?.profile?.image_avatar}
              />
              <span tw="block text-xl text-primary-200 font-bold">
                <Link href={`/${data.user.profile.username}`}>
                  {data.user.profile.first_name +
                    " " +
                    data.user.profile.last_name}
                </Link>
              </span>
              <span tw="text-primary-500">
                <Link href={`/${data.user.profile.username}`}>
                  {`@${data.user.profile.username}`}
                </Link>
              </span>
            </div>
            <p tw="text-primary-500 text-justify mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
              quibusdam consequatur delectus reiciendis labore exercitationem.
            </p>
          </div>
        </div>

        <div tw="mb-8 mt-8">
          <textarea
            name="body"
            rows="5"
            tw="w-full bg-primary-700 border-none outline-none text-primary-200 px-4 py-2 rounded mt-2"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
            ref={inputCommentRef}
          ></textarea>
          <button
            tw="bg-accent hover:bg-accent-hover px-4 py-4 rounded text-lg text-primary-200 block ml-auto font-bold uppercase"
            onClick={() => sendComment(textareaValue)}
          >
            {loading ? (
              <span tw="flex w-28 justify-center">
                <BeatLoader color="white" />
              </span>
            ) : (
              "Comentar"
            )}
          </button>
        </div>

        {/* {console.log("data: ", data)} */}
        <div tw="space-y-2 w-auto">
          {!comments && !isLoadingMore && (
            <div tw="text-primary-200 ">No hay comentarios</div>
          )}
          {comments &&
            comments.map((comment) => (
              <Comment
                key={comment.id}
                comment={comment}
                setTextareaValue={setTextareaValue}
                inputCommentRef={inputCommentRef}
                setFocus={setIdFocused}
              />
            ))}
        </div>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const {
    params: { id },
    req: {
      headers: { referer },
    },
  } = context;
  try {
    const { data: postResponse } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const url = `${process.env.NEXT_PUBLIC_API_URL}/comments?postId=${postResponse.data.id}`;
    const { data: commentsResponse } = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("URL COMMENT: ", url);
    console.log("COMMENTS: ", commentsResponse);
    let postWithComments = {
      ...postResponse.data,
      comments: commentsResponse ? commentsResponse : [],
    };
    return {
      props: { data: postWithComments, referrer: referer || null },
    };
  } catch (err) {
    console.log("ERR: ", err);
    return { props: { data: { notFound: true } } };
  }
}

export default Post;
