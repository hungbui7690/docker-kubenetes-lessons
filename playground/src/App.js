/*
  Overriding Dockerfile Selection
    build:
      context: .
      dockerfile: Dockerfile.dev

  - docker-compose up


  *** if we don't see changes reflected > add this: 
    services:
      web:
        environment:
          - CHOKIDAR_USEPOLLING=true

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
