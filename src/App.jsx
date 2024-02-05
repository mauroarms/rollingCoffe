import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css"

import Footer from "./components/common/Footer"
import BarraNavegacion from "./components/common/BarraNavegacion"

import Index from "./components/pages/Index";
import Administrador from "./components/pages/Administrador"
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <>
      <BarraNavegacion/>

        {/* <Index></Index> */}
        {/* <Administrador></Administrador> */}
        <Error404></Error404>

      <Footer/>
    </>
  );
}

export default App;
