import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import StudentForm from "./pages/StudentForm";
import StudentList from "./pages/StudentList";

const APILink = "http://localhost:5040/students";

function App() {

  const [student, setStudent] = useState([]);

  const [editStudent, setEditStudent] = useState(null);

  const fetchStudent = async () => {
    const res = await axios.get(APILink);
    setStudent(res.data)
    console.log(res.data);
  };

  const handleSave = async(student) => {
    if(student._id){
      await axios.put(`${APILink}/${student._id}` , student)
    }else{
      await axios.post(APILink , student)
    }
    fetchStudent();
  }

  const handleDelete = async(id) => {
    await axios.delete(`${APILink}/${id}`)
    fetchStudent();
  }

  useEffect(() => {
    fetchStudent();
  }, []);

  return (
    <>
      <div>
        <h1>Student Management (MERN)</h1>
        <StudentForm onSave={handleSave} editStudent={editStudent} setEditStudent={setEditStudent}  />
        <StudentList students={student} onDelete={handleDelete} onEdit={setEditStudent}/>
      </div>
    </>
  );
}

export default App;
