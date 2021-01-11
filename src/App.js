import React,{useState} from 'react';
import './App.scss';
import Navbar from  './components/Navbar';
import Main from './components/Main';

function App() {

  var [database,setdatabase] = useState([]);

  const addToDatabase =(input)=>{
    setdatabase((prev)=>[...prev,
      {
        id: database.length,
        title: input.title,
        content:input.content
      }]
    );
  }

  const removingFromdatabase= (id)=>{
    setdatabase((prev)=>{
      return prev.filter((elem)=>elem.id !== id)
    });
  }

  return (
    <div className="App">
      <Navbar database={database} />
      <Main database={database} addToDatabase={addToDatabase}
        removingFromdatabase={removingFromdatabase}/>
    </div>
  );
}

export default App;
