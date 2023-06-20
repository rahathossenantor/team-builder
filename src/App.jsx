import {useEffect, useState} from 'react'
import './App.css'
import users from './data/users.json'
import Employee from './components/Employee/Employee'

function App() {
  const [team, setTeam] = useState([])
  const [workers, setWorkers] = useState([])

  const addWorker = (worker) => {
    const selectedWorker = [...workers, worker]
    setWorkers(selectedWorker)
  }

  useEffect(() => {
    setTeam(users)
  }, [])

  return (
    <>
    <ul>
      <h1>Team Builder</h1>
      <h3>Total added worker: {workers.length}</h3>
      {team.map(employee => (<Employee key={employee.email} worker={employee} addWorker={addWorker}></Employee>))}
    </ul>
    </>
  )
}

export default App