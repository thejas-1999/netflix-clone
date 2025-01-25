import "./Home.css";
import hero from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";

const HomeScreen = () => {
  return (
    <div className="home">
      <div className="hero">
        <img src={hero} alt="hero-banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="title" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in the modern Istanbul embarks on ann quest to save the city from an
            immortal enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards title={"Popular"} />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics for You"} />
      </div>
    </div>
  );
};
export default HomeScreen;
