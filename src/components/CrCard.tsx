import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CrChips from './CrChips';
import CrRating from './CrRating';

export default function CrCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
        title="green iguana"
        />
      <CardContent>
        <CrChips></CrChips>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <CrRating></CrRating>
      </CardContent>
      <CardActions>
        <Button size="small" variant='contained'>Agregar</Button>
      </CardActions>
    </Card>
  );
}
