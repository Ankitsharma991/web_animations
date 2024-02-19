import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Components/Basics/Index";

function App() {
  return (
    <>
      <div>
        <p>Web Animations</p>
      </div>
      <Router>
        <Routes>
          <Route path="/index" Component={Index} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
