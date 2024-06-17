import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "../../router";
import "../../App.css";
function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;