import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"


  
const Step4Form = () => {
    const history = useHistory()

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // En la consola se puede apreciar cada uno de los valores del form
        for (let [key, value] of formData.entries()) {
            console.log(key, value)
        }

        // Comentar esto para pausar el cambio de pagina y poder ver la consola
        history.push('/step2')
    }

    return (
        <div classNameName="Containe-fluid"> 
                <h2> 
                    <span className="badge badge text-bg-dark">
                        Consumo de TINTAS
                    </span>
                </h2>

        <form onSubmit={onSubmit}>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h3>Tripa (A)</h3>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro con texto</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro + texto + ilustracion</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Azul Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Rojo Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Amarillo Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Medios Tonos (un color)</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con texto</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con trama</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con plastificado</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Barniz (UV)</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div class="col order-5">
                        <h3>Tripa (B)</h3>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro con texto</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro + texto + ilustracion</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Azul Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Rojo Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Amarillo Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Medios Tonos (un color)</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con texto</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con trama</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con plastificado</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Barniz (UV)</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                <br />
                
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h3>Portada</h3>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro con texto</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro + texto + ilustracion</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Azul Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Rojo Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Amarillo Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Medios Tonos (un color)</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con texto</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con trama</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con plastificado</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Barniz (UV)</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                        <div class="col order-5">
                        <h3>Otro Formato</h3>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro con texto</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro + texto + ilustracion</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Azul Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Rojo Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Amarillo Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro Cuatricomia</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Medios Tonos (un color)</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con texto</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con trama</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con plastificado</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Barniz (UV)</option>
                                <option value="1">Si</option>
                                <option value="2">No</option>
                            </select>
                        </div>
                    </div>
                </div>     
       
                <nav aria-label="Page navigation example">
                    <br />
                    <ul className="pagination">
                        <li className="page-item page-link">
                            <Link to="/step3">
                                Anterior
                            </Link>
                        </li>
                        <button type="submit" className="btn btn-primary">Siguiente</button>
                    </ul>
                </nav>

                </form>
        </div>

        
    )
}
export default Step4Form
