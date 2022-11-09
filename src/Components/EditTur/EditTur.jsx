import React, { useContext, useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import { turContext } from '../../Context/TurContextProvider';
import { useNavigate, useParams } from 'react-router-dom';


const EditTur = () => {

    const { editTur, tursDetails, readOneTur } = useContext(turContext);
    const { id } = useParams();
    useEffect(() => {
        readOneTur(id);
    }, [id]);
    
    const [inpVal, setInpVal] = useState(tursDetails);
  
    

    function handleChange(e) {
        let obj = {
          ...inpVal,
          [e.target.name]: e.target.value,
        };
        
        setInpVal(obj);
    }
    
    const navigate = useNavigate();

    function handleSave(e) {
      e.preventDefault(); // останавливает автообновление бразуреа при отправке данных через form
      if (
        !inpVal.country.trim() ||
        !inpVal.city.trim() ||
        !inpVal.desc.trim() ||
          !inpVal.price ||
        !inpVal.img.trim()
      ) {
        alert("Заполните все поля!");
        return;
      }
      editTur(id, inpVal);
      navigate("/list");
    }
    
    return (
        <>
            <h2 id="add-title">Изменения товара</h2>
            {inpVal ?
                <form id="form-add"  onSubmit={(e) => handleSave(e)}>
                <TextField
                  className="outlined-basic"
                  label="Страна"
                  variant="outlined"
                  name="country"
                  value={inpVal.country}
                  onChange={(e) => handleChange(e)}
                    />
                <TextField
                  className="outlined-basic"
                  label="Город"
                  variant="outlined"
                  name="city"
                  value={inpVal.city}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  className="outlined-basic"
                  label="Описание"
                  variant="outlined"
                  name="desc"  
                  value={inpVal?.desc}
                  onChange={(e) => handleChange(e)}
                />
                <TextField
                  type="number"
                  className="outlined-basic"
                  label="Цена"
                  variant="outlined"
                  name="price"  
                  value={+inpVal.price}    
                  onChange={(e) => handleChange(e)}      
                />
                <TextField
                  className="outlined-basic"
                  label="Фото"
                  variant="outlined"
                  name="img"
                  value={inpVal.img}
                  onChange={(e) => handleChange(e)}
                />
                <Button variant="contained" type="submit">
                  Сохранить
                </Button>
              </form>
            :null}
        </>
      );
    };

export default EditTur;