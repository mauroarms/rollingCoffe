import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {

    // LOGICA PARA PROTEGER Y LLEVAR RUTAS ADMIN, CHEQUEANDO QUE ES ADMINISTRADOR

    const loginAdmin = JSON.parse(sessionStorage.getItem("loginRollingCoffe")) || null;

    if(!loginAdmin){
        //no consiguio el admin en sessionStorage
        return <Navigate to="/login"></Navigate>
    }else{
        //es admin 
        return children;
    }


};

export default RutasProtegidas;