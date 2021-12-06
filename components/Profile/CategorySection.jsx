/* eslint-disable react/prop-types */
import React from 'react'
import 'twin.macro'
import Category from './Category'

const CategorySection = ({ categories }) => (
  <>
    <div tw="space-y-4">
      <div tw="flex flex-row pt-4">
        <p tw="text-button text-3xl font-bold">Categories</p>
      </div>

      <div tw="flex flex-row flex-wrap">
        {categories.map((category) => (
          <Category category={category} key={category} />
        ))}
      </div>
    </div>
  </>
)

export default CategorySection
