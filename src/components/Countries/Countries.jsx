import React, { use, useState } from "react";
import Country from "./Country";

export const Countries = ({ countryPromise }) => {
  const countryData = use(countryPromise);
  // const countries=countryData.countries
  // console.log(countryData)
  const [visitedCountries, setVisitedCountries] = useState([]);
  const[visitedFlag,setvisitedFlag]=useState([])
  const handlevisitedFlag=(flag)=>{
    // console.log("Flag need to be added",flag)
    const newVisitedFlags=[...visitedFlag,flag]
    setvisitedFlag(newVisitedFlags)
  }
  const handlerVisitedcountry = (country) => {
    console.log("Handle visited country clicked", country);
    const newVisited = [...visitedCountries, country];
    setVisitedCountries(newVisited);
  };
  return (
    <div>
      <h1>Countries:{countryData.length}</h1>
      <h3>Total country visited:{visitedCountries.length}</h3>
      <h3>Totalflag Visited:{visitedFlag.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countryData.map((country, index) => (
          <Country
            key={country.cca3.cca3 || index}
            country={country}
            handlerVisitedcountry={handlerVisitedcountry}
            handlevisitedFlag={handlevisitedFlag}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
