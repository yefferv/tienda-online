import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

interface Props {
  visible : boolean
}
export default function CrChips({visible}:Props) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1}>
        <Chip label="50% off" color="success" style={{ display: visible ? 'block' : 'none' }}/>
      </Stack>     
    </Stack>
  );
}
