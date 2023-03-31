/*
  Bookmarking Volumes ***
  - we don't need to do anything from the previous lesson (WSL2)
  - pic > explain error in last lecture


  > docker build -f Dockerfile.dev .
    > return image_id
  > docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>
    > this will throw error

  - For windows, we need to use ${pwd} instead of $(pwd)
    > docker run -p 3000:3000 -v /app/node_modules -v ${PWD}:/app <image_id>
    > $(pwd) !== ${pwd}

  *** after this setup, whenever we change the code, it will reflects right away without rebuild

*/

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello World!</p>
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
