import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import { Main } from "../components/main/Main";
import WhatATon from "../components/WhatATon/WhatATon";
import { Profile } from "../components-2/Profile/Profile";

const Home = () => {
  return (
    <>
      <Link to="/user/1">To userpage</Link>
      <Hero />
      <Main />
      <WhatATon />
      <Profile/>
    </>
  );
};

export default Home
