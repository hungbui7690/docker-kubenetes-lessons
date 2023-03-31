/*
  Creating the Dev Dockerfile
  - pic
    > we will have 2 Dockerfile:
      + production
      + dev

  (1)
  - create Dockerfile.dev
    > for development

  - this Dockerfile will be a little bit different than what we learned
    - FROM node:16-alpine
      > need to have specific version of node to avoid bugs
    - COPY . .
      > not ./ ./
    
  (2) because we use Dockerfile.dev > if we run "docker build ." > err
    > docker build -f Dockerfile.dev .
      
  
  *** if it takes too long to run "npm install" > check Docker Desktop, then update it and run again

*/

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
