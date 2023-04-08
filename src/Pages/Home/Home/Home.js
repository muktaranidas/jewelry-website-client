import React from "react";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";

import Review from "./Review/Review";
import Designer from "../Designer/Designer";
import Contact from "./Contact/Contact";
import About from "./About/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Designer></Designer>
      <Categories></Categories>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default Home;
