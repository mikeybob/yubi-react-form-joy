import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useComponent, { Test } from './components/test'

function App() {
  const [count, setCount] = useState(0)
  let ComponentTest = useComponent(count);
  useEffect(() => {
    console.log('time:', count);
    ComponentTest = useComponent(count);

    return () => {
      console.log('in time useEffect return-func')
    }
  }, [count]);


  useEffect(() => {
    console.log('nothing');

    return () => {
      console.log('in nothing useEffect return-func')
    }
  }, []);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {(<Test></Test>)}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {ComponentTest && (<ComponentTest></ComponentTest>)}
      </div>
    </div>
  )
}

export default App
