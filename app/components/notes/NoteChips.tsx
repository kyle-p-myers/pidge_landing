import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import CircleIcon from '@mui/icons-material/Circle';

export default function NoteChips() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Chip className="w-20 h-6" variant="outlined" color="error" label="High" icon={<CircleIcon 
        sx={{ fontSize: 12 }}
        />} />
        <Chip className="text-slate-400 w-20 h-6 border-slate-400" variant="outlined" label="Accouting" size="small"  />
      </Stack>
    </div>
  );
}
