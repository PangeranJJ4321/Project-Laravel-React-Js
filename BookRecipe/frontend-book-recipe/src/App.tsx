import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import SearchDetails from "./pages/SearchDetails";
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Router>  
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<SearchDetails />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
