import React from 'react'
import { useEffect , useState } from 'react'
import API from '../services/Authapi'

const Profile = () => {

  const [user , setUser] = useState(null)

  useEffect(() => {
    const fetchProfile = async() => {
      try{
        const res = await API.get('/profile')
        setUser(res.data)
      }catch(err){
        alert('Please log in.')
      }
    }
    fetchProfile()
  } , [])

  return (
    <>
      <h2>Profile</h2>
      {/* <p>Name:{user.name}</p> */}
      {/* <p>Email:{user.email}</p> */}
    </>
  )
}

export default Profile