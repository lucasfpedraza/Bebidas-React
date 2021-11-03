import { Fragment } from "react";
import Formulario from "./components/Formulario"
import Header from "./components/Header";
import ListaRecetas from "./components/ListaRecetas";
import CategoriasProvider from './content/CategoriasContext'
import RecetasProvider from './content/RecetasContext'
import ModalProvider from './content/ModalContext'


function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
      <Header />

      <div className="container mt-5">
        <div className="row">
            <Formulario />
        </div>

        <ListaRecetas />
      </div>
      </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;