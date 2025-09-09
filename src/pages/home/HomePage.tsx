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
import AppPlayer from "../../components/stickyPlayer.tsx/AppPlayer.tsx";
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
      <AppPlayer />
    </>
  );
};

export default HomePage;
