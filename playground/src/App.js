/*
  Do We Need COPY???
  - Dockerfile
    > COPY . .
      > do we still need this line? 

  *** now, even though we don't need this because we can ref to volume > but we should keep this like a reference > and maybe we will use it in the future

////////////////////////////////////////

  Executing Tests
  - we want to run test in the container

  (1) docker build -f Dockerfile.dev . 
    > get id 
  
  (2) 
    - docker run <id> npm run test
    - docker run -it <id> npm run test
      > should use this one since when testing, we need to interact with the command line

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
