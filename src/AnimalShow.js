import bird from "./svg/bird.svg"
import cat from "./svg/cat.svg"
import cow from "./svg/cow.svg"
import dog from "./svg/dog.svg"
import gator from "./svg/gator.svg"
import horse from "./svg/horse.svg"
import heart from "./svg/heart.svg"
import { useState } from "react";
import './AnimalShow.css';
const svgMap={//creating object
    //bird:bird this is how we do it,but when key and value name are same we can just write it only
    bird,cat,cow,gator,dog,horse,cow
};

function AnimalShow({type}){
    const [clicks,setClicks]=useState(0);
    const handleClick=()=>{
        if (clicks<7)   setClicks(clicks+1);
    };
    return <div className="animal-show" onClick={handleClick}>
     <img className="animal" src={svgMap[type]} alt="image"/>
     <img className="heart" src={heart} alt="heart image"
     style={{width:10+10*clicks+'px'}}
     />
    </div>
}
export default AnimalShow;
