import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((res) => {
      setJokes(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []);
  

  return (
    <>
      <div>
        <h1>Chai aur Code Fullstack Course</h1>
        <p>JOKES: {jokes.length}</p>
        {jokes.map(joke => (
          <div key={joke.id}>
            <h3>{joke.name}</h3>
            <p>{joke.joke}</p>
          </div>
        ))}
      </div>
      
    </>
  )
}

export default App
