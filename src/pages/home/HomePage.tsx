import {
  FeaturedEpisode,
  HeaderSection,
  LatestEpisode,
  StatisticsSection,
  AboutSection,
} from ".";
// --- Dummy Data ----
import { featuredEpisode, episodes } from "../../../dummyData.ts";

const HomePage = () => {
  return (
    <>
      <HeaderSection />
      <FeaturedEpisode {...featuredEpisode} />
      <LatestEpisode data={[...episodes]} />
      <StatisticsSection />
      <AboutSection />
    </>
  );
};

export default HomePage;
