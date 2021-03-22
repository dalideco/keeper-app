import React,{useState,useEffect} from 'react';
import './App.scss';
import Navbar from  './components/Navbar';
import Main from './components/Main';
import axios from 'axios'
import qs from 'qs'

function useForceUpdate(){
  const [value,setValue] = useState(0);
  return ()=> setValue(prev=>prev+1)
}

function App() {

  const [database,setdatabase] = useState([]);
  const forceUpdate = useForceUpdate();


  useEffect( ()=>{
     axios.get("https://keeper-app-dalideco.herokuapp.com/find").then(response=>{
      setdatabase(prev=>response.data);
    }).catch(
      err=> console.log(err)
    )
  })

  const addToDatabase =(input)=>{
    axios.post("https://keeper-app-dalideco.herokuapp.com/add",qs.stringify(input)).then(response=>
      forceUpdate()
    ).catch(err=>console.log(err));
    
  }

  const removingFromdatabase= (id)=>{
    axios.post("https://keeper-app-dalideco.herokuapp.com/remove",qs.stringify({_id: id})).then(response=>
      forceUpdate()
    ).catch(err=> console.log(err))
    
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
