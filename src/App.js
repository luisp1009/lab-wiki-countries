import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountryDetails';
import { useState, useEffect } from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import countriesData from './countries.json'

function App() {
  
const [countries, setCountries] = useState(countriesData)

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <div className='row'>
        <CountriesList  countries= {countries} />
        <Routes>
  <Route path='/:id' element ={<CountriesDetails countries= {countries} /> }/>

  </Routes>
        
      </div>
    
   </div>
    </div>
  );
}

export default App;
