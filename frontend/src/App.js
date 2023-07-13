import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//se importa el componente
import ShowProducts from "./components/ShowProducts";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
import ViewProduct from "./components/ShowProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
          <Route path="/view/:id" element={<ViewProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
