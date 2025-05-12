import Rotas from "./Rotas";
import History from "./assets/services/History";
import "./App.css";
import {
  BrowserRouter as Router,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router History={History}>
        <Rotas />
      </Router>
    </>
  );
}

export default App;
