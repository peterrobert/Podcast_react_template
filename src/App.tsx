import AppFooter from "./components/footer";
import { AppNavigation } from "./components/navigation";
import { HomePage } from "./pages/home";

function App() {
  return (
    <>
      <AppNavigation />
      <HomePage />
      <AppFooter />
    </>
  );
}

export default App;
