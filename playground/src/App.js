/*
  Running Nginx
  - docker build .
    > <image_id>

  - docker run -p 8080:80 <image_id>
    > need to have port
      > default port of nginx is 80



  *** Dockerfile
    > COPY --from=builder /app/build /usr/share/nginx/html

    CHANGE TO: --from=0
    > COPY --from=0 /app/build /usr/share/nginx/html

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
