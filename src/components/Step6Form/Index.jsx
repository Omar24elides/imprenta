import { Link } from "react-router-dom";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Store } from "../../utils/store";


const Step6Form = () => {
    const history = useHistory()
    const { dispatch } = useContext(Store)


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        let newManoObra = {}
        // En la consola se puede apreciar cada uno de los valores del form
        for (let [key, value] of formData.entries()) {
            newManoObra[key] = value
        }

        dispatch({ type: 'STEP_6', payload: { ...newManoObra } })

        // Comentar esto para pausar el cambio de pagina y poder ver la consola
        history.push('/step5')
    }

     return (
        <form onSubmit={onSubmit}>
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
                                        name="conceptaTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="conceptaHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="conceptaDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="conceptaMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="conceptaHExtra"
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
                                        name="kordTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="kordHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="kordDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="kordtaMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="kordHExtra"
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
                                        name="oliverTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="oliverHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="oliverDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="oliverMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="oliverHExtra"
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
                                        name="gtoTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="gtoHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="gtoDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="gtoMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="gtoHExtra"
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
                                        name="parvaTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="parvaHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="parvaDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="parvaMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="parvaHExtra"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="H. Extra"
                                        min="0"
                                        max="24"
                                    /></ul>
                            </div>
                        </div>
                        <div class="col">
                            <div class="p-3">
                            <h5> Rekord</h5>
                                <ul className="list-group list-group-flush">
                                <input
                                        name="rekordTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="rekordHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="rekordDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="rekordMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="rekordHExtra"
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
                                        name="minervaTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="minervaHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="minervaDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="minervaMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="minervaHExtra"
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
                                        name="cylinderTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="cylinderHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="cylinderDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="cylinderMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="cylinderHExtra"
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
                                        name="guillotinaTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="guillotinaHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="guillotinaDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="guillotinaMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="guillotinaHExtra"
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
                                        name="tigraTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="tigraHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="tigraDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="tigraMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="tigraHExtra"
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
                                        name="grapadoraTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="grapadoraHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="grapadoraDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="grapadoraMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="grapadoraHExtra"
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
                                        name="dobladoraTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="dobladoraHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="dobladoraDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="dobladoraMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="dobladoraHExtra"
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
                                        name="cosedoraTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="cosedoraHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="cosedoraDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="cosedoraMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="cosedoraHExtra"
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
                                        name="artisticaTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="artisticaHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="artisticaDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="artisticaMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="artisticaHExtra"
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
                                        name="krauseTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="krauseHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="krauseDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="krauseMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="krauseHExtra"
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
                                        name="fotolitoTurno" 
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Turno" 
                                        min="0"
                                        max="2"
                                    />
                                    <input 
                                        name="fotolitoHoras"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Horas" 
                                        min="0"
                                        max="24"
                                    />
                                    <input 
                                        name="fotolitoDias"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Dias"
                                        min="0"
                                        max="31"                                         />
                                    <input 
                                        name="fotolitoMes"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Mes"
                                        min="0"
                                        max="12" 
                                    />
                                    <input 
                                        name="fotolitoHExtra"
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

                <fieldset className="form-group">
                    <nav aria-label="Page navigation example">
                        <br />
                        <ul className="pagination">
                            <li className="page-item page-link">
                                <Link to="/step5">
                                    Anterior
                                </Link>
                            </li>
                            <button type="submit" className="btn btn-primary">Siguiente</button>
                        </ul>
                    </nav>
                </fieldset>

            </div>
        </form>
    )
}

export default Step6Form
