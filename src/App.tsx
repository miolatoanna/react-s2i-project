import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {RecipesPage} from "./pages/RecipesPage";
import {NavBar} from "./components/core/NavBar";
import {SingleRecipePage} from "./pages/SingleRecipePage";
import {Footer} from "./components/core/Footer";

function App() {
  return (
              <BrowserRouter>
                  <NavBar />
                  <div className="page">
                      <Routes>
                          <Route path="recipes" element={<RecipesPage />} />
                          <Route path="infoRecipe/:id" element={<SingleRecipePage />} />
                          <Route path="*" element={<Navigate to="recipes" />} />
                      </Routes>
                  </div>
                  <Footer/>
              </BrowserRouter>
  )
}

export default App
