import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h2>Countries : {countries.length}</h2>

      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.population.region} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
