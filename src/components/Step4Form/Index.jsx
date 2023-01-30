import { Link } from "react-router-dom"

const Step4Form = () => {
    return (
        <div className="Container"> 
            <h2>
                <span className="badge badge text-bg-dark">
                    Consumo de TINTAS
                </span>
            </h2>
            
            <div class="row">
            <div class="card border-primary mb-3" >
                <div class="card-body text-primary">
                    
                </div>
            </div>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="firstCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="firstCheckboxStretched">Negro con texto</label>     
                        </div>
                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="secondCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="secondCheckboxStretched">Negro, texto e ilustracion</label>
                        </div>
                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Azul Cuatricomia</label>    
                        </div>
                    </div>

                    <div class="row">
                        
                    <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="cuartaCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="cuartaCheckboxStretched">Rojo Cuatricomia</label>
                        </div>

                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Amarillo Cuatricomia</label>
                        </div>

                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Negro Cuatricomia</label>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Medios Tonos (un color)</label>
                        </div>

                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Fondo con texto</label>
                        </div>

                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Fondo con trama</label>
                        </div>

                    <div class="row">
                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="thirdCheckboxStretched">Fondo con plastificado </label>
                        </div>
                        <div class="col">
                            <input class="form-check-input me-1" type="checkbox" value="" id="thirdCheckboxStretched" />
                            <label class="form-check-label stretched-link" for="thirdCheckboxStretched"> Barniz (UV) </label>
                        </div>
                    </div>
                </div>

            </div>

            {/* Mientras tanto para poder volver a atras */}
            <nav aria-label="Page navigation example">
                <br />
                    <ul class="pagination">
                        <li class="page-item page-link">
                            <Link to="/step3">
                                Step 3
                            </Link>
                        </li>
                        <li class="page-item disabled">
                            <span class="page-link">
                                Step 4
                            </span>
                        </li>
                        <li class="page-item page-link">
                            <Link to="/step5">
                                Step 5
                            </Link>
                        </li>
                    </ul>
            </nav>

            </div>
        </div>

        
    )
}
export default Step4Form
