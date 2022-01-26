import {
    BrowserRouter as Router,
    Route,
    Routes
  } from "react-router-dom";

  import { Cart } from "./pages/Cart";
  import { Catalog } from "./pages/catalog";
  
  export function AppRoutes(){
      return(
          //Vai fornecer informações pros componentes abaixo dele, pra eles entenderem quais rotas estão, qual comoponente deve aparecer
          <Router>
              <Routes>
                <Route path="/catalog" element={<Catalog/>} />  
                
                <Route path="/Cart" element={<Cart/>} />  
              </Routes>
          </Router>
      )
  }