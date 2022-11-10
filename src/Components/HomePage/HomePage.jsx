import { Grid } from "@mui/material";
import React from "react";

import { Typography } from "@mui/material";

const HomePage = () => {
  const image =
    "http://wallpapers-image.ru/1920x1080/mountains/wallpapers/mountains-wallpapers-1920x1080-00019.jpg";

  return (
    <>
      <Grid style={{ position: "relative", marginBottom: "-10px" }}>
        <img src={`${image}`} width={"100%"} height={"500px"} alt="" />
      </Grid>
      <Grid
        style={{
          position: "absolute",
          left: "30%",
          top: "35%",
          textAlign: "center",
        }}>
        <hr />
        <Typography style={{ color: "white", fontSize: 50 }}>
          Traveline
        </Typography>
        <hr />
        <Typography style={{ color: "white", fontSize: 30 }}>
          Предлагает вам самые лучшие туры
        </Typography>
      </Grid>
    </>
  );
};

export default HomePage;
