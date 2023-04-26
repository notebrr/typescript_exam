import { useState } from 'react'
import myLogo from './assets/logo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
          <a href="/">
              <img src={myLogo} className="app logo" alt="App logo" />
          </a>
      </div>
      <h1>Movie app</h1>
      <div className="card">
          <input type="text" className={"searchField"} autoFocus={true} placeholder={"Search movie"}/>
      </div>

    </div>
  )
}

export default App
