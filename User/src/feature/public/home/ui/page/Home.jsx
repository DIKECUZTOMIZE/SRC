import React from "react";
import Banner from "../components/Banner/Banner";
import ChooseCar from "../components/chooseCar/ChooseCar";

import AvailableCars from "../components/availableCar/AvailableCar";
import WhyUs from "../components/whyUs/WhyUs";
import ExclusiveDeals from "../components/exclusiveDeals/ExclusiveDeals";

const Home = () => {
  return (
    <>
      <Banner />
      <ChooseCar />
      <AvailableCars />
      <WhyUs />
      <ExclusiveDeals />
    </>
  );
};

export default Home;
