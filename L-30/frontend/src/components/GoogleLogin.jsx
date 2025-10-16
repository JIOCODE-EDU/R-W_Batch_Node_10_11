import React from 'react'

const GoogleLogin = () => {

  function handleLogin(){
    window.location.href = "http://localhost:5040/auth/google"
  }
  
  return (
    <>
      <button onClick={handleLogin}>Login With Google</button>
    </>
  )
}

export default GoogleLogin