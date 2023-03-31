/*
  Live Updating Tests
  - if we modify App.test.js 
    > we need to rebuild again
  - because the container we use for testing does not have volume 
    > changes are not reflected


  - we can setup another services for testing in docker-compose.yaml
  - or we can attach to the old compose
    > picture

  *** this is not a good approach

*/

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello World!!!</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
