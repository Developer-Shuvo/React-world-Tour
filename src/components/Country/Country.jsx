import React, { useState } from "react";
import "./Country.css";

const Country = ({ country }) => {
  const { name, capital, region, flags, population } = country;

  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(true);
  };

  return (
    <div className={`country ${visited && "visited"}` }>
      {/* Country Name  */}
      <h3>
        Name : <span className="countryName">{name?.common} </span>{" "}
      </h3>
      {/* Capital  */}
      <h3>
        Capital : <span className="capital"> {capital}</span>{" "}
      </h3>
      {/* Population  */}
      <h3>
        Population : <span className="population"> {population}</span>{" "}
      </h3>
      {/* Region  */}
      <h3>
        Region : <span className="region">{region}</span>{" "}
      </h3>
      {/* //Flag  */}
      <img src={flags.png} alt="" />

      {/* ------------Button With Some Condition-------------  */}
      <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? "I visit This country": 'I want to visit'}
    </div>
  );
};

export default Country;
