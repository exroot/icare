import Head from "next/head";
import useUser from "../../lib/useUser";
import Wrapper from "../../components/Wrapper";
import PageLoader from "../../components/PageLoader";
import React, { useState, useEffect } from "react";
import SearchResultCard from "../../components/Search/SearchResultCard";
import "twin.macro";
import SearchPage from "../notLoggedInSearchPage";

const Search = () => {
  return (
    <>
      <Head>
        <title>Shoutmo | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <SearchPageContent />
        {/* add infinite scroll functionality to show more  */}

        {/* <div tw="max-w-6xl mx-auto px-4 py-4 sm:px-6 md:px-8">
          <h1 tw="text-4xl font-semibold text-text-dark">Search</h1>
          <div tw="border border-gray-600 rounded-lg" />
        </div> */}
        {/* <div tw="w-full mx-auto px-0 sm:px-6 md:px-8">
          <div tw="pb-4"> */}
        {/* <div tw="border-4 border-dashed border-gray-200 rounded-lg h-96" /> */}

        {/* <SearchPageContent />
          </div> */}
        {/* /End replace */}

        {/* add infinite scroll functionality to show more  */}
        {/* </div> */}
      </Wrapper>
    </>
  );
};

export default Search;

function SearchPageContent() {
  const [input, setInput] = useState(""); // "" is the initial state value
  const [queryResults, setQueryResults] = useState(false); // when we get the results back, show them in the div below
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  // code to use to test waiting
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  // function submitQuery() {
  const submitQuery = async () => {
    setLoading(true);
    console.log("Waiting 1s");
    await delay(1000);
    console.log("done waiting 1s");

    fetch("https://api.shoutmo.com/api/v1/profile-search/?keyword=" + input)
      .then((data) => data.json())
      .then((data) => {
        setLoading(false);
        setQueryResults(data.data.results);
      })
      .catch((err) => {
        setHasError(true);
        setLoading(false);
      });
  };

  function checkquery() {
    console.log(queryResults);
    if (queryResults.length === 0) {
      console.log("no results from query");
    }
  }

  return (
    <>
      <div tw="flex flex-col h-screen">
        {/* search area - top */}
        <div tw="flex flex-row w-full px-8 py-4">
          <input
            tw="w-full bg-background-primary rounded shadow-md py-2 border border-gray-600 text-gray-600 pl-2"
            type="text"
            placeholder="Search for user by name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            tw="ml-4 font-semibold rounded-full px-8 bg-background-secondary border border-gray-600 text-white hover:bg-background-primary hover:text-white"
            onClick={submitQuery}
          >
            Search
          </button>
        </div>

        {/* search results - bottom */}
        <div tw="w-full h-auto flex-grow pb-6 px-8">
          {loading ? (
            <div>
              <p tw="font-semibold text-gray-600">Loading...</p>
            </div>
          ) : hasError ? (
            <div>
              <p tw="font-semibold text-gray-600">
                oops.. something went wrong.{" "}
              </p>
            </div>
          ) : queryResults ? (
            queryResults.map((user) => (
              <li tw="list-none" key={user.id}>
                <SearchResultCard
                  profile_picture={user.profile_picture}
                  id={user.id}
                  username={user.username}
                  first_name={user.first_name}
                  last_name={user.last_name}
                />
              </li>
            ))
          ) : (
            <p tw="font-semibold text-gray-600">
              Your search results will show here
            </p>
          )}
        </div>
      </div>
    </>
  );
}

{
  /* 
<button
tw="ml-2 text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-black text-black hover:bg-black hover:text-white"
onClick={checkquery}
>
Checkquery
</button> */
}
