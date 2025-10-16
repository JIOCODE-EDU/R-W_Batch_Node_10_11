import React from 'react'
import { useEffect , useState } from 'react'
import API from '../services/Authapi'

const Profile = () => {

  const [user , setUser] = useState(null)
  console.log(user);

  // useEffect(() => {
  //   const fetchProfile = async() => {
  //     try{
  //       const res = await API.get('/profile')
  //       setUser(res.data)
  //     }catch(err){
  //       alert('Please log in.')
  //     }
  //   }
  //   fetchProfile()
  // } , [])

  return (
    <>
      <h2>Profile</h2>
      <p>Name:{user}</p> 
    </>
  )
}

export default Profile