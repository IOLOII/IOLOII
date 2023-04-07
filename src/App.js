import logo from './logo512.png'
import './App.css'
// import Prism from 'prismjs'
// import { useEffect } from 'react'
// import CodeBlock from './CodeBlock'

function App() {
  // useEffect(() => {
  //   Prism.highlightAll()
  // })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>IOLOII</b> is <code>coding</code> <i>!</i>
        </p>
        {/* <per> */}
          {/* <code>
            var a = 'string'
          </code> */}
        {/* </per> */}
        {/* <CodeBlock language="javascript" code="var a = 'string'"></CodeBlock> */}
        <a
          className="App-link"
          href="https://github.com/IOLOII"
          target="_self"
          rel="noopener noreferrer"
        >
          about
        </a>
      </header>
    </div>
  )
}

export default App
