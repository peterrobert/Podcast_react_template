import { useState } from "react";
import AppFooter from "./components/footer";
import { AppNavigation } from "./components/navigation";
import { AppPlayer } from "./components/stickyPlayer";
import { EpisodesPage } from "./pages/episodes";
// import { HomePage } from "./pages/home";
const sampleEpisode = {
  title: "The Portfolio That Hired You",
  podcast: "EchoWave",
  audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  imageUrl:
    "https://storage.googleapis.com/uxpilot-auth.appspot.com/4867b0625f-678453729d75459b9577.png",
};

function App() {
  const [showPlayer] = useState(true);

  return (
    <>
      <AppNavigation />
      {/* <HomePage /> */}
      <EpisodesPage />
      <AppFooter />
      <AppPlayer showPlayer={showPlayer} episode={sampleEpisode} />
    </>
  );
}

export default App;
