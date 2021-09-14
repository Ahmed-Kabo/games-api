import { Router } from "react-router";
import GlobalStyle from "./components/GlobleStyled";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router path={["/game/:id", "/"]}>
        <Home />
      </Router>
    </div>
  );
}

export default App;
