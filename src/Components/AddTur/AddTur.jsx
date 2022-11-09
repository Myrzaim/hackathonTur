import { Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { turContext } from "../../Context/TurContextProvider";
import "./AddTur.css"


const AddTur = () => {
  const { addTur } = useContext(turContext);
  const [continent, setContinent] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState("");


    function handleAdd(e) {
        e.preventDefault(); 
      if (
            !continent.trim() ||
            !country.trim() ||
            !city.trim() ||
            !desc.trim() ||
            !price.trim() ||
            !img.trim()
        )
            alert("Заполните все поля!");
      let obj = {
            continent,
            country,
            city,
            desc,
            price,
            img
        }
        addTur(obj);
        setContinent("");
        setCountry("");
        setCity("");
        setDesc("");
        setPrice(0);
        setImg("");
    }

    return (
        <>
          <h2 id="add-title">Добавление тура</h2>
        <form id="form-add" onSubmit={(e) => handleAdd(e)}>
         <TextField
              className="outlined-basic"
              label="Континент"
              variant="outlined"
              value={continent}
              onChange={(e) => setContinent(e.target.value)}
                />
            <TextField
              className="outlined-basic"
              label="Страна"
              variant="outlined"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
                />
            <TextField
              className="outlined-basic"
              label="Город"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <TextField
              className="outlined-basic"
              label="Описание"
              variant="outlined"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <TextField
              type="number"
              className="outlined-basic"
              label="Цена"
              variant="outlined"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
                    
            />
            <TextField
              className="outlined-basic"
              label="Фото"
              variant="outlined"
              value={img}
              onChange={(e) => setImg(e.target.value)}
            />
            <Button variant="contained" type="submit">
              Добавить
            </Button>
          </form>
        </>
      );
    };
    

export default AddTur;