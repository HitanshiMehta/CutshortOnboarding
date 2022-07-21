import { OnBoarding } from "./pages/OnBoarding";
import { ThemeContextWrapper } from "./Theme/ThemeWrapper";

function App() {
  return (
    <div className="App d-flex">
      <ThemeContextWrapper>
        <OnBoarding />
      </ThemeContextWrapper>
    </div>
  );
}

export default App;
