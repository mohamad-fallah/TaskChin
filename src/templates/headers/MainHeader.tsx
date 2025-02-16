import Navbar from "@/templates/navbar/Navbar";
import { Box, Stack, Typography } from "@mui/material";
import React, { type FunctionComponent } from "react";

interface MainHeaderProsp {}

const MainHeader: FunctionComponent<MainHeaderProsp> = () => {
  return (
    <Stack
      sx={{ bgcolor: "#3d83d8", height: 70, px: 2 }}
      justifyContent={"space-between"}
      alignItems={"center"}
      direction={"row"}
    >
      {/* <Navbar /> */}

      {/* logo */}
      <Typography
        variant="h1"
        sx={{ fontSize: "3rem", fontWeight: 600, color: "white" }}
      >
        TaskChin
      </Typography>
    </Stack>
  );
};

export default MainHeader;
