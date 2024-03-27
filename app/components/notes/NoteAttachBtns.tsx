import * as React from 'react';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ImageIcon from '@mui/icons-material/Image';
import Stack from '@mui/material/Stack';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { grey } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import Divider from '@mui/material/Divider';



export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={4}
    divider={<Divider orientation="vertical" flexItem />}>
     <Badge badgeContent={4} color="success">
        <OndemandVideoIcon color="action"  />
    </Badge>
    <Badge badgeContent={3} color="success">
        <ImageIcon color="action" />
    </Badge>
    <Badge badgeContent={1} color="success">
        <AttachmentIcon color="action" />
    </Badge>
    </Stack>
  );
}