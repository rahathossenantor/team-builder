import {useEffect, useState} from 'react'
import './App.css'
import users from './data/users.json'
import Employee from './components/Employee/Employee'

function App() {
  const [team, setTeam] = useState([])

  useEffect(() => {
    setTeam(users)
  }, [])

  return (
    <>
    <ul>
      {team.map(employee => (<Employee key={employee.email} worker={employee}></Employee>))}
    </ul>
    </>
  )
}

export default App