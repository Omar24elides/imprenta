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

export default Step7Form