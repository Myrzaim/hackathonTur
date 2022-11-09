import React, { useContext, useEffect, useState } from 'react';
import {
    Alert,
    Button,
    Container,
    Typography,
  } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { turContext } from '../../../Context/TurContextProvider';
import { useParams, useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { AddShoppingCart, SettingsInputAntennaTwoTone } from "@mui/icons-material";
import { turBasket } from '../../../Context/TurBasketProvider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const TurView = () => {
  const { readOneTur, tursDetails } = useContext(turContext);
  const { addTurToBasket } = useContext(turBasket);
    const { id } = useParams();
    useEffect(() => {
        readOneTur(id);
    }, [id]);
    let obj = tursDetails;
     
    const navigate = useNavigate();
    return (obj ?
        <Container sx={{ marginTop: "40px" }}>
        <Grid container spacing={2}>
                <Grid item xs={6} sx={{marginTop:"10px"}}>
                <img style={{ width: 500, height: 400 }} src={obj.img} alt='image' />
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ padding: "10px", marginTop: "40px" }}>
              <Typography variant="h4">
                {obj.country}
              </Typography>
              <Typography variant="h5">{obj.city}</Typography>
              <hr />
              <Typography sx={{ marginTop: "30px" }}>
                {obj.desc}
              </Typography>
              <Alert
                icon={<AttachMoneyIcon />}
                sx={{
                  fontSize: "25px",
                  fontWeight: 700,
                  mt: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent:"flex-end"
                }}
              >
                Цена: {obj.price}
                
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ marginLeft: "20px" }}
                  onClick={() => addTurToBasket(obj)}
                >
                  <AddShoppingCart />
                            </Button>
                <Button
                    variant="contained"
                    color="warning"
                    sx={{ marginLeft: "20px" }}
                    onClick={() => navigate(`/edit/${obj.id}`)}
                  >
                    Изменить
                  </Button>
              </Alert>
            </Paper>
          </Grid>
        </Grid>
      </Container>
        : null
    );
};

export default TurView;