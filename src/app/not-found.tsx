import Link from "next/link";

import { Box, Button, Stack, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <>
      <Stack
        bgcolor={"#121212"}
        height={"100vh"}
        direction={"column"}
        justifyContent={"space-between"}
        px={5}
      >
        {/* header */}
        <Box
          sx={{
            width: "100%",
            height: 100,
            borderRadius: 2,
            bgcolor: "#353535",
          }}
        />

        <Stack alignItems={"center"} spacing={5}>
          <Typography
            sx={{ fontWeight: 500, fontSize: "2rem", color: "white" }}
          >
            اوه اوه صفحه رو اشتباه اومدی برو برگرد...
          </Typography>

          <Stack spacing={2}>
            <Button
              variant="outlined"
              size="large"
              color="error"
              sx={{ bgcolor: "#f0f4ff1a" }}
            >
              <Link href="/home">برگشت به صفحه اصلی</Link>
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="success"
              sx={{ bgcolor: "#f0f4ff1a" }}
            >
              <Link href="/" target="_blank">
                تسک جدید
              </Link>
            </Button>
          </Stack>
        </Stack>

        {/* footer  */}
        <Box
          sx={{
            width: "100%",
            height: 100,
            borderRadius: 2,
            bgcolor: "#353535",
          }}
        />
      </Stack>
    </>
  );
};

export default NotFound;
