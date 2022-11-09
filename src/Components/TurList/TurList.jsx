import { Grid, Typography } from '@mui/material';
import React, { useContext } from 'react';
import TurCard from '../TurCard/TurCard';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import "./TurList.css";
import { Link,useSearchParams} from "react-router-dom";
import { turContext } from '../../Context/TurContextProvider';
import { useEffect,useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Filter from '../Filter/Filter';
import Box from '@mui/material/Box';






const TurList = () => {
  const { tursArr, readTur, pageTotalCount } = useContext(turContext);
 
  const [paramsSearch, setParamsSearch] = useSearchParams();

  const [country, setCountry] = useState("all");
    const [page, setPage] = useState(1);
    useEffect(() => {
      if (country === "all") {
        setParamsSearch({
          q: paramsSearch.get("q") || "", // null || ""
          _page: page,
          _limit: 3,
        });
      } else {
        setParamsSearch({
          country:country ,
          _page: page,
          _limit: 3,
        });
      }
    }, [paramsSearch, country, page]);

    useEffect(() => {
        readTur();
      }, [paramsSearch,page]);

    

    return (
      <Grid py={3} mx={6}>
        <Grid mx={20} sx={{
          display: "flex",
          alignItems:"center",
          justifyContent:"flex-end"
          }}>
            <Filter
              country={country}
            setCountry={setCountry} />
          <Box style={{width:'1%'}} />
          <Link to='/add' >
            
        <Button className='AddBtn' variant="contained" startIcon={<AddIcon />}>
            Добавить
        </Button>
        </Link>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="flex-start"
        sx={{ width: "90%" }}
        mx="auto"
        my="40px">
            {tursArr
          ? tursArr.map((item) => (
              <Grid item={true} xs={3.5} mb={7} key={item.id}>
                <TurCard obj={item} />
              </Grid>
            ))
                    : null}
        </Grid>
        <Grid
        sx={{ width: "30%", display: "flex", justifyContent: "center" }}
        mx="auto"
        my="20px"
      >
        <Pagination
          count={+pageTotalCount}
          value={1}
          color="primary"
          page={+page}
          onChange={(e, value) => setPage(value)}
        />
      </Grid>
            </Grid>
    );
};

export default TurList;