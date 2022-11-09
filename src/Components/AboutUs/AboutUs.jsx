import { Grid } from '@mui/material';
import React from 'react';
import {Container, Paper} from '@mui/material';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
    {
      img: 'http://wallpapers-image.ru/1920x1080/world/wallpapers/world-wallpapers-1920x1080-0003.jpg',
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: 'http://wallpapers-image.ru/1920x1080/world/wallpapers/wallpapers-world-18.jpg',
      title: 'Burger',
    },
    {
      img: 'http://wallpapers-image.ru/1920x1080/world/wallpapers/world-wallpapers-1920x1080-00014.jpg',
      title: 'Camera',
    },
    {
      img: 'http://wallpapers-image.ru/1920x1080/world/wallpapers/world-images-1920x1080-12.jpg',
      title: 'Coffee',
      cols: 2,
    },
    {
      img: 'http://wallpapers-image.ru/1920x1080/world/wallpapers/world-images-1920x1080-14.jpg',
      title: 'Hats',
      cols: 2,
    },
    {
      img: 'http://wallpapers-image.ru/1920x1080/world/wallpapers/wallpapers-world-07.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'http://wallpapers-image.ru/1920x1080/world/wallpapers/wallpapers-world-48.jpg',
      title: 'Basketball',
    },
    {
      img: 'http://wallpapers-image.ru/1920x1080/world/wallpapers/wallpapers-world-46.jpg',
      title: 'Fern',
    },
   
  ];

const AboutUs = () => {
    const image = 'http://wallpapers-image.ru/1920x1080/mountains/wallpapers/mountains-images-1920x1080-20.jpg';
    const image1 = 'https://s3-alpha-sig.figma.com/img/6d0e/3d02/525248f2ffd734084b858b2434845344?Expires=1668988800&Signature=DjIH0ogsMQelGkgfB7KzQlZHeMl8x5otmRiQb-I~OfYCWBmCOuDT8jqZCXC1yXsyTcY~Wlo7Hi-Ktnn7uE1pIxSvGOK4umo-nckDEGpOAJkUpVCtV~lOTO12KIZ2etLjk1e2CIEkGgMzW6b14w1P70ZKClf6O14RmdoRtIDrB9SAI2gAP0IZcJ0-wDVQQGBdYWPBNykukQ8xw3J-zUjM9~7yzg3C2iEErv0hOBrusWNAEspYsDISeIXTsinNTz~KMNmDrOIxFdYohnN7Gqdy9Hz3L-ieJpbwywP7CDm6KC9lmkK-77vFz9tTt938oobWL6wpeOR-w8v0tZBoOnZXtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

    function srcset(image, size, rows = 1, cols = 1) {
        return {
          src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
          srcSet: `${image}?w=${size * cols}&h=${
            size * rows
          }&fit=crop&auto=format&dpr=2 2x`,
        };
      }
    
    return (<>
        <Grid style={{ position:"relative"}}>
            <img src={`${image}`} width={'100%'} height={'500px'} alt="" />
        </Grid>
        <Grid style={{ position: "absolute", left: '45%', top: '60%', textAlign: 'center' }}>
            <hr />
            <Typography style={{ color: 'white', fontSize: 50 }}>О нас</Typography>
            <hr />
      
        </Grid>


        <Container>
        <Grid container spacing={2}>
              
          <Grid item xs={6}>
            <Paper elevation={3} sx={{ padding: "10px", marginTop: "40px" }}>
              <Typography>Traveline – турагентство, которому доверяют свои путешествия более 7000 человек в год, из них 1000 постоянных клиентов, поручивших нам заботыо безопасном и качественном полете, и 6000 человек, которые обязательно к нам обратятся 
за планированием своего следующего тура, поездки или путешествия.Наше турагентство в Бишкеке специализируются на организации корпоративных 
и индивидуальных туров. Мы готовы предложить вам множество интересных идей для отдыха 
                            на море, а также экскурсионные и горнолыжные туры по доступным ценам.
                            Мы искренне заинтересованы в наших Клиентах, считая, 
что Клиент – самый важный человек в Компании. Мы
видим удовлетворение наших потребностей внутри 
удовлетворения потребностей Клиента. В глобальном 
плане мы считаем, что интерес компании лежит внутри 
интереса общества и страны. Мы индивидуализируем нашу 
работу, открывая максимально точное определение критериев 
качества для каждого клиента, и стараемся даже несколько их ревзойти.

                        </Typography>
            </Paper>
                </Grid>
                <Grid item xs={6} sx={{marginTop:"10px"}}>
                 <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
          </Grid>
        </Grid>
      </Container>
    </>
    );
};

export default AboutUs;