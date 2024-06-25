import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "../../router";
import GlobalStyle from '../../../GlobalStyle';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppRoutes />
    </Router>
  );
}

export default App;
