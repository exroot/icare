/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import useUser from "../../lib/useUser";
import PageLoader from "../../components/PageLoader";
import Navbar from "../../components/Navbar/NavbarAlt";
import TrendingTags from "./components/TagsSection";
import SuggestedUsers from "./components/SuggestedUsers";
import SearchBarSection from "./components/SearchBarSection";

import "twin.macro";

const ExplorePage = () => {
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
        <title>iCare - Explorar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div tw="flex justify-between items-center">
          <h1 tw="text-primary-200 text-3xl font-extrabold">Explorar</h1>
          <Navbar />
        </div>
        <div tw="w-full border-b border-primary-700 mb-4" />
        <div tw="md:flex md:justify-between">
          <div tw="w-full">
            <Explorepagelayout />
          </div>
        </div>
      </Layout>
    </>
  );
};

function Explorepagelayout() {
  return (
    <>
      <div tw="mt-8 w-full">
        <div tw="mt-4 w-full space-y-12">
          <div tw="mt-4 w-full space-y-4">
            <SectionHeader title="Buscar usuarios" />
            <SearchBarSection />
          </div>
          {/* <div tw="mt-4 w-full space-y-4">
            <SectionHeader title="Trending Tags" />
            <TrendingTags />
          </div> */}
          <div tw="mt-4 w-full space-y-4">
            <SectionHeader title="Usuarios recomendados" />
            <SuggestedUsers />
          </div>
        </div>
      </div>
    </>
  );
}

function SectionHeader({ title }) {
  return (
    <h1 tw="mb-4 w-full | text-2xl font-bold text-white">{title || "title"}</h1>
  );
}

export default ExplorePage;
