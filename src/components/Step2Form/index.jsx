import { Link } from 'react-router-dom'
import { tripaProps } from './formData'

const Step2Form = () => {
    return (
        <div className='container'>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="number" className="form-control" placeholder="Numero de ejemplares" />
                    </div>
                </div>
            </form>

            <div className="row">
                <div className="col dropdown">
                    <button
                        id="dropdownMenuLink"
                        className="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Tripa A
                    </button>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {tripaProps.map((ele) => (
                            <li key={ele.id} className="dropdown-item">{ele.name}</li>
                        ))}
                    </ul>
                </div>

                <div className="col dropdown">
                    <button
                        id="dropdownMenuLink"
                        className="btn btn-secondary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Tripa B
                    </button>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {tripaProps.map((ele) => (
                            <li key={ele.id} className="dropdown-item">{ele.name}</li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Mientras tanto para poder volver a atras */}
            <div className="mt-4">
                <Link to="/step1">
                    Ir a step 1
                </Link>
            </div>
        </div>
    )
}

export default Step2Form