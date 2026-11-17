import React, { useState } from "react";
import "./Country.css";

const Country = ({ country,handlerVisitedcountry,handlevisitedFlag }) => {
//   console.log(country);
const [visited, setvisited] = useState(false)
const handleVisited=()=>{
    if(visited){
        setvisited(false)
    }else{
        setvisited(true)
    }

    handlerVisitedcountry(country)
}
  return (
    <div className={`country ${visited && 'visited'}`}>
      <img src={country.flags.flags.png} alt="" />
      <h4>Name:{country.name.common}</h4>
      <h3>Population:{country.population.population}</h3>
      <p>Area:{country.area.area} <strong>{country.area.area>300000?"Big Country":"Smaill Country"}</strong></p>
      <div className="btn-container">
        <button onClick={handleVisited}>{
visited?"Visited":"NotVisited"
}</button>
<button onClick={()=>{handlevisitedFlag(country.flags.flags.png)}}>Add visited Flag</button>
      </div>
    </div>
  );
};

export default Country;
