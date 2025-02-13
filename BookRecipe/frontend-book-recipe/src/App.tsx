import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Browse from "./pages/Browse";
import SearchDetails from "./pages/SearchDetails";
import { SearchProvider } from "./context/SearchContext";
import CategoryDetails from "./pages/CategoryDetails";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <SearchProvider>
      <Router>  
        <Routes>
          <Route path="/" element={<Browse />} />
          <Route path="/search" element={<SearchDetails />} />
          <Route path="/category/:slug" element={<CategoryDetails />} />
          <Route path="/recipe/:slug" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
