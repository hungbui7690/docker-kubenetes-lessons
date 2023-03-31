/*
  WSL2 and Windows Users Must Read Before Next Lecture
  *** WS2 Ubuntu
  - When using WSL2 as a backend for Docker Desktop, the project must be created on or copied directly to the Linux file system. If the project is on the Windows file system, the volumes will not work correctly. All docker commands should be run within WSL2 and not on Windows.
  - To open your WSL2 operating system, type wsl in the Windows / Cortana Search Bar and click wsl.
  - In the WSL2 terminal change into your root user directory by running cd ~
  - Run explorer.exe . to open up a file browser within WSL2.
  - Move the frontend project directory into the file browser window

  - Your project path should now look like this:
    > /home/USER/frontend
  - Using the WSL2 terminal build your Docker image as you typically would:
      docker build -f Dockerfile.dev -t USERNAME:frontend .
  - Using the WSL2 terminal, start and run a container. It is very important that you do not use a PWD variable as shown in the lecture video as this will not work. Use the ~ alias for the home directory or type out the full path:
    > docker run -it -p 3000:3000 -v /app/node_modules -v ~/frontend:/app USERNAME:frontend
    or
    > docker run -it -p 3000:3000 -v /app/node_modules -v /home/USER/frontend:/app USERNAME:frontend
    > Going forward, all Docker commands and projects should be run within WSL2 and not Windows.

/////////////////////////////////////////////

  *** Docker Desktop with HyperV
  - Please be aware that each terminal (Command Prompt, GitBash, Powershell) will require a slightly different way of dealing with the current working directory.
  - If all else fails, please use the full path to the directory instead of the PWD shortcut.
  - These examples are only for Docker Desktop that is using HyperV as a backend. If you are using WSL2, stop as this does not apply to you - please see the WSL2 with Ubuntu section at the beginning of this note.
  - Working example commands for each terminal (be sure to run these commands in the root of your project directory)
  - PowerShell
    > docker run -it -p 3000:3000 -v /app/node_modules -v ${pwd}:/app IMAGE_ID
  - GitBash
    > winpty docker run -it -p 3000:3000 -v /app/node_modules -v "/$(PWD)":/app IMAGE_ID
  - Docker Desktop File Sharing
    + By default, your C:\ will be shared with Docker Desktop for volume mounting. If you are using an external or network drive or some other drive on your machine such as D:\ or F:\ it will not be shared and your volumes not be mounted properly.
    + Please make sure that the drive you are using has been shared by clicking the Docker icon in the systray. Click "Settings", then "Resources" and finally "File Sharing".

////////////////////////////////////////////

  *** Windows Defender, Firewalls and Anti-Virus
  - Any of these services could possibly conflict with the volume mounting. When in doubt, disable each service one by one to see if the volumes begin working correctly.

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
