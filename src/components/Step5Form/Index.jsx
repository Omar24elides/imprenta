import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Store } from "../../utils/store";
import { useContext } from "react";

const Step5Form = () => {
    const history = useHistory()
    const { dispatch } = useContext(Store)


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        let newPlancha = {}
        // En la consola se puede apreciar cada uno de los valores del form
        for (let [key, value] of formData.entries()) {
            newPlancha[key] = value
        }

        dispatch({ type: 'STEP_5', payload: { ...newPlancha } })

        // Comentar esto para pausar el cambio de pagina y poder ver la consola
        history.push('/step6') 
    }
    return (
        <div className="container-fluid">
            <h2> 
                <span className="badge badge text-bg-dark">Consumo de Planchas y Peliculas
                </span>
                <br />
            </h2>
            <form onSubmit={onSubmit}>
                <div class="container text-center">
                    <div class="row g-2">
                        <div class="row row-cols-2">
                            <div class="col">
                                <div className="col dropdown  ">
                                    <h5> Tripa (A) </h5>
                                    <fieldset className="form-group">
                                        <div className="col dropdown  ">
                                            <h3> Formato </h3>
                                                <select class="form-select" placeholder="Formato" aria-label="Default select example">
                                                    <option name="tripaA" value="1 Pliego">1 Pliego</option>
                                                    <option name="tripaA" value="1/2 Pliego">1/2 Pliego</option>                                                  
                                                    <option name="tripaA" value="1/4 Pliego">1/4 Pliego</option>                                                
                                                </select>
                                        </div>
                                    </fieldset >
                                </div>
                            </div>
                            <div class="col">
                                <h5> Tripa (B) </h5>
                                <fieldset className="form-group">
                                        <div className="col dropdown  ">
                                            <h3> Formato </h3>
                                                <select class="form-select" placeholder="Formato" aria-label="Default select example">
                                                    <option name="tripaB" value="1 Pliego">1 Pliego</option>
                                                    <option name="tripaB" value="1/2 Pliego">1/2 Pliego</option>
                                                    <option name="tripaB" value="1/4 Pliego">1/4 Pliego</option>
                                                </select>
                                        </div>
                                    </fieldset >
                            </div>
                            <div class="col">
                            <fieldset className="form-group">
                                <h5> Portada</h5>
                                        <div className="col dropdown  ">
                                            <h3> Formato </h3>
                                                <select class="form-select" placeholder="Formato" aria-label="Default select example">
                                                    <option name="portada" value="1 Pliego">1 Pliego</option>
                                                    <option name="portada" value="1/2 Pliego">1/2 Pliego</option>
                                                    <option name="portada" value="1/4 Pliego">1/4 Pliego</option>
                                                </select>
                                        </div>
                                    </fieldset >
                            </div>
                            <div class="col">
                            <fieldset className="form-group">
                            <h5> Otro Formato</h5>
                                        <div className="col dropdown  ">
                                            <h3> Formato </h3>
                                                <select class="form-select" placeholder="Formato" aria-label="Default select example">
                                                    <option name="otroFormato" value="1 Pliego">1 Pliego</option>
                                                    <option name="otroFormato" value="1/2 Pliego">1/2 Pliego</option>
                                                    <option name="otroFormato" value="1/4 Pliego">1/4 Pliego</option>                                                
                                                </select>
                                        </div>
                                    </fieldset >
                            </div>
                        </div>
                    </div>
                </div>
                <nav aria-label="Page navigation example">
                        <br />
                        <ul className="pagination">
                            <li className="page-item page-link">
                                <Link to="/step4">
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
export default Step5Form
