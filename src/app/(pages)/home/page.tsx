import React, { type FunctionComponent } from "react";

import HomePageView from "@/view/(pages)/home";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <>
      <HomePageView />
    </>
  );
};

export default HomePage;
