import React from "react";
import { Link } from "react-router-dom";

const Step6Form = () => {
     return (
        <div className="container-fluid">
                <h2> 
                    <span className="badge badge text-bg-dark">
                        Calculo de MANO DE OBRA
                    </span>
                </h2>
            <div class="container text-center">
                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col">
                        <div class="p-3">
                        <h5> Concepta</h5>
                            <ul className="list-group list-group-flush">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Turno" 
                                    min="0"
                                    max="2"
                                />
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Horas" 
                                    min="0"
                                    max="24"
                                />
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Dias"
                                    min="0"
                                    max="31"                                         />
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Mes"
                                    min="0"
                                    max="12" 
                                />
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="H. Extra"
                                    min="0"
                                    max="24"
                                />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Kord</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Turno" 
                                    min="0"
                                    max="2"
                                />
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Horas" 
                                    min="0"
                                    max="24"
                                />
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Dias"
                                    min="0"
                                    max="31"                                         />
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Mes"
                                    min="0"
                                    max="12" 
                                />
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="H. Extra"
                                    min="0"
                                    max="24"
                                />                            
                                </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Oliver</h5>
                            <ul className="list-group list-group-flush">
                                <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Turno" 
                                min="0"
                                max="2"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Gto</h5>
                            <ul className="list-group list-group-flush">
                                <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Turno" 
                                min="0"
                                max="2"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                            <h5> Parva</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Rekord</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Minerva</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Cylinder</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>                            
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Guillotina</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>      
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Tigra</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Grapadora</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Dobladora</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Cosedora</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Artistica</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Krause</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Fotolito</h5>
                            <ul className="list-group list-group-flush">
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Horas" 
                                min="0"
                                max="24"
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Dias"
                                min="0"
                                max="31"                                         />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="Mes"
                                min="0"
                                max="12" 
                            />
                            <input 
                                type="number" 
                                className="form-control" 
                                placeholder="H. Extra"
                                min="0"
                                max="24"
                            />
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>

            <nav aria-label="Page navigation example">
                <br />
                <ul className="pagination">
                    <li className="page-item page-link">
                        <Link to="/step5">
                            Step 5
                        </Link>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">
                            Step 6
                        </span>
                    </li>
                    <li className="page-item page-link">
                        <Link to="/step7">
                            Step 7
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Step6Form
