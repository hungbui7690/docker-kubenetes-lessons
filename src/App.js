/*
  Exposing Ports Through the Dockerfile *******
  - pic

  - Dockerfile
      EXPOSE 80
      > when working locally, this line is just to tell other devs that we use port 80 for this service 
      > but when it comes to AWS > AWS need this to map the port 


  - docker-compose.yml
    > check below

  - push again

  *** Bad Gateway 502 
    > try to rebuild the AWS EBS Environment
    > then deploy again

****************************************

  This new AWS platform will conflict with the project we have built since it will look for a docker.compose.yml file to build from by default instead of a Dockerfile.

  To resolve this, please do the following:

    1. Rename the development Compose config file

      Rename the docker-compose.yml file to docker-compose-dev.yml. Going forward you will need to pass a flag to specify which compose file you want to build and run from:
        docker-compose -f docker-compose-dev.yml up
        docker-compose -f docker-compose-dev.yml up --build
        docker-compose -f docker-compose-dev.yml down

    2. Create a production Compose config file

      Create a docker-compose.yml file in the root of the project and paste the following:
        version: '3'
        services:
          web:
            build:
              context: .
              dockerfile: Dockerfile
            ports:
              - '80:80'
      AWS EBS will see a file named docker-compose.yml and use it to build the single container application.


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
