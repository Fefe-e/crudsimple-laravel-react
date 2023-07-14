import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
//Se importan los componentes
import ShowDocuments from "./components/ShowDocuments";
import CreateDocument from "./components/CreateDocument";
import EditDocument from "./components/EditDocument";
import ViewDocument from "./components/ShowDocument";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowDocuments />} />
          <Route path="/create" element={<CreateDocument />} />
          <Route path="/edit/:id" element={<EditDocument />} />
          <Route path="/view/:id" element={<ViewDocument />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
