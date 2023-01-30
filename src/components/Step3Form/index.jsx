import { Link } from "react-router-dom"
import { tripaProps } from "../Step2Form/formData"

const Step3Form = () => {
    return (
        <div className='container'>
                <h2> 
                    <span className="badge badge text-bg-dark">
                        Consumo de sustrato en PORTADA Y OTROS FORMATOS
                    </span>
                </h2>
                
            <form>
                <div className="row">
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Numero de ejemplares" />
                    </div>
                </div>
            </form>

            <div className="row">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <div className="card" >
                                <div className="card-header">
                                    Portada
                                </div>
                                <ul className="list-group list-group-flush">
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Ancho" 
                                    />
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Alto" 
                                    />
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Color T."                                         />
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Color R." 
                                    />
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Lomo" 
                                    />
                                    <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Solapa" 
                                    />
                                </ul>
                            </div>

                            <br />
                            <div className="col dropdown  ">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Papel (Portada)
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink">
                                    {tripaProps.map(({id, name}) => (
                                        <li key={id} className="dropdown-item">{name}</li>
                                    ))}
                                </ul>
                            </div>

                            <br />
                            <div className="col dropdown">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Tipo Maquina
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink">
                                    {tripaProps.map(({id, name}) => (
                                        <li key={id} className="dropdown-item">{name}</li>
                                    ))}
                                </ul>
                            </div>

                            <br />
                            <div className="col dropdown">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Tipo Montaje
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

                <div className="col-sm-6">
                    <div className="card">    
                        <div className="card-body">
                            <div className="card" >
                                <div className="card-header">
                                    Otros Formatos
                                </div>
                                <ul className="list-group list-group-flush">
                                        <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Ancho" 
                                        />
                                        <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Alto" 
                                        />
                                        <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Color T." 
                                        />
                                        <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Color R." 
                                        />
                                </ul>
                            </div>
                            <br />
                                        <br /><br /><br />
                            <div className="col dropdown">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Papel (otro Formato)
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink" >
                                    {tripaProps.map((ele) => (
                                        <li key={ele.id} className="dropdown-item">{ele.name}</li>
                                    ))}
                                </ul>
                            </div>

                            <br />
                            <div className="col dropdown">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Tipo Maquina
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink" >
                                    {tripaProps.map((ele) => (
                                        <li key={ele.id} className="dropdown-item">{ele.name}</li>
                                    ))}
                                </ul>
                            </div>

                            <br />
                            <div className="col dropdown">
                                <button
                                    id="dropdownMenuLink"
                                    className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Tipo Montaje
                                </button>

                                <ul className="dropdown-menu" ariaLabelledby="dropdownMenuLink" >
                                    {tripaProps.map((ele) => (
                                        <li key={ele.id} className="dropdown-item">{ele.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                

            {/* Mientras tanto para poder volver a atras */}
                
                <nav aria-label="Page navigation example">
                    <br />
                    <ul class="pagination">
                        <li class="page-item page-link">
                            <Link to="/step2">
                                Step 2
                            </Link>
                        </li>
                        <li class="page-item disabled">
                            <span class="page-link">
                                Step 3
                            </span>
                        </li>
                        <li class="page-item page-link">
                            <Link to="/step4">
                                Step 4
                            </Link>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}
export default Step3Form