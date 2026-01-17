import './App.css'
import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown, setMarkdown] = useState('# markdown preview')

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
        ></textarea>
        <article className='result'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App

// What is this?

// This package is a React component that can be given a string
// of markdown that it’ll safely render to React elements.
// You can pass plugins to change how markdown is transformed 
// and pass components that will be used instead of normal HTML elements.