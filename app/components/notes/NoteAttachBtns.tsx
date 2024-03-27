import * as React from 'react';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ImageIcon from '@mui/icons-material/Image';
import Stack from '@mui/material/Stack';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { grey } from '@mui/material/colors';
import Badge from '@mui/material/Badge';



export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={4}>
     <Badge badgeContent={4} color="secondary">
        <OndemandVideoIcon color="action" />
    </Badge>
    <Badge badgeContent={3} color="secondary">
        <ImageIcon color="action" />
    </Badge>
    <Badge badgeContent={1} color="secondary">
        <AttachmentIcon color="action" />
    </Badge>
    </Stack>
  );
}