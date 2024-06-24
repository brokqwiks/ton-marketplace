import { Link } from "react-router-dom";
import Hero from "../components/Hero/Hero";
import { Main } from "../components/main/Main";

const Home = () => {
  return (
    <>
      <Link to="/user/1">To userpage</Link>
      <Hero />
      <Main />
    </>
  );
};

export default Home
