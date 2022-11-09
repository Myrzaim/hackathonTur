import {
    FormControl
  } from "@mui/material";
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
  
  const Filter = ({ country, setCountry }) => {
    return (
      <FormControl>
        <InputLabel id="filter" >Фильтр</InputLabel>
        <Select
          labelId="filter"
          id="demo-simple-select"
          value={country}
          label="Age"
          onChange={(e) => setCountry(e.target.value)}>
          <MenuItem value="america">Америка</MenuItem>
          <MenuItem value="asia">Азия</MenuItem>
          <MenuItem value="europe">Европа</MenuItem>
          <MenuItem value="all">Все страны</MenuItem>
        </Select>
      </FormControl>
    );
  };
  
  export default Filter;