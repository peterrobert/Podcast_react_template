import { useState } from "react";
import AppFooter from "./components/footer";
import { AppNavigation } from "./components/navigation";
import { AppPlayer } from "./components/stickyPlayer";
import { EpisodesPage } from "./pages/episodes";
// import { HomePage } from "./pages/home";

function App() {
  const [showPlayer] = useState(true);

  return (
    <>
      <AppNavigation />
      {/* <HomePage /> */}
      <EpisodesPage />
      <AppFooter />
      <AppPlayer showPlayer={showPlayer} />
    </>
  );
}

export default App;
