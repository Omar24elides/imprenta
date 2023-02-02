import React from "react";
import { Link } from "react-router-dom";

const Step5Form = () => {
    return (
        <div className="container-fluid">





            <nav aria-label="Page navigation example">
                <br />
                <ul className="pagination">
                    <li className="page-item page-link">
                        <Link to="/step4">
                            Step 4
                        </Link>
                    </li>
                    <li className="page-item disabled">
                        <span className="page-link">
                            Step 5
                        </span>
                    </li>
                    <li className="page-item page-link">
                        <Link to="/step6">
                            Step 6
                        </Link>
                    </li>
                </ul>
            </nav>

        </div>
    )
}

export default Step5Form