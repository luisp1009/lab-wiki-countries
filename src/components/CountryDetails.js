import countriesData from '../countries.json'
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";




function CountryDetails(props) {

    const { id } = useParams();

    const [myCountry, setMycountry] = useState(null); 

    useEffect(() => {
        const foundCountry = props.countries.filter(singleCountry => singleCountry.alpha3Code === id)
        console.log(foundCountry)
            setMycountry(foundCountry[0])
    }, [id, props.countries])

    return (
       <>
        {myCountry ? (
            <div className="col-7">
            <h1>{myCountry.name.common}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style= {{ width: '30%'}}> Capital</td>
                  <td>{myCountry.capital[0]}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {myCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                    {myCountry.borders.map(singleBorder => {
                    return <li><Link to={`${singleBorder}`}>{singleBorder}</Link></li>
                    })}
                      
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : <p>loading...</p>}
       </>
    )


}

export default CountryDetails;