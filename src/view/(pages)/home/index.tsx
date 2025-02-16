import { Box, Typography } from "@mui/material";
import React, { FunctionComponent } from "react";

interface HomePageViewProps {}

const HomePageView: FunctionComponent<HomePageViewProps> = () => {
  return (
    <>
      <div>
        <Typography sx={{ color: "red" }}>سلام به دنیای جدید</Typography>
      </div>
    </>
  );
};

export default HomePageView;
