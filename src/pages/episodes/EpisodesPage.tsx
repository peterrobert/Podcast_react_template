import { EpisodesSection, HeaderSection } from ".";
import { episodes } from "../../../dummyData";

const EpisodesPage = () => {
  return (
    <>
      <HeaderSection />
      <EpisodesSection data={episodes} />
    </>
  );
};

export default EpisodesPage;
