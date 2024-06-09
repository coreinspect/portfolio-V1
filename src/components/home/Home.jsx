import "./home.css";
import Data from "./Data";
import Social from "./Social";
import ScrollDown from "./ScrollDown";
const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
