/*
  Docker Compose for Running Tests
  - modify docker-compose.yaml

  - docker-compose up

  - add 1 more test and save to see the changes

  *** the problem with this is: 
    - we cannot interactive with the command line by using "w" or "p"...
    

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
