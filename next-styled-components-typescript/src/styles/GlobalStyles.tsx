'use client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'
import StyleVariables from './StyleVariables'

const CustomStyles = createGlobalStyle`
  .example-basic {
    ${tw`italic font-bold`}
  }

  .top-bar {
    ${tw`fixed z-30 top-0 flex items-center w-full h-20 px-4`}

    .brand {
      ${tw`font-headingthree font-bold text-2xl uppercase`}
    }
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <StyleVariables />
    <CustomStyles />
  </>
)

// console.log('default sans', defaultTheme.fontFamily.sans)
export default GlobalStyles
