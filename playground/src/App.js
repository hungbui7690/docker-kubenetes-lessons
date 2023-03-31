/*
  Starting the Container
  - docker run <image_id> 
    > missing port mapping

  - docker run -it -p 3000:3000 <IMAGE_ID>

  
  *** if we change something, we need to rebuild > it takes a lot of time 
      > next lesson

  *** if we run the docker run command, and it exists right away > add -it flag: 
      > docker run -it -p 3000:3000 IMAGE_ID

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
