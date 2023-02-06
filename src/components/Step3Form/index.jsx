import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { Store } from "../../utils/store";
import { useContext } from "react";


const Step3Form = () => {
    const history = useHistory()
    const { dispatch} = useContext(Store)

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        let newSustrato = {}
        // En la consola se puede apreciar cada uno de los valores del form
        for (let [key, value] of formData.entries()) {
            newSustrato[key] = value
        }

        dispatch({ type: 'STEP_3', payload: { ...newSustrato } })

        // Comentar esto para pausar el cambio de pagina y poder ver la consola
        history.push('/step4')
    }

    return (
        <div className='container'>
                <h2> 
                    <span className="badge badge text-bg-dark">
                        Consumo de sustrato en PORTADA Y OTROS FORMATOS
                    </span>
                </h2>
                
            <form onSubmit={onSubmit}>
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
                                            name='anchoPortada' 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Ancho" 
                                            min='0'
                                        />
                                        <input
                                            name='altoPortada' 
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Alto" 
                                            min='0'
                                        />
                                        <input 
                                            name="colorTPortada"
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Color T."  
                                            min='0'   
                                            max='5'                                    
                                        />
                                        <input 
                                            name="colorRPortada"
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Color R." 
                                            min='0'
                                            max='5'
                                        />
                                        <input 
                                            name="lomoPortada"
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Lomo" 
                                            min='0'
                                        />
                                        <input 
                                            name="solapaPortada"
                                            type="number" 
                                            className="form-control" 
                                            placeholder="Solapa" 
                                            min='0'
                                        />
                                    </ul>
                                </div>

                                <div className="col dropdown">
                                        <div class="col">
                                            <h5>Portada</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Portada</option>
                                                <option name="portada" value="portadaHojaAutoadhesivo66x96"  >Hojas Autoadhesivo (66x96 cms)</option>
                                                <option name="portada" value="portadaHojaCarton1kg"  >Hojas Carton de 1 kg</option>
                                                <option name="portada" value="portadaHojaCartulinaHilo"  >Hojas Cartulina Hilo (70x100 cms)</option>
                                                <option name="portada" value="portadaHojaCartulinaBristol"  >Hojas Cartulina Bristol 200 grs (48 cms)</option>
                                                <option name="portada" value="portadaHojaCartulinaSulfatoCal012"  >Hojas Cartulina Sulfato Cal. 012 (70x100 cms)</option>
                                                <option name="portada" value="portadaHojaCartulinaSulfatoCal014"  >Hojas Cartulina Sulfato Cal. 014 (70x100 cms)</option>
                                                <option name="portada" value="portadaHojaCartulinaSulfatoCal016"  >Hojas Cartulina Sulfato Cal. 016 (70x100 cms)</option>
                                                <option name="portada" value="portadaHojaOpalina"  >Hojas Opalina (70x100 cms)</option>
                                                <option name="portada" value="portadaResmaBond16" >Resma Bond 16 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaBond20" >Resma Bond 20 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaBond24" >Resma Bond 24 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaCreamy56" >Resma Creamy 56 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaNovel80" >Resma Novel 80 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaGlase80" >Resma Glasé 80 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaGlase100" >Resma Glasé 100 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaGlase115" >Resma Glasé 115 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaGlase150" >Resma Glasé 150 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaGlase200" >Resma Glasé 200 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaGlase240" >Resma Glasé 240 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaGlase250" >Resma Glasé 250 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaMate90" >Resma Mate 90 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaMate100" >Resma Mate 100 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaMate115" >Resma Mate 115 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaMate150" >Resma Mate 150 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaMate200" >Resma Mate 200 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaMate250" >Resma Mate 250 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaResmaImprenta48,8" >Resma Imprenta 48,8 grs (66X96)</option>
                                                <option name="portada" value="portadaResmaJansaMate56" >Resma Jansa Mate 56 grs (66X96 cms)</option>
                                                <option name="portada" value="portadaResmaMantoCreamy 60" >Resma Manto Creamy 60 grs (66x96 cms)</option>
                                                <option name="portada" value="portadaBobinaBond16Gr48cms" >Bobina Bond 16 grs (48 cms)</option>
                                                <option name="portada" value="portadaBobinaBond16Gr51cms" >Bobina Bond 16 grs (51 cms)</option>
                                                <option name="portada" value="portadaBobinaBond16Gr66cms" >Bobina Bond 16 grs (66 cms)</option>
                                                <option name="portada" value="portadaBobinaBond20Gr37cms" >Bobina Bond 20 grs (37 cms)</option>
                                                <option name="portada" value="portadaBobinaBond20Gr50cms" >Bobina Bond 20 grs (50 cms)</option>
                                                <option name="portada" value="portadaBobinaBond20Gr48cms" >Bobina Bond 20 grs (48 cms)</option>
                                                <option name="portada" value="portadaBobinaBond20Gr66cms" >Bobina Bond 20 grs (66 cms)</option>
                                                <option name="portada" value="portadaBobinaBond20Gr91cms" >Bobina Bond 20 grs (91 cms)</option>
                                                <option name="portada" value="portadaBobinaBond24Gr48cms" >Bobina Bond 24 grs (48 cms)</option>
                                                <option name="portada" value="portadaBobinaCreamy66Cm" >Bobina Creamy (66 cms)</option>
                                                <option name="portada" value="portadaBobinaCreamy88Cm" >Bobina Creamy (88 cms)</option>
                                                <option name="portada" value="portadaBobinaGlase80Gr51Cm" >Bobina Glasé 80 grs (51 cms)</option>
                                                <option name="portada" value="portadaBobinaGlase115Gr48Cm" >Bobina Glasé 115 grs (48 cms)</option>
                                                <option name="portada" value="portadaBobinaGlase150Gr48Cm" >Bobina Glasé 150 grs (48 cms)</option>
                                                <option name="portada" value="portadaBobinaGlase200Gr48Cm" >Bobina Glasé 200 grs (48 cms)</option>
                                                <option name="portada" value="portadaBobinaGlase250Gr48Cm" >Bobina Glasé 250 grs (48 cms)</option>
                                                <option name="portada" value="portadaBobinaGlase80Gr51Cm" >Bobina Glasé 80 grs (51 cms)</option>
                                                <option name="portada" value="portadaBobinaImprenta48,8Gr50Cm" >Bobina Imprenta 48,8 grs (50 cms)</option>
                                                <option name="portada" value="portadaBobinaImprenta48,8Gr66Cm" >Bobina Imprenta 48,8 grs (66 cms)</option>
                                                <option name="portada" value="portadaBobinaImprenta48,8Gr71Cm" >Bobina Imprenta 48,8 grs (71 cms)</option>
                                                <option name="portada" value="portadaBobinaImprenta48,8Gr88Cm" >Bobina Imprenta 48,8 grs (88 cms)</option>
                                                <option name="portada" value="portadaBobinaElectrobrite52Gr66Cm" >Bobina Electrobrite 52 grs (66 cms)</option>
                                                <option name="portada" value="portadaBobinaNovel80Gr66Cm" >Bobina Novel 80 grs (66 cms)</option>
                                                <option name="portada" value="portadaBobinaAbibowAlternative" >Bobina abibow  alternative</option>
                                            </select>
                                            <br />
                                            <h5>Tipo de Maquina</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo de Maquina</option>
                                                <option 
                                                    id
                                                    value="concepta"  
                                                    name="tipoMaquinaPortada" 
                                                    >CONCEPTA
                                                </option>
                                                <option 
                                                    value="heidelbergKord" 
                                                    name="tipoMaquinaPortada" 
                                                    >HEIDELBERG KORD
                                                </option>
                                                <option 
                                                    value="sakuraiOliver" 
                                                    name="tipoMaquinaPortada" 
                                                    >SAKURAI OLIVER 
                                                </option>
                                                <option 
                                                    value="heidelbergGto" 
                                                    name="tipoMaquinaPortada"
                                                    >Heidelberg Gto
                                                </option>
                                                <option 
                                                    value="rolandRecord" 
                                                    name="tipoMaquinaPortada"
                                                    >ROLAND REKORD
                                                </option>
                                                <option 
                                                    value="rolandParva" 
                                                    name="tipoMaquinaPortada"
                                                    >ROLAND PARVA
                                                </option>
                                                <option 
                                                    value="minerva1/8" 
                                                    name="tipoMaquinaPortada"
                                                    >MINERVA 1/8
                                                </option>
                                                <option 
                                                    value="cylinder" 
                                                    name="tipoMaquinaPortada"
                                                    >CYLINDER
                                                </option>
                                                <option 
                                                    value="manugraph" 
                                                    name="tipoMaquinaPortada"
                                                    >MANUGRAPH
                                                </option>
                                                <option 
                                                    value="noAplica" 
                                                    name="tipoMaquinaPortada"
                                                    >NO APLICA
                                                </option>
                                            </select>
                                            <br />
                                            <h5>Tipo de Montaje</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo de Montaje</option>
                                                <option 
                                                    value="sencillo" 
                                                    name="tipoMontajePortada"
                                                    >Sencillo
                                                </option>
                                                <option 
                                                    value="dobleParalelo" 
                                                    name="tipoMontajePortada"
                                                    >Doble Paralelo
                                                </option>
                                                <option 
                                                    value="dobleBanda"  
                                                    name="tipoMontajePortada"
                                                    >Doble Banda
                                                </option>
                                                <option 
                                                    value="terciado" 
                                                    name="tipoMontajePortada"
                                                    >Terciado
                                                    </option>
                                                <option 
                                                    value="enForma" 
                                                    name="tipoMontajePortada"
                                                    >En Forma
                                                </option>
                                            </select>
                                        </div>
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
                                        name="anchoOtro"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Ancho"
                                        min='0'
                                        />
                                        <input 
                                        name="altoOtro"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Alto" 
                                        min='0'
                                        />
                                        <input 
                                        name="colorTOtro"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Color T." 
                                        min='0'
                                        max='5'
                                        />
                                        <input 
                                        name="colorROtro"
                                        type="number" 
                                        className="form-control" 
                                        placeholder="Color R." 
                                        min='0'
                                        max='5'
                                        />
                                    </ul>
                                </div>
                                <br />
                                            <br /><br />
                                            <div className="col dropdown">
                                        <div class="col">
                                            <h5>Otro Formato</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tripa (A)</option>
                                                <option name="otro" id="otro" value="hojaAutoadhesivo66x96" >Hojas Autoadhesivo (66x96 cms)</option>
                                                <option name="otro" id="otrohojaCarton1kg"  value="hojaCarton1kg"  >Hojas Carton de 1 kg</option>
                                                <option name="otro" id="otrohojaCartulinaHilo" value="hojaCartulinaHilo"  >Hojas Cartulina Hilo (70x100 cms)</option>
                                                <option name="otro" id="otrohojaCartulinaBristol" value="hojaCartulinaBristol"  >Hojas Cartulina Bristol 200 grs (48 cms)</option>
                                                <option name="otro" id="otrohojaCartulinaSulfatoCal012" value="hojaCartulinaSulfatoCal012"  >Hojas Cartulina Sulfato Cal. 012 (70x100 cms)</option>
                                                <option name="otro" id="otrohojaCartulinaSulfatoCal014" value="hojaCartulinaSulfatoCal014"  >Hojas Cartulina Sulfato Cal. 014 (70x100 cms)</option>
                                                <option name="otro" id="otrohojaCartulinaSulfatoCal016" value="hojaCartulinaSulfatoCal016"  >Hojas Cartulina Sulfato Cal. 016 (70x100 cms)</option>
                                                <option name="otro" id="otrohojaOpalina" value="hojaOpalina"  >Hojas Opalina (70x100 cms)</option>
                                                <option name="otro" id="otroresmaBond16" value="resmaBond16" >Resma Bond 16 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaBond20" value="resmaBond20" >Resma Bond 20 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaBond24" value="resmaBond24" >Resma Bond 24 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaCreamy56" value="resmaCreamy56" >Resma Creamy 56 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaNovel80"  value="resmaNovel80" >Resma Novel 80 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaGlase80"  value="resmaGlase80" >Resma Glasé 80 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaGlase100" value="resmaGlase100" >Resma Glasé 100 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaGlase115" value="resmaGlase115" >Resma Glasé 115 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaGlase150" value="resmaGlase150" >Resma Glasé 150 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaGlase200" value="resmaGlase200" >Resma Glasé 200 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaGlase240" value="resmaGlase240" >Resma Glasé 240 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaGlase250" value="resmaGlase250" >Resma Glasé 250 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaMate90"  value="resmaMate90" >Resma Mate 90 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaMate100" value="resmaMate100" >Resma Mate 100 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaMate115" value="resmaMate115" >Resma Mate 115 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaMate150" value="resmaMate150" >Resma Mate 150 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaMate200" value="resmaMate200" >Resma Mate 200 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaMate250" value="resmaMate250" >Resma Mate 250 grs (66x96 cms)</option>
                                                <option name="otro" id="otroresmaImprenta48,8" value="resmaImprenta48,8" >Resma Imprenta 48,8 grs (66X96)</option>
                                                <option name="otro" id="otroresmaJansaMate56" value="resmaJansaMate56" >Resma Jansa Mate 56 grs (66X96 cms)</option>
                                                <option name="otro" id="otroresmaMantoCreamy60" value="resmaMantoCreamy60" >Resma Manto Creamy 60 grs (66x96 cms)</option>
                                                <option name="otro" id="otrobobinaBond16Gr48cms" value="bobinaBond16Gr48cms" >Bobina Bond 16 grs (48 cms)</option>
                                                <option name="otro" id="otrobobinaBond16Gr51cms" value="bobinaBond16Gr51cms" >Bobina Bond 16 grs (51 cms)</option>
                                                <option name="otro" id="otrobobinaBond16Gr66cms" value="bobinaBond16Gr66cms" >Bobina Bond 16 grs (66 cms)</option>
                                                <option name="otro" id="otrobobinaBond20Gr37cms" value="bobinaBond20Gr37cms" >Bobina Bond 20 grs (37 cms)</option>
                                                <option name="otro" id="otrobobinaBond20Gr50cms" value="bobinaBond20Gr50cms" >Bobina Bond 20 grs (50 cms)</option>
                                                <option name="otro" id="otrobobinaBond20Gr48cms" value="bobinaBond20Gr48cms" >Bobina Bond 20 grs (48 cms)</option>
                                                <option name="otro" id="otrobobinaBond20Gr66cms" value="bobinaBond20Gr66cms" >Bobina Bond 20 grs (66 cms)</option>
                                                <option name="otro" id="otrobobinaBond20Gr91cms" value="bobinaBond20Gr91cms" >Bobina Bond 20 grs (91 cms)</option>
                                                <option name="otro" id="otrobobinaBond24Gr48cms" value="bobinaBond24Gr48cms" >Bobina Bond 24 grs (48 cms)</option>
                                                <option name="otro" id="otrobobinaCreamy66Cm" value="bobinaCreamy66Cm" >Bobina Creamy (66 cms)</option>
                                                <option name="otro" id="otrobobinaCreamy88Cm" value="bobinaCreamy88Cm" >Bobina Creamy (88 cms)</option>
                                                <option name="otro" id="otrobobinaGlase80Gr51Cm" value="bobinaGlase80Gr51Cm" >Bobina Glasé 80 grs (51 cms)</option>
                                                <option name="otro" id="otrobobinaGlase115Gr48Cm"value="bobinaGlase115Gr48Cm" >Bobina Glasé 115 grs (48 cms)</option>
                                                <option name="otro" id="otrobobinaGlase150Gr48Cm"value="bobinaGlase150Gr48Cm" >Bobina Glasé 150 grs (48 cms)</option>
                                                <option name="otro" id="otrobobinaGlase200Gr48Cm"value="bobinaGlase200Gr48Cm" >Bobina Glasé 200 grs (48 cms)</option>
                                                <option name="otro" id="otrobobinaGlase250Gr48Cm"value="bobinaGlase250Gr48Cm" >Bobina Glasé 250 grs (48 cms)</option>
                                                <option name="otro" id="otrobobinaGlase80Gr51Cm" value="bobinaGlase80Gr51Cm" >Bobina Glasé 80 grs (51 cms)</option>
                                                <option name="otro" id="otrobobinaImprenta48,8Gr50Cm" value="bobinaImprenta48,8Gr50Cm" >Bobina Imprenta 48,8 grs (50 cms)</option>
                                                <option name="otro" id="otrobobinaImprenta48,8Gr66Cm" value="bobinaImprenta48,8Gr66Cm" >Bobina Imprenta 48,8 grs (66 cms)</option>
                                                <option name="otro" id="otrobobinaImprenta48,8Gr71Cm" value="bobinaImprenta48,8Gr71Cm" >Bobina Imprenta 48,8 grs (71 cms)</option>
                                                <option name="otro" id="otrobobinaImprenta48,8Gr88Cm" value="bobinaImprenta48,8Gr88Cm" >Bobina Imprenta 48,8 grs (88 cms)</option>
                                                <option name="otro" id="otrobobinaElectrobrite52Gr66Cm" value="bobinaElectrobrite52Gr66Cm" >Bobina Electrobrite 52 grs (66 cms)</option>
                                                <option name="otro" id="otrobobinaNovel80Gr66Cm" value="bobinaNovel80Gr66Cm" >Bobina Novel 80 grs (66 cms)</option>
                                                <option name="otro" id="otrobobinaAbibowAlternative" value="bobinaAbibowAlternative" >Bobina abibow  alternative</option>
                                            </select>
                                            <br />
                                            <h5>Tipo de Maquina</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo de Maquina</option>
                                                <option 
                                                    id
                                                    value="Concepta"  
                                                    name="tipoMaquinaOtro" 
                                                    >CONCEPTA
                                                </option>
                                                <option 
                                                    value="HeidelbergKord" 
                                                    name="tipoMaquinaOtro" 
                                                    >HEIDELBERG KORD
                                                </option>
                                                <option 
                                                    value="SakuraiOliver" 
                                                    name="tipoMaquinaOtro" 
                                                    >SAKURAI OLIVER 
                                                </option>
                                                <option 
                                                    value="HeidelbergGto" 
                                                    name="tipoMaquinaOtro"
                                                    >Heidelberg Gto
                                                </option>
                                                <option 
                                                    value="RolandRecord" 
                                                    name="tipoMaquinaOtro"
                                                    >ROLAND REKORD
                                                </option>
                                                <option 
                                                    value="RolandParva" 
                                                    name="tipoMaquinaOtro"
                                                    >ROLAND PARVA
                                                </option>
                                                <option 
                                                    value="Minerva1/8" 
                                                    name="tipoMaquinaOtro"
                                                    >MINERVA 1/8
                                                </option>
                                                <option 
                                                    value="Cylinder" 
                                                    name="tipoMaquinaOtro"
                                                    >CYLINDER
                                                </option>
                                                <option 
                                                    value="Manugraph" 
                                                    name="tipoMaquinaOtro"
                                                    >MANUGRAPH
                                                </option>
                                                <option 
                                                    value="NoAplica" 
                                                    name="tipoMaquinaOtro"
                                                    >NO APLICA
                                                </option>
                                            </select>
                                            <br />
                                            <h5>Tipo de Montaje</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo de Montaje</option>
                                                <option 
                                                    value="Sencillo" 
                                                    name="tipoMontajeOtro"
                                                    >Sencillo
                                                </option>
                                                <option 
                                                    value="Doble Paralelo" 
                                                    name="tipoMontajeOtro"
                                                    >Doble Paralelo
                                                </option>
                                                <option 
                                                    value="Doble Banda"  
                                                    name="tipoMontajeOtro"
                                                    >Doble Banda
                                                </option>
                                                <option 
                                                    value="Terciado" 
                                                    name="tipoMontajeOtro"
                                                    >Terciado
                                                    </option>
                                                <option 
                                                    value="En Forma" 
                                                    name="tipoMontajeOtro"
                                                    >En Forma
                                                </option>
                                            </select>
                                        </div>
                                    </div>                            
                                </div>
                                </div>
                            </div>
                        </div>

                <nav aria-label="Page navigation example">
                    <br />
                    <ul className="pagination">
                        <li className="page-item page-link">
                            <Link to="/step2">
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
export default Step3Form