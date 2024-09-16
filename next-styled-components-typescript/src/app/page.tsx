import React from 'react'
import 'twin.macro'

const App = () => (
  <>
    <div className="example-basic">
      Here be some basic text (Expected to work)
    </div>
    <div className="example-font-fromsingleunescaped">
      example-font-fromsingleunescaped (Expected to work)
    </div>

    <div className="example-font-fromsinglevarunescaped">
      example-font-fromsinglevarunescaped (Expected to fail - contains
      non-alphanumeric chars)
    </div>

    <div className="example-font-fromsinglequotesunescaped">
      example-font-fromsinglequotesunescaped (Expected to fail - contains
      non-alphanumeric chars)
    </div>

    <div className="example-font-fromsinglevarescaped">
      example-font-fromsinglevarescaped (Expected to work - contains escaped
      non-alphanumeric chars)
    </div>

    <div className="example-font-fromsinglequotesescaped">
      example-font-fromsinglequotesescaped (Expected to work - contains escaped
      non-alphanumeric chars)
    </div>

    <div className="example-font-fromvarinarray">
      example-font-fromvarinarray (Expected to fail - contains non-alphanumeric
      chars)
    </div>

    <div className="example-font-fromvarinescapedarray">
      example-font-fromvarinescapedarray (Expected to work - contains escaped
      non-alphanumeric chars)
    </div>

    <div className="nested-root">
      <div className="nested-child">Nested Root / Nested Child.</div>
    </div>

    <div className="nested-root-broken">
      <div className="nested-child">
        Nested Root (Broken) / Nested Child. Assumed to fail as "shadow"
        Tailwind class in root contains (unescaped?) brackets.
      </div>
    </div>
  </>
)

export default App
