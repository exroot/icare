/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "twin.macro";

import useTrendingTags from "../../lib/useTrendingTagsFetcher";

const TrendingTags = ({ categories, loading }) => (
  <>
    <div tw="flex flex-col items-center mt-4">
      <div tw="flex flex-col h-full w-full">
        <p tw="text-primary-200 text-sm font-bold ml-3 uppercase">
          Categorias populares:
        </p>
      </div>
      <GetTags categories={categories} loading={loading} />
    </div>
  </>
);

const Tag = ({ children }) => (
  <>
    <a tw="block m-1 bg-primary-800 rounded-full hover:bg-primary-700 text-accent px-2 py-0 leading-loose cursor-pointer text-sm md:text-base">
      {children}
    </a>
  </>
);

function GetTags({ categories, loading }) {
  return (
    <>
      <div tw="w-full px-3">
        <div tw="py-2">
          <div tw="my-3 flex flex-wrap -m-1">
            {loading && <p>loading</p>}

            {categories.map((category) => (
              <Tag key={category.id}>{category.category}</Tag>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingTags;
