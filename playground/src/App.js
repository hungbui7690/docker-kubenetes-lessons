/*
  A Touch More Travis Setup
  - docker build -f Dockerfile.dev -t hungbui7690/docker-react .
  - docker run -it hungbui7690/docker-react npm run test
  - docker run --init hungbui7690/docker-react npm run test -- --coverage
    > --coverage: give the statistic of this test
  

  ***
    https://create-react-app.dev/docs/running-tests/#linux-macos-bash
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
