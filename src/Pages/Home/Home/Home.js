import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

import Review from "./Review/Review";
import Designer from "../Designer/Designer";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Designer></Designer>
      <Categories></Categories>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default Home;
