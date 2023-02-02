import React from "react"
import { Link } from "react-router-dom"


  
const Step4Form = () => {
    return (
        <div classNameName="Container"> 
                <h2> 
                    <span className="badge badge text-bg-dark">
                        Consumo de TINTAS
                    </span>
                </h2>
            

                                    <p>Negro con texto
                                    Negro + texto + ilustracion
                                    Azul Cuatricomia
                                    Rojo Cuatricomia
                                    Amarillo Cuatricomia
                                    Negro Cuatricomia
                                    Medios Tonos (un color)
                                    Fondo con texto
                                    Fondo con trama
                                    Fondo con plastificado
                                    Barniz (UV)
                                    </p>                
                

            {/* Mientras tanto para poder volver a atras */}
            <nav aria-label="Page navigation example">
                <br />
                    <ul className="pagination">
                        <li className="page-item page-link">
                            <Link to="/step3">
                                Step 3
                            </Link>
                        </li>
                        <li className="page-item disabled">
                            <span className="page-link">
                                Step 4
                            </span>
                        </li>
                        <li className="page-item page-link">
                            <Link to="/step5">
                                Step 5
                            </Link>
                        </li>
                    </ul>
            </nav>

        </div>

        
    )
}
export default Step4Form
