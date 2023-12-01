import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const API = "https://my-json-server.typicode.com/typicode/demo/posts";

  const getData = async () => {
    try{
      const res = await axios.get(API);
    console.log(res.data, "get");}
    catch(error){
      console.error(error.message);
    }
  };

  const postData = async () => {
    try{
      const res = await axios.post(API, {
      id: 7,
      tittle: "Título del 7",
    });
    console.log(res.data, "post");
    }
    catch(error){
      console.error(error.message);
    } 
  };

  const updateData = async() => {
    try{
      const res = await axios.put(`${API}/2`, {
      title:"Nuevo título",
    })
    console.log(res.data,"update");
    }
    catch(error){
      console.error(error.message);
    }
  };

  const deleteData = async()=>{
    try{
      const res = await axios.delete(`${API}/3`);
    console.log(res.data, "delete");
    }
    catch(error){
      console.error(error.message)
    }    
  };

  useEffect(() => {
    getData();
    postData();
    updateData();
    deleteData();
  });

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
