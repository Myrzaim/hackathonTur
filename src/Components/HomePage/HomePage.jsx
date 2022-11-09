import { Grid } from '@mui/material';
import React from 'react';
import styles from "./HomePage.css";
import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import zIndex from '@mui/material/styles/zIndex';

const HomePage = () => {
    const image = 'https://s3-alpha-sig.figma.com/img/474a/414c/3532f08d53c1e75eb05fc07505235c25?Expires=1668988800&Signature=gIN7YhWmNrOdFvgRmOGSIEUA9wc8EH~FfVqVVCze3FF8j76wIQofw68OJZVv4A1J3TcxXP941TRH-xmOTSO16ixr83Ehu0vGoQD5p7W9VedwLs6dOJpj7I88Koz3qC6Dul9aeHWvZwFK-WWVIM1B9nwtTGH~QZVDPnkl7ndndlEJGMshYA6LJB~XfyEfBN4oeX1miZBiTkoRSrqyncriVAgBqCxZn89Gtj7g84dQVQmgmzATbh8tSHa8EhrF2wQ0iCU9vKLv0os8MJ3VXbJYVOQ5KbI0IgVMp4E~VZeYLIgzfMX2FGIQ6yuE8pF-Iva0Q3Z7wZZjqB4QbtecA4DTrw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA';

    return (<>
        <Grid style={{ position:"relative"}}>
            <img src={`${image}`} width={'100%'} height={'500px'} alt="" />
        </Grid>
        <Grid style={{ position: "absolute", left: '30%', top: '35%', textAlign: 'center' }}>
            <hr />
            <Typography style={{ color: 'white', fontSize: 50 }}>Traveline</Typography>
            <hr />
        <Typography style={{color:'#403d35', fontSize:30}}>Предлагает вам самые лучшие туры</Typography>
    </Grid>
    </>
    );
};

export default HomePage;