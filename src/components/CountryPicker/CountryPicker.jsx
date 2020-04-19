import React, { useState, useEffect } from 'react';
import { Select, FormControl,InputLabel,MenuItem } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countries} from '../../api';
const CountryPicker = ({handaleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries]= useState([]);
    useEffect(()=>{
        const fetchAPI= async()=>{
            setFetchedCountries(await countries());
        }
        fetchAPI();
    },[setFetchedCountries])


    return (
        <FormControl className={styles.formControl} > 
            <InputLabel shrink id="demo-simple-select-placeholder-label-label">Countries</InputLabel>
            <Select defaultValue='' labelId="demo-simple-select-placeholder-label-label" id="demo-simple-select-placeholder-label" onChange={(e)=>handaleCountryChange(e.target.value)} >
                <MenuItem value=''>Global</MenuItem>
                {fetchedCountries.map((country,i)=>
                    <MenuItem key={i}
                       value={country} >
                           {country}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default CountryPicker;