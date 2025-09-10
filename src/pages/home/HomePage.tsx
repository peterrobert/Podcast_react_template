import {
  FeaturedEpisode,
  HeaderSection,
  LatestEpisode,
  StatisticsSection,
  AboutSection,
  NewsLetterSection,
  TestimoniesSection,
  ContactSection,
} from ".";

// Dummy Data
// TODO: Replace dummy data with API integration
import { featuredEpisode, episodes, testimonies } from "../../../dummyData.ts";

const HomePage = () => {
  return (
    <>
      <HeaderSection {...featuredEpisode} />
      <FeaturedEpisode {...featuredEpisode} />
      <LatestEpisode data={episodes} />
      <StatisticsSection />
      <AboutSection />
      <NewsLetterSection />
      <TestimoniesSection data={testimonies} />
      <ContactSection />
    </>
  );
};

export default HomePage;
