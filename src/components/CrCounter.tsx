import { useState } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const CrCounter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  };

  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={handleDecrement} color="primary">
        <RemoveIcon />
      </IconButton>
      <Typography variant="h6" component="span" sx={{ mx: 2 }}>
        {count}
      </Typography>
      <IconButton onClick={handleIncrement} color="primary">
        <AddIcon />
      </IconButton>

    </Box>
  );
};

export default CrCounter;