import { Link } from 'react-router-dom'
import { tripaProps } from './formData'

const Step2Form = () => {
    return (
        <div className='container'>
                <h2> <span className="badge badge text-bg-dark">Consumo de sustrato en TRIPA</span></h2>
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
                                    Tripa A
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
                                        placeholder="N. De Paginas" 
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
                                    Tripa (A)
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
                                    Tipo de Maquina
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
                                    Tipo de Montaje
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
                                    Tripa B
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
                                        <input 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="N. De Paginas" 
                                        />
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
                                    Tripa (B)
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
                                    Tipo de Maquina
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
                                    Tipo de Montaje
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
                    <ul className="pagination">
                        <li className="page-item page-link">
                            <Link to="/step1">
                                Step 1
                            </Link>
                        </li>
                        <li className="page-item disabled">
                            <span className="page-link">Step 2</span>
                        </li>
                        <li className="page-item page-link">
                            <Link to="/step3">
                                Step 3
                            </Link>
                        </li>
                    </ul>
                </nav>


        </div>
    )
}

export default Step2Form