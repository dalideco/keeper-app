import React,{useState,useEffect} from 'react';
import './App.scss';
import Navbar from  './components/Navbar';
import Main from './components/Main';
import axios from 'axios'
import qs from 'qs'

function App() {

  const [database,setdatabase] = useState([]);
  const [change, setChange]=useState(true);

  useEffect( ()=>{
     axios.get("/find").then(response=>{
      setdatabase(prev=>response.data)
    }).catch(
      err=> console.log(err)
    )
  },[change])

  const addToDatabase =(input)=>{
    axios.post("/add",qs.stringify(input));
    setChange(!change)
  }

  const removingFromdatabase= (id)=>{
    axios.post("/remove",qs.stringify({_id: id}));
    setChange(!change)
  }

  return (
    <div className="App">
      <Navbar />
      <Main database={database} addToDatabase={addToDatabase}
        removingFromdatabase={removingFromdatabase}/>
    </div>
  );
}

export default App;
