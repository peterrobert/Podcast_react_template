import { EpisodesSection, HeaderSection, TrendingSection } from ".";
import { episodes } from "../../../dummyData";

const EpisodesPage = () => {
  return (
    <>
      <HeaderSection />
      <EpisodesSection data={episodes} />
      <TrendingSection />
    </>
  );
};

export default EpisodesPage;
