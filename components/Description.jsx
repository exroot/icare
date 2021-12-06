/* eslint-disable react/prop-types */
import React from 'react'
import 'twin.macro'

const Description = ({ children }) => (
  <div tw="my-4 sm:my-2 max-w-3xl">
    <span tw="text-sm text-primary-400">{children}</span>
  </div>
)

export default Description
