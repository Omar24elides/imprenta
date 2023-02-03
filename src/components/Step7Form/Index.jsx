import { Link } from "react-router-dom";
import React from "react";

const Step7Form = () => {
    return (
        <div className="container-fluid">
            <h2> 
                <span className="badge badge text-bg-dark">
                    Calculo de COSTOS INDIRECTOS DE FABRICACION
                </span>
            </h2>
            <div className="container-fluid">
                <div class="container text-center">
                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                        <div class="col">
                            <div class="p-3">
                                <h5> Fresado</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                                <h5> Cosido</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                            min="0"
                                            max="1"
                                        />
                                    </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                                <h5> Engrapado</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>                            
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                                <h5> Cajas</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>                            
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                            <h5> Estibas</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                            <h5> Estrech Film</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                            <h5> Retractilado</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                            <h5> Refilado</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                            <h5> Flejado</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                            min="0"
                                            max="2"
                                        />
                                    </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                            <h5> Plegado</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                            <h5> Diagramacion</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                            <h5> Numeracion</h5>
                                    <ul className="list-group list-group-flush">
                                        <input 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Cantidad" 
                                        />
                                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            <nav aria-label="Page navigation example">
                <br />
                <ul className="pagination">
                    <li className="page-item page-link">
                        <Link to="/step6">
                            Anterior
                        </Link>
                    </li>
                    <button type="submit" className="btn btn-primary">Siguiente</button>
                </ul>
            </nav>
        </div>
    )

} 

export default Step7Form