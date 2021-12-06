/* eslint-disable react/prop-types */
import React from 'react'
import { HashLoader } from 'react-spinners'
import { css } from 'twin.macro'

const Container = ({ children }) => {
  const containerStyles = css`
    text-align: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `
  return (
    <>
      <div css={containerStyles}>{children}</div>
    </>
  )
}

const PageLoader = () => (
  <Container>
    <HashLoader size={50} color="#eb008d" />
  </Container>
)

export default PageLoader
