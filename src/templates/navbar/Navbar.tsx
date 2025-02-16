import { Stack, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <Stack
      sx={{
        bgcolor: "#3d83d8",
        height: "100vh",
        width: 200,
        borderRadius: 5,
        mt: 2,
        mx: 1.5,
        p: 3,
      }}
      direction={"column"}
    >
      <Stack gap={2}>
        <Typography sx={{ fontSize: "22px", color: "white" }}>
          پیشخوان
        </Typography>
        <Typography sx={{ fontSize: "22px", color: "white" }}>
          مدیریت پروژه
        </Typography>
        <Typography sx={{ fontSize: "22px", color: "white" }}>
          تودو لیست
        </Typography>
        <Typography sx={{ fontSize: "22px", color: "white" }}>تقویم</Typography>
        <Typography sx={{ fontSize: "22px", color: "white" }}>
          رویداد ها
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Navbar;
