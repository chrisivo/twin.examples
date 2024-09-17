'use client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'
import StyleVariables from './StyleVariables'

const CustomStylesOne = createGlobalStyle`
  .example-basic {
    ${tw`italic font-bold`}
  }

  .escaped-array-working {
    ${tw`font-escapedarrayworking`}
  }

  .nested-root-working {
    ${tw`z-30 top-0 flex items-center w-full h-20 px-4`}

    .nested-child-working {
      ${tw`font-escapedarrayworking font-bold text-2xl uppercase`}
    }
  }

  .unescaped-array-fail {
    ${tw`font-unescapedarrayfail`}
  }

  .prev-working-after-fail-also-fails {
    ${tw`italic font-bold`}
  }
`

const CustomStylesTwo = createGlobalStyle`
  .another-example-basic {
    ${tw`italic font-bold`}
  }

  .nested-root-fail {
    ${tw`z-30 top-0 flex items-center w-full h-20 px-4 shadow`}

    .nested-child-fail {
      ${tw`font-escapedarrayworking font-bold text-2xl uppercase`}
    }
  }
`
const GlobalStyles = () => (
  <>
    <BaseStyles />
    <StyleVariables />
    <CustomStylesOne />
    <CustomStylesTwo />
  </>
)

// console.log('default sans', defaultTheme.fontFamily.sans)
export default GlobalStyles
