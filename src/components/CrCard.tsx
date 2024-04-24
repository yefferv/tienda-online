import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CrChips from './CrChips';
import CrRating from './CrRating';
import { Stack } from '@mui/material';
import CrBtnAccion from './CrBtnAccion';
import { useState } from 'react';
import CrModal from './CrModal';
import { Product } from '../types/Product';
import { useHistory } from 'react-router-dom';


interface Props {
    item: Product
}
export default function CrCard({ item }: Props) {
    const [isCheck, setValor] = useState(true)

    const [open, setOpen] = useState(false);

    const history = useHistory();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        history.push(`/detalles/${item.id}`)
    };
    
    const handleCheck = ()=>{
        setValor(!isCheck)
    }

  return (
    <>
    
        <Card sx={{ maxWidth: 345 }}>
            <Stack direction="row" m={2} spacing={2}>
                <CrChips></CrChips>
            </Stack>
        <CardMedia
            sx={{ height: 300 }}
            component={'img'}
            style={{
                width:"200",
                height:"200",
                objectFit:"contain"

            }}
            alt='green iguana'
            image= {item.image}
            title="green iguana"
            />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {item.description}
            </Typography>
            <CrRating></CrRating>
        </CardContent>
        <CardActions sx={{
            display:'flex',
            justifyContent: 'space-between'

        }}>
            <CrBtnAccion isShow isCheck={isCheck} handleShow={handleClickOpen } ></CrBtnAccion>
            <CrBtnAccion isCheck={isCheck} handleCheck={handleCheck} ></CrBtnAccion>
            
        </CardActions>
        </Card>
        <CrModal open={open} handleClose={handleClose} title={item.title} precio={item.price} image={item.image}></CrModal>
    </>
  );
}
