import React from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { Store } from "../../utils/store";
import { useContext } from "react";


const Step4Form = () => {
    const history = useHistory()
    const { dispatch } = useContext(Store)

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        let newTinta = {}
        // En la consola se puede apreciar cada uno de los valores del form
        for (let [key, value] of formData.entries()) {
            console.log(key, value)
        }

        dispatch({ type: 'STEP_4', payload: { ...newTinta } })

        // Comentar esto para pausar el cambio de pagina y poder ver la consola
        history.push('/step5')
    }

    return (
        <div classNameName="Containe-fluid"> 
                <h2> 
                    <span className="badge badge text-bg-dark">
                        Consumo de TINTAS
                    </span>
                </h2>

        <form onSubmit={onSubmit}>
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h3>Tripa (A)</h3>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro con texto</option>
                                <option name="tintaTripaANegroTexto" value="Si">Si</option>
                                <option name="tintaTripaANegroTexto" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro + texto + ilustracion</option>
                                <option name="tintaTripaANegroTextoIlustracion" value="tintaTripaANegroTextoIlustracion">Si</option>
                                <option name="tintaTripaANegroTextoIlustracion" value="tintaTripaANegroTextoIlustracion">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Azul Cuatricomia</option>
                                <option name="tintaTripaAAzulCuatricomia" value="Si">Si</option>
                                <option name="tintaTripaAAzulCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Rojo Cuatricomia</option>
                                <option name="tintaTripaARojoCuatricomia" value="Si">Si</option>
                                <option name="tintaTripaARojoCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Amarillo Cuatricomia</option>
                                <option name="tintaTripaAAmarilloCuatricomia" value="Si">Si</option>
                                <option name="tintaTripaAAmarilloCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro Cuatricomia</option>
                                <option name="tintaTripaANegroCuatricomia" value="Si">Si</option>
                                <option name="tintaTripaANegroCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Medios Tonos (un color)</option>
                                <option name="tintaTripaAMedioTono" value="Si">Si</option>
                                <option name="tintaTripaAMedioTono" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con texto</option>
                                <option name="tintaTripaAFondoTexto" value="Si">Si</option>
                                <option name="tintaTripaAFondoTexto" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con trama</option>
                                <option name="tintaTripaAFondotrama" value="Si">Si</option>
                                <option name="tintaTripaAFondotrama" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con plastificado</option>
                                <option name="tintaTripaAFondoPlastificado" value="Si">Si</option>
                                <option name="tintaTripaAFondoPlastificado" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Barniz (UV)</option>
                                <option name="tintaTripaABarniz" value="Si">Si</option>
                                <option name="tintaTripaABarniz" value="No">No</option>
                            </select>
                        </div>
                        <div class="col order-5">
                        <h3>Tripa (B)</h3>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro con texto</option>
                                <option name="tintaTripaBNegroTexto" value="Si">Si</option>
                                <option name="tintaTripaBNegroTexto" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro + texto + ilustracion</option>
                                <option name="tintaTripaBNegroTexto" value="Si">Si</option>
                                <option name="tintaTripaBNegroTexto" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Azul Cuatricomia</option>
                                <option name="tintaTripaBAzulCuatricomia" value="Si">Si</option>
                                <option name="tintaTripaBAzulCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Rojo Cuatricomia</option>
                                <option name="tintaTripaBRojoCuatricomia" value="Si">Si</option>
                                <option name="tintaTripaBRojoCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Amarillo Cuatricomia</option>
                                <option name="tintaTripaBAmarilloCuatricomia" value="Si">Si</option>
                                <option name="tintaTripaBAmarilloCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro Cuatricomia</option>
                                <option name="tintaTripaBNegroCuatricomia" value="Si">Si</option>
                                <option name="tintaTripaBNegroCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Medios Tonos (un color)</option>
                                <option name="tintaTripaBMedioTono" value="Si">Si</option>
                                <option name="tintaTripaBMedioTono" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con texto</option>
                                <option name="tintaTripaBFondoTexto" value="Si">Si</option>
                                <option name="tintaTripaBFondoTexto" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con trama</option>
                                <option name="tintaTripaBFondotrama" value="Si">Si</option>
                                <option name="tintaTripaBFondotrama" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con plastificado</option>
                                <option name="tintaTripaBFondoPlastificado" value="Si">Si</option>
                                <option name="tintaTripaBFondoPlastificado" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Barniz (UV)</option>
                                <option name="tintaTripaBBarniz" value="Si">Si</option>
                                <option name="tintaTripaBBarniz" value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>

                <br />
                
                <div class="container text-center">
                    <div class="row">
                        <div class="col">
                            <h3>Portada</h3>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro con texto</option>
                                <option name="tintaPortadaNegroTexto" value="Si">Si</option>
                                <option name="tintaPortadaNegroTexto" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro + texto + ilustracion</option>
                                <option name="tintaPortadaNegroTextoIlustracion" value="Si">Si</option>
                                <option name="tintaPortadaNegroTextoIlustracion" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Azul Cuatricomia</option>
                                <option name="tintaPortadaAzulCuatricomia" value="Si">Si</option>
                                <option name="tintaPortadaAzulCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Rojo Cuatricomia</option>
                                <option name="tintaPortadaRojoCuatricomia" value="Si">Si</option>
                                <option name="tintaPortadaRojoCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Amarillo Cuatricomia</option>
                                <option name="tintaPortadaAmarilloCuatricomia" value="Si">Si</option>
                                <option name="tintaPortadaAmarilloCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro Cuatricomia</option>
                                <option name="tintaPortadaNegroCuatricomia" value="Si">Si</option>
                                <option name="tintaPortadaNegroCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Medios Tonos (un color)</option>
                                <option name="tintaPortadaMedioTono" value="Si">Si</option>
                                <option name="tintaPortadaMedioTono" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con texto</option>
                                <option name="tintaPortadaFondoTexto" value="Si">Si</option>
                                <option name="tintaPortadaFondoTexto" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con trama</option>
                                <option name="tintaPortadaFondotrama" value="Si">Si</option>
                                <option name="tintaPortadaFondotrama" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con plastificado</option>
                                <option name="tintaPortadaFondoPlastificado" value="Si">Si</option>
                                <option name="tintaPortadaFondoPlastificado" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Barniz (UV)</option>
                                <option name="tintaPortadaBarniz" value="Si">Si</option>
                                <option name="tintaPortadaBarniz" value="No">No</option>
                            </select>
                        </div>
                        <div class="col order-5">
                        <h3>Otro Formato</h3>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro con texto</option>
                                <option name="tintaOtroNegroTexto" value="Si">Si</option>
                                <option name="tintaOtroNegroTexto" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro + texto + ilustracion</option>
                                <option name="tintaOtroNegroTextoIlustracion" value="Si">Si</option>
                                <option name="tintaOtroNegroTextoIlustracion" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Azul Cuatricomia</option>
                                <option name="tintaOtroAzulCuatricomia" value="Si">Si</option>
                                <option name="tintaOtroAzulCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Rojo Cuatricomia</option>
                                <option name="tintaOtroRojoCuatricomia" value="Si">Si</option>
                                <option name="tintaOtroRojoCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Amarillo Cuatricomia</option>
                                <option name="tintaOtroAmarilloCuatricomia" value="Si">Si</option>
                                <option name="tintaOtroAmarilloCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Negro Cuatricomia</option>
                                <option name="tintaOtroNegroCuatricomia" value="Si">Si</option>
                                <option name="tintaOtroNegroCuatricomia" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Medios Tonos (un color)</option>
                                <option name="tintaOtroMedioTono" value="Si">Si</option>
                                <option name="tintaOtroMedioTono" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con texto</option>
                                <option name="tintaOtroFondoTexto" value="Si">Si</option>
                                <option name="tintaOtroFondoTexto" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con trama</option>
                                <option name="tintaOtroFondotrama" value="Si">Si</option>
                                <option name="tintaOtroFondotrama" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Fondo con plastificado</option>
                                <option name="tintaOtroFondoPlastificado" value="Si">Si</option>
                                <option name="tintaOtroFondoPlastificado" value="No">No</option>
                            </select>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Barniz (UV)</option>
                                <option name="tintaOtroBarniz" value="Si">Si</option>
                                <option name="tintaOtroBarniz" value="No">No</option>
                            </select>
                        </div>
                    </div>
                </div>     
       
                <nav aria-label="Page navigation example">
                    <br />
                    <ul className="pagination">
                        <li className="page-item page-link">
                            <Link to="/step3">
                                Anterior
                            </Link>
                        </li>
                        <button type="submit" className="btn btn-primary">Siguiente</button>
                    </ul>
                </nav>

                </form>
        </div>

        
    )
}
export default Step4Form
