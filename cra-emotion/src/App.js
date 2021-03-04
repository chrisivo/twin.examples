/** @jsx jsx */
// The pragma above is for CodeSandbox,
// you'll need to remove it for local development.

import { jsx } from '@emotion/react'
/** @jsxImportSource @emotion/react */

import React from 'react' // eslint-disable-line
import tw from 'twin.macro'
import { Button, Logo } from './components'

const App = () => (
  <div
    css={[
      tw`flex flex-col items-center justify-center h-screen`,
      tw`bg-gradient-to-b from-electric to-ribbon`,
    ]}
  >
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

export default App
