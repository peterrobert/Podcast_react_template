import {
  FeaturedEpisode,
  HeaderSection,
  LatestEpisode,
  StatisticsSection,
  AboutSection,
  NewsLetterSection,
  TestimoniesSection,
} from ".";
// --- Dummy Data ----
import { featuredEpisode, episodes, testimonies } from "../../../dummyData.ts";

const HomePage = () => {
  return (
    <>
      <HeaderSection />
      <FeaturedEpisode {...featuredEpisode} />
      <LatestEpisode data={[...episodes]} />
      <StatisticsSection />
      <AboutSection />
      <NewsLetterSection />
      <TestimoniesSection data={[...testimonies]} />
    </>
  );
};

export default HomePage;
