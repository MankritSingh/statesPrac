import { useState } from "react";
import AnimalShow from "./AnimalShow"
import './App.css'

function randomAnimal(){
    const arr=["dog","cat","bird","cow","gator","horse"];
    return arr[Math.floor(Math.random()*arr.length)];

}
function App(){
    const[animals,setAnimals]=useState([]);
    const handleClick=()=>{
       // setAnimals(animals.push(randomAnimal()));//cant use this as it modifies a state
       setAnimals([...animals,randomAnimal()]); 
       console.log(animals);
    }
    const renderedAnimals=animals.map((animal,index)=>{
        return <AnimalShow type={animal} index={index}/>
    } );

    return(
    <div className='app'>
        <h1>Animals</h1>
        <button onClick={handleClick} >Add Animal</button>
        <div className="animal-list">{renderedAnimals}</div>
    </div>
    );
}
export default App;