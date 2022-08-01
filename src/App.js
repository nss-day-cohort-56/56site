
import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  
  useEffect(()=>{
    getData()
  },[])
  
  return (
    <div className="App">
     {
       data && data.length>0 && data.map((item)=><p>{item.cohort.name}</p>)
     }
    
    {
      data?.cohort?.map(student => <p>{student.name}</p>)
    }
    </div>


  );
}

