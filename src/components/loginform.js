import React, {useState} from "react";
// import GoogleLogin from "react-google-login";
// import { gapi } from "gapi-script";
import "./loginform.css"

const LoginForm = () => {

    const [popupStyle, ShowPopup] = useState("hide")
   
    const popup = () => {
        ShowPopup("login-popup")
        setTimeout(() => ShowPopup("hide"), 3000)
    }

    return (
        <div className="cover">
            <h1>Ingresar</h1>
            <input type="text" placeholder="Usuario"/>
            <input type="password" placeholder="Contraseña"/>

            <div className="Login-btn" onClick={popup}>Ingresar</div>

            <p className="text">O Ingresar usando</p>

            <div className="alt-login">
                <div className="facebook"><i class="bi bi-facebook"></i></div>
                <div className="google"><i class="bi bi-google"></i></div>        
            </div>

            <div className={popupStyle}>
                <h3>inicio de sesion fallido</h3>
                <p>Usuario o contraseña incorrecta</p>
                
            </div>
              
        </div>
    )
}

export default LoginForm