import React, { useState, Suspense, useEffect, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const Component = React.lazy(() => import('./Component'))
const Component1 = React.lazy(() => import('./Component1'))
const Component3 = React.lazy(() => import('./Component3'))
const ComponentNew = React.memo(Component1)



function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: "Ricardo"
  })




useEffect(() => {

const timer = () => {
  setTimeout(() => {
    setUser({
      name: "Ricardo2"
    })
  }, 5000)
}
timer()

}, [])
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1> */}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
<Suspense fallback={<div>Loading...</div>}>
      <Component/>
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
      <Component1 user={user}/>
      </Suspense>
      <ComponentNew user={user}/>
      <Component3 target={user}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
