import React from 'react'
import 'twin.macro'

const Circle = () => (
  <>
    <ul tw="list-disc space-y-2">
      <li tw="flex items-center ">
        {/* <p tw="text-xl font-bold">Circle</p> */}

        <div tw="flex">
          <img
            tw="w-16 h-16 rounded-full border-4 border-button"
            // tw="w-12 h-12 rounded-full border-4 border-button"
            src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
            alt=""
          />
          <img
            tw="w-16 h-16 rounded-full border-4 border-button -ml-4"
            // tw="w-12 h-12 rounded-full border-4 border-button -ml-4"
            src="https://images.generated.photos/ADbBAzeK5oWF2oDJWfZ2-Wq3TBjqex-dxZVQGD5LPJY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMzk2ODBfMDUz/NjY1Nl8wNzAxMDQ2/LmpwZw.jpg"
            alt=""
          />
          <img
            tw="w-16 h-16 rounded-full border-4 border-button -ml-4"
            // tw="w-12 h-12 rounded-full border-4 border-button -ml-4"
            src="https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg"
            alt=""
          />
          <img
            tw="w-16 h-16 rounded-full border-4 border-button -ml-4"
            // tw="w-12 h-12 rounded-full border-4 border-button -ml-4"
            src="https://images.generated.photos/Z5HfwR5L8Fez5uCqEcj3SbogJgJhBdfxJs73ZRGjWgE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzc4NzAuanBn.jpg"
            alt=""
          />
          <span tw="flex items-center justify-center font-semibold text-button w-16 h-16 rounded-full bg-accent border-4 border-button -ml-4">
            {/* <span tw="flex items-center justify-center font-semibold text-button w-12 h-12 rounded-full bg-accent border-4 border-button -ml-4"> */}
            +99
          </span>
        </div>
      </li>
    </ul>
  </>
)

export default Circle
