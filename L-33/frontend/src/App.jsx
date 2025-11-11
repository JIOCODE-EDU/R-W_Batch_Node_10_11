import "./App.css";
import Dashboard from "./components/Dashboard";
import { useState, useEffect } from "react";

const App = () => {

  const [data, setData] = useState();

  console.log(data);

  useEffect(() => {
    fetch("http://localhost:5040/multiapi/dashboard")
      .then((res) => res.json())
      .then((result) => setData(result.data));
  }, []);

  return (
    <div>
      {
        data ? (
          <Dashboard data={data}/>
        ) : (
          <p>Loading................</p>
        )
      }
    </div>
  );
};

export default App;
