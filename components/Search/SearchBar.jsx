import { useState, useEffect } from "react";
import { RiSearchLine } from "react-icons/ri";
import "twin.macro";

const SearchBar = ({ setLoading, setResults, setError }) => {
  const [searchTerm, setSearchTerm] = useState(""); // this holds the search term that use effect watches

  useEffect(() => {
    if (searchTerm.length === 0) {
      setResults([]);
      setLoading(false);
      setError(false);
    }
    if (searchTerm.length > 0) {
      setLoading(true);
      const delayDebounceFn = setTimeout(() => {
        fetch(
          process.env.NEXT_PUBLIC_API_URL +
            `/profile-search/?keyword=${searchTerm}`
        )
          .then((data) => data.json())
          .then((data) => {
            setResults(data.data.results);
            setLoading(false);
          })
          .catch((err) => {
            setError(true);
            setLoading(false);
          });
      }, 2500);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchTerm]);

  return (
    <div tw="text-gray-600 flex flex-row">
      <input
        tw="bg-background-primary border border-gray-600 h-10 px-5 w-full pl-10 rounded-full text-sm focus:outline-none"
        type="search"
        autoComplete="off"
        name="search"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <RiSearchLine tw="text-gray-600 absolute mt-3 ml-4" />
    </div>
  );
};

export default SearchBar;
