import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';

import VisibilityIcon from '@mui/icons-material/Visibility';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Grid } from '@mui/material';
import { turContext } from '../../Context/TurContextProvider';
import { useNavigate } from 'react-router-dom';




const TurCard = ({ obj }) => {
  
  const { deleteTur } = useContext(turContext);
  const navigate = useNavigate();
  let desc = obj.desc.toString().substring(0, 130)+'...';
    return (
        <Card sx={{ maxWidth: 345 }} style={{ height:420, borderRadius: "6%"}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image = {obj.img}
        />
        <CardContent>
          <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid>
            <Typography gutterBottom variant="h5" component="div">
            {obj.continent}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {obj.country}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
          {obj.city}
              </Typography>
              </Grid>
          <Button startIcon={<AttachMoneyIcon />} size ="large">
            {obj.price}
            </Button>
          </Grid>
            
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <Button size="small" startIcon={<VisibilityIcon />}
            onClick={() => navigate(`/view/${obj.id}`)}>
          </Button>
          <Button size="small" startIcon={<DeleteIcon />} onClick={()=>deleteTur(obj.id)}>
          </Button>
          
          
        </CardActions>
      </Card>
    );
};

export default TurCard;