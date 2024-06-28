import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import { Main } from "../components/main/Main";
import WhatATon from "../components/WhatATon/WhatATon";
import { Profile } from "../components-2/Profile/Profile";
import { ProfileSeller } from "../components-3/ProfileSeller/ProfileSeller";

const Home = () => {
  return (
    <>
      <Link to="/user/1">To userpage</Link>
      <Hero />
      <Main />
      <WhatATon />
      <Profile/>
      <ProfileSeller/>
    </>
  );
};

export default Home
