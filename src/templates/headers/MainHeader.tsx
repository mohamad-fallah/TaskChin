import Navbar from "@/templates/navbar/Navbar";
import { Box, Stack, Typography } from "@mui/material";
import React, { type FunctionComponent } from "react";

interface MainHeaderProsp {}

const MainHeader: FunctionComponent<MainHeaderProsp> = () => {
  return (
    <>
      <Stack
        sx={{
          bgcolor: "#3d83d8",
          height: 70,
          mt: 1,
          mx: "auto",
          px: 2,
          borderRadius: 5,
          width: "1800px",
        }}
        alignItems={"center"}
        direction={"row"}
        zIndex={999}
      >
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={"row"}
        >
          {/* logo */}
          <Typography
            variant="h1"
            sx={{ fontSize: "3rem", fontWeight: 600, color: "white" }}
          >
            TaskChin
          </Typography>
        </Stack>
      </Stack>

      <Navbar />
    </>
  );
};

export default MainHeader;
