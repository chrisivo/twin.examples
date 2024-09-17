import React from 'react'

const App = () => (
  <>
    <div className="example-basic">
      Here be some basic text (Expected to work)
    </div>

    <div className="escaped-array-working">
      Font array contents escaped (Expected to work)
    </div>

    <header className="nested-root-working">
      <span className="nested-child-working">
        This works as styling of all classes used in both span and header
        wrapper do not require escaping...?
      </span>
    </header>

    <div className="unescaped-array-fail">
      Font array contents unescaped (Expected to fail)
    </div>

    <div className="prev-working-after-fail-also-fails">
      Class defined after failed class also fails
    </div>

    <div className="another-example-basic">
      This is now working again as in a separate stylesheet
    </div>

    <header className="nested-root-fail">
      <span className="nested-child-fail">
        This fails owing to the "shadow" Tailwind class in the wrapper (which
        has styling requiring escaping...?)
      </span>
    </header>
  </>
)

export default App
