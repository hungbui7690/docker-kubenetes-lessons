/*
  Automatic Build Creation P2
  - to fix the error in previous lesson 
    + By default npm test runs the watcher with interactive CLI. However, you can force it to run tests once and finish the process by setting an environment variable called CI.
      > -e CI=true

  
  - Add -e CI= true to the script in .travis.yml
      script:
      - docker run -e CI=true hungbui7690/docker-react npm run test -- --coverage

  - pic: result in Travis CI

////////////////////////////////////////////
  ***
  - You can read up on the CI=true variable here:
      https://facebook.github.io/create-react-app/docs/running-tests#linux-macos-bash

  - and environment variables in Docker here:
      https://docs.docker.com/engine/reference/run/#env-environment-variables


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
