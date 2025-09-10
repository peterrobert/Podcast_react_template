import AppFooter from "./components/footer";
import { AppNavigation } from "./components/navigation";
import { AppPlayer } from "./components/stickyPlayer";

import { HomePage } from "./pages/home";

function App() {
  return (
    <>
      <AppNavigation />
      <HomePage />
      <AppFooter />
      <AppPlayer />
    </>
  );
}

export default App;
