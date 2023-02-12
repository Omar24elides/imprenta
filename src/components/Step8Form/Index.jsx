import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../utils/store";

const Step8Form = () => {
  const history = useHistory();
  const { dispatch } = useContext(Store);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let newCosto = {};
    // En la consola se puede apreciar cada uno de los valores del form
    for (let [key, value] of formData.entries()) {
      newCosto[key] = value;
    }

    dispatch({ type: "STEP_8", payload: { ...newCosto } });

    // Comentar esto para pausar el cambio de pagina y poder ver la consola
    history.push("/step1");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="container-fluid">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col"> Datos </th>
              <th scope="col"> SUSTRATOS TRIPA </th>
              <th scope="col"> SUSTRATOS PORTADA Y OTROS FORMATOS </th>
              <th scope="col"> TINTAS </th>
              <th scope="col"> PLANCHAS Y PELICULAS </th>
              <th scope="col"> MANO DE OBRA </th>
              <th scope="col"> COSTOS INDIRECTOS </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Datos </td>
              <td> SUSTRATOS TRIPA </td>
              <td> SUSTRATOS PORTADA Y OTROS FORMATOS </td>
              <td> TINTAS </td>
              <td> PLANCHAS Y PELICULAS </td>
              <td> MANO DE OBRA </td>
              <td> COSTOS INDIRECTOS </td>
            </tr>
            <tr></tr>
          </tbody>
        </table>
        <div>
          <nav aria-label="Page navigation example">
            <br />
            <ul className="pagination">
              <li className="page-item page-link">
                <Link to="/step7">Anterior</Link>
              </li>
              <button type="submit" className="btn btn-primary">
                Siguiente
              </button>
            </ul>
          </nav>
        </div>
      </div>
    </form>
  );
};

export default Step8Form;
