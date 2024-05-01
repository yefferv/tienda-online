import CrCard from "../components/CrCard"
import { Box, Container, Grid } from "@mui/material";
import HomeLayaout from "./HomeLayaout";
import useApi from "./hook/useApi";
import CenteredCircularProgress from "../components/CenteredCircularProgress";



const Home = () => {
  const {data, loading} = useApi(import.meta.env.VITE_API_URL)


  return (
    <HomeLayaout>
      <Container maxWidth="lg">
        <Box mt={5} display={'flex'} gap={2} >
            {loading?
            <CenteredCircularProgress />
            :
            <Grid container spacing={2}>
            {data.map((item : any)=>
                <Grid item key={item.id} xs={12} sm={6} md={4} lg={3} xl={6}>
                  <CrCard item = {item}/>
                </Grid>
            )}
            </Grid>}
        </Box>
      </Container>

  
    </HomeLayaout>
    
  )
}

export default Home
