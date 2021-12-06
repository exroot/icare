// followed this tutorial - https://blog.bitsrc.io/fetching-data-in-react-using-hooks-c6fdd71cb24a
// how to use fetch - https://www.javascripttutorial.net/javascript-fetch-api/

// TODO - set display logic in here to show no results

import React, { useState, useEffect } from "react";
import Head from "next/head";
// import Nav from "../components/Nav";
import SearchResultCard from "../components/Search/SearchResultCard";
import "twin.macro";

export default function SearchPage() {
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
      <Head>
        <title>Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div tw="flex flex-col h-screen">
        {/* search area - top */}
        <div tw="flex flex-row w-full bg-gray-600 px-8 py-6">
          <input
            tw="w-full mr-2"
            type="text"
            placeholder="Search for user by name .. (still testing, open console to check return data.. for example, search matt then search bob)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            tw="ml-2 text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-black text-black hover:bg-black hover:text-white"
            onClick={submitQuery}
          >
            Search
          </button>

          <button
            tw="ml-2 text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-black text-black hover:bg-black hover:text-white"
            onClick={checkquery}
          >
            Checkquery
          </button>
        </div>

        {/* search results - bottom */}
        <div tw="w-full h-auto flex-grow bg-gray-200 pb-6">
          {loading ? (
            <div>Loading...</div>
          ) : hasError ? (
            <div>Error occured.</div>
          ) : queryResults ? (
            queryResults.map((user) => (
              <li tw="list-none" key={user.id}>
                <SearchResultCard
                  profile_picture={user.profile_picture}
                  id={user.id}
                  username={user.username}
                />
              </li>
            ))
          ) : (
            <p>search results will show here</p>
          )}
        </div>
      </div>
    </>
  );
}

// ------------------------------------------------------------------------------------------------------------
// notes
// ------------------------------------------------------------------------------------------------------------
// using inline conditional operator to show results -
// https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator
// https://www.debuggr.io/react-map-of-undefined/#wrapping-up

//   onKeyPress={(event) => {
//     if (event.key === "Enter") {
//       console.log("running search");
//       searchQuery();
//     }
//   }}

// .then(console.log("called request", state));

// {/* {state && state.map((d) => <div>{d}</div>)} */}
