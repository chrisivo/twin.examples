'use client'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'
import StyleVariables from './StyleVariables'

const CustomStyles = createGlobalStyle`
  .example-basic {
    ${tw`italic font-bold`}
  }

  .example-font-fromsingleunescaped {
    ${tw`font-yfromsingleunescaped`}
  }

  .example-font-fromsinglevarunescaped {
    ${tw`font-yfromsinglevarunescaped`}
  }

  .example-font-fromsinglequotesunescaped {
    ${tw`font-yfromsinglequotesunescaped`}
  }

  .example-font-fromsinglevarescaped {
    ${tw`font-yfromsinglevarescaped`}
  }

  .example-font-fromsinglequotesescaped {
    ${tw`font-yfromsinglequotesescaped`}
  }

  .example-font-fromvarinarray {
    ${tw`font-yfromvarinarray`}
  }

  .example-font-fromvarinescapedarray {
    ${tw`font-yfromvarinescapedarray`}
  }

  .nested-root {
    ${tw`z-30 top-0 flex items-center w-full h-20 px-4`}

    .nested-child {
      ${tw`font-bold text-2xl uppercase`}
    }
  }

  .nested-root-broken {
    ${tw`z-30 top-0 flex items-center w-full h-20 px-4 shadow`}

    .nested-child {
      ${tw`font-yfromvarinescapedarray font-bold text-2xl uppercase`}
    }
  }

`

// fromsingleunescaped: 'cursive',
// fromsinglevarunescaped: 'var(--font-heading)',
// fromsinglequotesunescaped: '"Apple Color Emoji"',
// fromsinglevarescaped: prepForTWConfig('var(--font-heading)'),
// fromsinglequotesescaped: prepForTWConfig('"Apple Color Emoji"'),
// fromvarinarray: ['var(--font-heading)', ...defaultTheme.fontFamily.sans],
// fromvarinescapedarray: prepArrayForTWConfig([

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <StyleVariables />
    <CustomStyles />
  </>
)

export default GlobalStyles
