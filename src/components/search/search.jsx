import React from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { useState } from 'react'
import { GEO_API_URL, geoApiOptions } from '../../api'

export const Search = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null)

    const loadingOptions = (inputValue) => {
        // so at miniPupulation = if the population of the city is 1000000 then only it will show the result
        // namePrefix = it will serch the city which user gonna fill the input
        return fetch(`${GEO_API_URL}/cities?miniPopulation=1000000&namePrefix=${inputValue}`, 
        geoApiOptions
        )
            .then(response => response.json())
            .then(response => {
                return{
                    options: response.data.map((city)=>{
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name},${city.countryCode}`,
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (serachData) => {
        setSearch(serachData)
        onSearchChange(serachData)
    }
    return (
        <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600} // so it will wait for 600ms then fetch the api coz we dont want onEvery click api call should happen
            value={search}
            onChange={handleOnChange}
            loadOptions={loadingOptions}
        />
    )
}
