import React,{useState} from 'react';
import './App.scss';
import Navbar from  './components/Navbar';
import Main from './components/Main';

function App() {

  var [database,setdatabase] = useState([]);

  const addToDatabase =(input)=>{
    setdatabase((prev)=>[...prev,
      {
        id: input.length,
        title: input.title,
        content:input.content
      }]
    );
  }

  return (
    <div className="App">
      <Navbar database={database} />
      <Main database={database} addToDatabase={addToDatabase}/>
    </div>
  );
}

export default App;
