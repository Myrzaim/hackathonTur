import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <Box style={{ height: 150 , paddingTop: 70, paddingBottom:10}}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#4C4F50 "
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} sx={{display:"flex", justifyContent:"center"}}>
           
            <Grid style={{paddingTop:20}} item xs={12} sm={1.5}>
              <Box >Parnters</Box>
              <hr/>
              <Box>
                <Link href="/" style={{color:"white"}}>
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" style={{color:"white"}}>
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid style={{paddingTop:20}} item xs={12} sm={1.5}>
              <Box >Parnters</Box>
              <hr/>
              <Box>
                <Link href="/" style={{color:"white"}}>
                Kyrgyzstan
                </Link>
              </Box>
              <Box>
                <Link href="/" style={{color:"white"}}>
                  +996 507 234 345
                </Link>
              </Box>
            </Grid>
            
          </Grid>
          <Box style={{paddingTop:20}} textAlign="center" pt={{ xs: 5, sm: 10 }} 
          pb={{ xs: 5, sm: 0 }}>
          Copyright © TourRadar. All Rights Reserved. &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;