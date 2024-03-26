import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function NoteChips() {
  return (
    <div>
      <Stack direction="row" spacing={4}>
        <Chip label="High" color="error" size="small" />
        <Chip variant="outlined" label="Accouting" size="small" />
      </Stack>
    </div>
  );
}
