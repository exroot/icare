/* eslint-disable react/prop-types */
import React from 'react'
import 'twin.macro'

const Category = ({ category }) => (
  <div
    key={category}
    tw="rounded-full bg-primary-800 text-button mr-1 md:mr-2 mb-2 px-6 md:px-4 py-2"
  >
    {`#${category}`}
  </div>
)

export default Category
