import { useState } from "react";
import Head from "next/head";
import Wrapper from "../../components/Wrapper";
import PageLoader from "../../components/PageLoader";
import SearchBar from "../../components/Search/SearchBar";
import ResultsContainer from "../../components/Search/ResultsContainer";
import useUser from "../../lib/useUser";
import "twin.macro";

const SearchPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [results, setResults] = useState([]);
  const { user, isLoading: userLoading } = useUser({ redirectTo: "/login" });

  if (userLoading || user.is_logged_in === false) {
    return (
      <>
        <Head>
          <title>Shoutmo</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PageLoader />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Shoutmo | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <div tw="px-4 mb-6">
          <div>
            {/* Search Bar */}
            <SearchBar
              setLoading={setLoading}
              setResults={setResults}
              setError={setError}
            />
          </div>
          <div tw="mt-4">
            {/* Search Results */}
            <ResultsContainer
              isLoading={isLoading}
              results={results}
              error={error}
            />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SearchPage;
