import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { Store } from "../../utils/store";

const Step7Form = () => {
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

    dispatch({ type: "STEP_7", payload: { ...newCosto } });

    // Comentar esto para pausar el cambio de pagina y poder ver la consola
    history.push("/step8");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="container-fluid">
        <h2>
          <span className="badge badge text-bg-dark">
            Calculo de COSTOS INDIRECTOS DE FABRICACION
          </span>
        </h2>
        <form onSubmit={onSubmit}>
          <div className="container-fluid">
            <div className="container text-center">
              <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <div className="col">
                  <div className="p-3">
                    <h5> Fresado</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="fresado"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Cosido</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="cosido"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                        min="0"
                        max="1"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Engrapado</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="engrapado"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Cajas</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="cajas"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Estibas</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="estibas"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Estrech Film</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="estrechFilm"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Retractilado</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="Rectilado"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Refilado</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="refilado"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Flejado</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="flejado"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                        min="0"
                        max="2"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Plegado</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="plegado"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Diagramacion</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="diagramacion"
                        type="number"
                        className="form-control"
                        placeholder="Cantidad"
                      />
                    </ul>
                  </div>
                </div>
                <div className="col">
                  <div className="p-3">
                    <h5> Numeracion</h5>
                    <ul className="list-group list-group-flush">
                      <input
                        name="numeracion"
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
        </form>

        <nav aria-label="Page navigation example">
          <br />
          <ul className="pagination">
            <li className="page-item page-link">
              <Link to="/step6">Anterior</Link>
            </li>
            <button type="submit" className="btn btn-primary">
              Siguiente
            </button>
          </ul>
        </nav>
      </div>
    </form>
  );
};

export default Step7Form;
