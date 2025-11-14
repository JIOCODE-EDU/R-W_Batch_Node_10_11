import { useState } from "react"
import axios from 'axios'

const FileUpload = () => {

  const [file , setFile] = useState(null)
  const [message , setMessage] = useState('')
  const [uploded , setUploded] = useState(false)

  const BaseApi = "http://localhost:5000"

  const onChange = (e) => {
    setFile(e.target.files[0]) 
  }

  const onSubmit = async(e) => {
    e.preventDefault()

    if(!file) return setMessage("Please select a file")

    const formData = new FormData()
    formData.append('file' , file)

    try{
      setMessage('Uploding.........')
      const res = await axios.post(`${BaseApi}/upload` , formData , {
        headers:{"Content-Type":'multipart/form-data'}
      })
      
      setUploded(res.data.file)
      setMessage(res.data.message)

    }catch(err){
      console.log(err);
      setMessage(err?.response?.data?.message || "Upload failed" )
    }
  }

  return (
    <div>
      <h2>Upload File to Cloudinary</h2>
      <form onSubmit={onSubmit}>
        <label>FileUpload</label>
        <input type="file" name="file" onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
      {
        uploded && (
          <div style={{marginTop:20}}>
            <h3>Uploded File:</h3>
            <p>{uploded.originalName}</p>
          </div>
        ) ? (
          <img src={uploded.url} alt=""/>
        ) : (
          <a href={uploded.url}>View Preview</a>
        )
      }
    </div>
  )
}

export default FileUpload