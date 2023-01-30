import { Link } from "react-router-dom"

const Step4Form = () => {
    return (
        <div className="Container"> 
            <h2>
                <span className="badge badge text-bg-dark">
                    Consumo de TINTAS
                </span>
            </h2>

                        {/* Mientras tanto para poder volver a atras */}
                
                        <nav aria-label="Page navigation example">
                    <br />
                    <ul class="pagination">
                        <li class="page-item page-link">
                            <Link to="/step2">
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

        
    )
}
export default Step4Form
