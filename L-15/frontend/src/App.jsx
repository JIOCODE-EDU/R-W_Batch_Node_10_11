import { useState ,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [data , setData] = useState([])

  useEffect(() => {
    let res = axios.get("http://localhost:5040/")
    setData(res.data)
  } , [])

  return (
    <>
     
    </>
  )
}

export default App
