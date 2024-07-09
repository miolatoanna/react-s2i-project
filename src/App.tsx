import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {FavouritePage} from "./pages/favourite/FavouritePage";
import {RecipesPage} from "./pages/recipes/RecipesPage";
import {NavBar} from "./components/core/NavBar";
import {SingleRecipePage} from "./pages/recipes/SingleRecipePage";

function App() {
  return (
              <BrowserRouter>
                  <NavBar />
                  <div className="page">
                      <Routes>
                          <Route path="recipes" element={<RecipesPage />} />
                          <Route path="infoRecipe/:id" element={<SingleRecipePage />} />
                          <Route path="favourite" element={<FavouritePage />} />
                          <Route path="*" element={<Navigate to="recipes" />} />
                      </Routes>
                  </div>
              </BrowserRouter>
  )
}

export default App
