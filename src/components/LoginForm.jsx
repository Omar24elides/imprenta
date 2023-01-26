import React, {useState} from "react";
import "./loginform.css"

const LoginForm = () => {

    const [popupStyle, ShowPopup] = useState("hide")
   
    const popup = () => {
        ShowPopup("login-popup")
        setTimeout(() => ShowPopup("hide"), 3000) 
    }

    return (
        <div className="cover">
                        <div className='container'>
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="https://imprentadelacultura.wordpress.com/">
                        <img src="https://imprentadelacultura.files.wordpress.com/2015/04/logo-imprenta.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                        Fundacion Imprenta de la Cultura
                    </a>
                </nav>
            </div>
            <h1>Ingresar</h1>
            <input type="text" placeholder="Usuario"/>
            <input type="password" placeholder="Contraseña"/>

            <div className="Login-btn" class="btn btn-outline-primary" onClick={popup}>Ingresar</div>

            <p className="text" class="btn btn-outline-primary">O Ingresar usando</p>

            <div className="alt-login">
                <div className="facebook" class="btn btn-outline-danger"><i class="bi bi-facebook"></i></div>
                <div className="google" class="btn btn-outline-danger"><i class="bi bi-google"></i></div>        
            </div>

            <div className={popupStyle}>
                <h3>inicio de sesion fallido</h3>
                <p>Usuario o contraseña incorrecta</p>
                
            </div> 
            <footer class="bg-dark text-white text-center container p-4 rounded">
                <div class="d-lg-flex justify-content-between">

                    <div class="copyright">
                        <p >Imprenta Nacional de la cultura </p>
                    </div>
                    <div>
                        <ul class="d-flex gap-3 list-unstyled">
                        <li><a href="https://www.instagram.com/ImprentaCultura/" Target="_blank"><i class="bi bi-facebook"></i></a></li>
                        <li><a href="https://twitter.com/ImprentaCultura/" Target="_blank"><i class="bi bi-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/Laimprentadelacultura/" Target="_blank"><i class="bi bi-instagram"></i></a></li>
                        <li><a href="https://imprentadelacultura.wordpress.com/" Target="_blank"><i class="bi bi-wordpress"></i></a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
        
    )
}

export default LoginForm