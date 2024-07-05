import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {LoginPage} from "./pages/login/LoginPage";
import {FavouritePage} from "./pages/favourite/FavouritePage";
import {RecipesPage} from "./pages/recipes/RecipesPage";
import {NavBar} from "./components/core/NavBar";

function App() {
  return (
              <BrowserRouter>
                  <NavBar />
                  <div className="page">
                      <Routes>
                          <Route path="recipes" element={<RecipesPage />} />
                          <Route path="favourite" element={<FavouritePage />} />
                          <Route path="login" element={<LoginPage />} />
                          <Route path="*" element={<Navigate to="recipes" />} />
                      </Routes>
                  </div>
              </BrowserRouter>
  )
}

export default App
