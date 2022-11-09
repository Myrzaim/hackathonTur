import {
    FormControl
  } from "@mui/material";
import React from "react";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
  
  const Filter = ({ continent, setContinent }) => {
    return (
      <FormControl>
        <InputLabel id="filter" >Фильтр</InputLabel>
        <Select
          labelId="filter"
          id="demo-simple-select"
          value={continent}
          onChange={(e) => setContinent(e.target.value)}>
          <MenuItem value="Америка">Америка</MenuItem>
          <MenuItem value="Азия">Азия</MenuItem>
          <MenuItem value="Европа">Европа</MenuItem>
          <MenuItem value="all">Все страны</MenuItem>
        </Select>
      </FormControl>
    );
  };
  
  export default Filter;