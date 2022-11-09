import {
    Button,
    Container,
    Link,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
  } from "@mui/material";
  import React from "react";
  import { useEffect } from "react";
  import { useContext } from "react";
  import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
  import "./Basket.css";
import { turBasket } from "../../Context/TurBasketProvider";
import { useNavigate } from "react-router-dom";
  
const Basket = () => {
  const navigate = useNavigate();
    const {
      tursInBasket,
      getBasket,
      changeTurCount,
      deleteBasketTur,
    } = useContext(turBasket);
  
    useEffect(() => {
      getBasket();
    }, []);
  
    return (
      <>
        <Container maxWidth="lg">
          <Typography variant="h3">My Basket</Typography>
          {tursInBasket ? (
            <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ fontWeight: "bold" }}>Country</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>City</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Img</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Price</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>Count</TableCell>
                      <TableCell sx={{ fontWeight: "bold" }}>SubPrice</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tursInBasket.turs.map((elem) => (
                      <TableRow key={elem.item.id}>
                        <TableCell>{elem.item.country}</TableCell>
                        <TableCell>{elem.item.city}</TableCell>
                        <TableCell>
                          <img src={elem.item.img} alt="apple" width={40} />
                        </TableCell>
                        <TableCell>{elem.item.price}</TableCell>
                        <TableCell>
                          <input
                            min="1"
                            type="number"
                            style={{ width: "40px" }}
                            value={elem.count}
                            onChange={(e) =>
                              changeTurCount(elem.item.id, e.target.value)
                            }
                          />
                        </TableCell>
                        <TableCell>{elem.subPrice}</TableCell>
                        <TableCell
                          onClick={() => deleteBasketTur(elem.item.id)}
                        >
                          <DeleteForeverIcon className="deleteIconBasket" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button variant="contained" sx={{ margin: "20px auto" }}>
                Цена {tursInBasket.totalPrice}
                        </Button>
                <Button variant="contained" sx={{ margin: "20px auto 20px 25px" }}
                  onClick={() => navigate(`/addorder/${tursInBasket.totalPrice}`)}>
                Оформить заказ
                            </Button>
            </>
          ) : (
            <h1>Loading...</h1>
          )}
        </Container>
      </>
    );
  };
  
  export default Basket;
  