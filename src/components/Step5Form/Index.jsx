import React from "react";
import { Link } from "react-router-dom";
import { tripaProps } from "../Step2Form/formData";

const Step5Form = () => {
    return (
        <div className="container-fluid">

                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col">
                        <div class="p-3">
                        <h5> Tripa (A)</h5>
                        <div className="col dropdown  ">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Formato
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink">
                                    {tripaProps.map(({id, name}) => (
                                        <li key={id} className="dropdown-item">{name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Tripa (A)</h5>
                        <div className="col dropdown  ">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Formato
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink">
                                    {tripaProps.map(({id, name}) => (
                                        <li key={id} className="dropdown-item">{name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Tripa (B)</h5>
                        <div className="col dropdown  ">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Formato
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink">
                                    {tripaProps.map(({id, name}) => (
                                        <li key={id} className="dropdown-item">{name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Portada</h5>
                        <div className="col dropdown  ">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Formato
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink">
                                    {tripaProps.map(({id, name}) => (
                                        <li key={id} className="dropdown-item">{name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3">
                        <h5> Otro Formato</h5>
                        <div className="col dropdown  ">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Formato
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink">
                                    {tripaProps.map(({id, name}) => (
                                        <li key={id} className="dropdown-item">{name}</li>
                                    ))}
                                </ul>
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

        </div>
    )
}

export default Step5Form