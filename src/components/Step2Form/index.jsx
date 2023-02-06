import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { Store } from '../../utils/store'

const Step2Form = () => {
    const history = useHistory()
    const { dispatch } = useContext(Store)


    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        let newTripa = {}
        // En la consola se puede apreciar cada uno de los valores del form
        for (let [key, value] of formData.entries()) {
            newTripa[key] = value
        }

        dispatch({ type: 'STEP_2', payload: { ...newTripa } })

        // Comentar esto para pausar el cambio de pagina y poder ver la consola
        history.push('/step3')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='container'>
                    <h2> 
                        <span className="badge badge text-bg-dark">Consumo de sustrato en TRIPA
                        </span>
                    </h2>
                    <fieldset className="form-group">
                        <div className="row">
                            <div className="col">
                                <ul>
                                    <input 
                                    name="numEjemplares"
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Numero de ejemplares" 
                                    min="0"
                                    />
                                </ul>
                            </div>
                        </div>
                    </fieldset>

                <fieldset className="form-group">
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
                                                name='anchoTripaA' 
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Ancho" 
                                                min="0"
                                                />
                                            <input 
                                                name='altoTripaA'
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Alto" 
                                                min="0"
                                                />
                                            <input 
                                                name='colorTTripaA'
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Color T."
                                                min="0"
                                                max="5"  
                                            />
                                            <input 
                                                name='colorRTripaA'
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Color R." 
                                                min="0"
                                                max="5"
                                            />
                                            <input 
                                                color='numeroPaginasTripaA'
                                                type="number" 
                                                className="form-control" 
                                                placeholder="N. De Paginas"
                                                min="0" 
                                            />
                                        </ul>
                                    </div>

                                    <br />
                                    <div className="col dropdown">
                                        <div class="col">
                                            <h5>Tripa (A)</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tripa (A)</option>
                                                <option name="tripaA" id="tripaAhojaAutoadhesivo66x96" value="hojaAutoadhesivo66x96" >Hojas Autoadhesivo (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAhojaCarton1kg"  value="hojaCarton1kg"  >Hojas Carton de 1 kg</option>
                                                <option name="tripaA" id="tripaAhojaCartulinaHilo" value="hojaCartulinaHilo"  >Hojas Cartulina Hilo (70x100 cms)</option>
                                                <option name="tripaA" id="tripaAhojaCartulinaBristol" value="hojaCartulinaBristol"  >Hojas Cartulina Bristol 200 grs (48 cms)</option>
                                                <option name="tripaA" id="tripaAhojaCartulinaSulfatoCal012" value="hojaCartulinaSulfatoCal012"  >Hojas Cartulina Sulfato Cal. 012 (70x100 cms)</option>
                                                <option name="tripaA" id="tripaAhojaCartulinaSulfatoCal014" value="hojaCartulinaSulfatoCal014"  >Hojas Cartulina Sulfato Cal. 014 (70x100 cms)</option>
                                                <option name="tripaA" id="tripaAhojaCartulinaSulfatoCal016" value="hojaCartulinaSulfatoCal016"  >Hojas Cartulina Sulfato Cal. 016 (70x100 cms)</option>
                                                <option name="tripaA" id="tripaAhojaOpalina" value="hojaOpalina"  >Hojas Opalina (70x100 cms)</option>
                                                <option name="tripaA" id="tripaAresmaBond16" value="resmaBond16" >Resma Bond 16 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaBond20" value="resmaBond20" >Resma Bond 20 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaBond24" value="resmaBond24" >Resma Bond 24 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaCreamy56" value="resmaCreamy56" >Resma Creamy 56 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaNovel80"  value="resmaNovel80" >Resma Novel 80 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaGlase80"  value="resmaGlase80" >Resma Glasé 80 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaGlase100" value="resmaGlase100" >Resma Glasé 100 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaGlase115" value="resmaGlase115" >Resma Glasé 115 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaGlase150" value="resmaGlase150" >Resma Glasé 150 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaGlase200" value="resmaGlase200" >Resma Glasé 200 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaGlase240" value="resmaGlase240" >Resma Glasé 240 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaGlase250" value="resmaGlase250" >Resma Glasé 250 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaMate90"  value="resmaMate90" >Resma Mate 90 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaMate100" value="resmaMate100" >Resma Mate 100 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaMate115" value="resmaMate115" >Resma Mate 115 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaMate150" value="resmaMate150" >Resma Mate 150 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaMate200" value="resmaMate200" >Resma Mate 200 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaMate250" value="resmaMate250" >Resma Mate 250 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaImprenta48,8" value="resmaImprenta48,8" >Resma Imprenta 48,8 grs (66X96)</option>
                                                <option name="tripaA" id="tripaAresmaJansaMate56" value="resmaJansaMate56" >Resma Jansa Mate 56 grs (66X96 cms)</option>
                                                <option name="tripaA" id="tripaAresmaMantoCreamy60" value="resmaMantoCreamy60" >Resma Manto Creamy 60 grs (66x96 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaBond16Gr48cms" value="bobinaBond16Gr48cms" >Bobina Bond 16 grs (48 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaBond16Gr51cms" value="bobinaBond16Gr51cms" >Bobina Bond 16 grs (51 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaBond16Gr66cms" value="bobinaBond16Gr66cms" >Bobina Bond 16 grs (66 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaBond20Gr37cms" value="bobinaBond20Gr37cms" >Bobina Bond 20 grs (37 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaBond20Gr50cms" value="bobinaBond20Gr50cms" >Bobina Bond 20 grs (50 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaBond20Gr48cms" value="bobinaBond20Gr48cms" >Bobina Bond 20 grs (48 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaBond20Gr66cms" value="bobinaBond20Gr66cms" >Bobina Bond 20 grs (66 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaBond20Gr91cms" value="bobinaBond20Gr91cms" >Bobina Bond 20 grs (91 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaBond24Gr48cms" value="bobinaBond24Gr48cms" >Bobina Bond 24 grs (48 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaCreamy66Cm" value="bobinaCreamy66Cm" >Bobina Creamy (66 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaCreamy88Cm" value="bobinaCreamy88Cm" >Bobina Creamy (88 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaGlase80Gr51Cm" value="bobinaGlase80Gr51Cm" >Bobina Glasé 80 grs (51 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaGlase115Gr48Cm"value="bobinaGlase115Gr48Cm" >Bobina Glasé 115 grs (48 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaGlase150Gr48Cm"value="bobinaGlase150Gr48Cm" >Bobina Glasé 150 grs (48 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaGlase200Gr48Cm"value="bobinaGlase200Gr48Cm" >Bobina Glasé 200 grs (48 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaGlase250Gr48Cm"value="bobinaGlase250Gr48Cm" >Bobina Glasé 250 grs (48 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaGlase80Gr51Cm" value="bobinaGlase80Gr51Cm" >Bobina Glasé 80 grs (51 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaImprenta48,8Gr50Cm" value="bobinaImprenta48,8Gr50Cm" >Bobina Imprenta 48,8 grs (50 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaImprenta48,8Gr66Cm" value="bobinaImprenta48,8Gr66Cm" >Bobina Imprenta 48,8 grs (66 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaImprenta48,8Gr71Cm" value="bobinaImprenta48,8Gr71Cm" >Bobina Imprenta 48,8 grs (71 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaImprenta48,8Gr88Cm" value="bobinaImprenta48,8Gr88Cm" >Bobina Imprenta 48,8 grs (88 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaElectrobrite52Gr66Cm" value="bobinaElectrobrite52Gr66Cm" >Bobina Electrobrite 52 grs (66 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaNovel80Gr66Cm" value="bobinaNovel80Gr66Cm" >Bobina Novel 80 grs (66 cms)</option>
                                                <option name="tripaA" id="tripaAbobinaAbibowAlternative" value="bobinaAbibowAlternative" >Bobina abibow  alternative</option>
                                            </select>
                                            <br />
                                            <h5>Tipo de Maquina</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo de Maquina</option>
                                                <option 
                                                    id
                                                    value="concepta"  
                                                    name="tipoMaquinaTripaA" 
                                                    >CONCEPTA
                                                </option>
                                                <option 
                                                    value="heidelbergKord" 
                                                    name="tipoMaquinaTripaA" 
                                                    >HEIDELBERG KORD
                                                </option>
                                                <option 
                                                    value="sakuraiOliver" 
                                                    name="tipoMaquinaTripaA" 
                                                    >SAKURAI OLIVER 
                                                </option>
                                                <option 
                                                    value="heidelbergGto" 
                                                    name="tipoMaquinaTripaA"
                                                    >Heidelberg Gto
                                                </option>
                                                <option 
                                                    value="rolandRecord" 
                                                    name="tipoMaquinaTripaA"
                                                    >ROLAND REKORD
                                                </option>
                                                <option 
                                                    value="rolandParva" 
                                                    name="tipoMaquinaTripaA"
                                                    >ROLAND PARVA
                                                </option>
                                                <option 
                                                    value="minerva1/8" 
                                                    name="tipoMaquinaTripaA"
                                                    >MINERVA 1/8
                                                </option>
                                                <option 
                                                    value="cylinder" 
                                                    name="tipoMaquinaTripaA"
                                                    >CYLINDER
                                                </option>
                                                <option 
                                                    value="manugraph" 
                                                    name="tipoMaquinaTripaA"
                                                    >MANUGRAPH
                                                </option>
                                                <option 
                                                    value="noAplica" 
                                                    name="tipoMaquinaTripaA"
                                                    >NO APLICA
                                                </option>
                                            </select>
                                            <br />
                                            <h5>Tipo de Montaje</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo de Montaje</option>
                                                <option 
                                                    value="sencillo" 
                                                    name="tipoMontajeTripaA"
                                                    >Sencillo
                                                </option>
                                                <option 
                                                    value="dobleParalelo" 
                                                    name="tipoMontajeTripaA"
                                                    >Doble Paralelo
                                                </option>
                                                <option 
                                                    value="dobleBanda"  
                                                    name="tipoMontajeTripaA"
                                                    >Doble Banda
                                                </option>
                                                <option 
                                                    value="terciado" 
                                                    name="tipoMontajeTripaA"
                                                    >Terciado
                                                    </option>
                                                <option 
                                                    value="enForma" 
                                                    name="tipoMontajeTripaA"
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
                                            Tripa B
                                        </div>
                                        <ul className="list-group list-group-flush">
                                                <input 
                                                name='anchoTripaB'
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Ancho" 
                                                min="0"
                                                />
                                                <input 
                                                name='altoTripaB'
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Alto" 
                                                min="0"
                                                />
                                                <input 
                                                name='colorTTripaB'
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Color T." 
                                                min="0"
                                                max="5"
                                                />
                                                <input 
                                                name='colorRTripaB'
                                                type="number" 
                                                className="form-control" 
                                                placeholder="Color R." 
                                                min="0"
                                                max="5"
                                                />
                                                <input 
                                                name='numeroPaginasTripaB'
                                                type="number" 
                                                className="form-control" 
                                                placeholder="N. De Paginas" 
                                                min="0"
                                                />
                                        </ul>
                                    </div>
                                    <br />
                                    <div className="col dropdown">
                                        <div class="col">
                                            <h5>Tripa (B)</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tripa (A)</option>
                                                <option name="tripaB" value="tripaHojaAutoadhesivo66x96"  >Hojas Autoadhesivo (66x96 cms)</option>
                                                <option name="tripaB" value="tripaHojaCarton1kg"  >Hojas Carton de 1 kg</option>
                                                <option name="tripaB" value="tripaHojaCartulinaHilo"  >Hojas Cartulina Hilo (70x100 cms)</option>
                                                <option name="tripaB" value="tripaHojaCartulinaBristol"  >Hojas Cartulina Bristol 200 grs (48 cms)</option>
                                                <option name="tripaB" value="tripaHojaCartulinaSulfatoCal012"  >Hojas Cartulina Sulfato Cal. 012 (70x100 cms)</option>
                                                <option name="tripaB" value="tripaHojaCartulinaSulfatoCal014"  >Hojas Cartulina Sulfato Cal. 014 (70x100 cms)</option>
                                                <option name="tripaB" value="tripaHojaCartulinaSulfatoCal016"  >Hojas Cartulina Sulfato Cal. 016 (70x100 cms)</option>
                                                <option name="tripaB" value="tripaHojaOpalina"  >Hojas Opalina (70x100 cms)</option>
                                                <option name="tripaB" value="tripaResmaBond16" >Resma Bond 16 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaBond20" >Resma Bond 20 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaBond24" >Resma Bond 24 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaCreamy56" >Resma Creamy 56 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaNovel80" >Resma Novel 80 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaGlase80" >Resma Glasé 80 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaGlase100" >Resma Glasé 100 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaGlase115" >Resma Glasé 115 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaGlase150" >Resma Glasé 150 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaGlase200" >Resma Glasé 200 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaGlase240" >Resma Glasé 240 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaGlase250" >Resma Glasé 250 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaMate90" >Resma Mate 90 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaMate100" >Resma Mate 100 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaMate115" >Resma Mate 115 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaMate150" >Resma Mate 150 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaMate200" >Resma Mate 200 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaMate250" >Resma Mate 250 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaResmaImprenta48,8" >Resma Imprenta 48,8 grs (66X96)</option>
                                                <option name="tripaB" value="tripaResmaJansaMate56" >Resma Jansa Mate 56 grs (66X96 cms)</option>
                                                <option name="tripaB" value="tripaResmaMantoCreamy 60" >Resma Manto Creamy 60 grs (66x96 cms)</option>
                                                <option name="tripaB" value="tripaBobinaBond16Gr48cms" >Bobina Bond 16 grs (48 cms)</option>
                                                <option name="tripaB" value="tripaBobinaBond16Gr51cms" >Bobina Bond 16 grs (51 cms)</option>
                                                <option name="tripaB" value="tripaBobinaBond16Gr66cms" >Bobina Bond 16 grs (66 cms)</option>
                                                <option name="tripaB" value="tripaBobinaBond20Gr37cms" >Bobina Bond 20 grs (37 cms)</option>
                                                <option name="tripaB" value="tripaBobinaBond20Gr50cms" >Bobina Bond 20 grs (50 cms)</option>
                                                <option name="tripaB" value="tripaBobinaBond20Gr48cms" >Bobina Bond 20 grs (48 cms)</option>
                                                <option name="tripaB" value="tripaBobinaBond20Gr66cms" >Bobina Bond 20 grs (66 cms)</option>
                                                <option name="tripaB" value="tripaBobinaBond20Gr91cms" >Bobina Bond 20 grs (91 cms)</option>
                                                <option name="tripaB" value="tripaBobinaBond24Gr48cms" >Bobina Bond 24 grs (48 cms)</option>
                                                <option name="tripaB" value="tripaBobinaCreamy66Cm" >Bobina Creamy (66 cms)</option>
                                                <option name="tripaB" value="tripaBobinaCreamy88Cm" >Bobina Creamy (88 cms)</option>
                                                <option name="tripaB" value="tripaBobinaGlase80Gr51Cm" >Bobina Glasé 80 grs (51 cms)</option>
                                                <option name="tripaB" value="tripaBobinaGlase115Gr48Cm" >Bobina Glasé 115 grs (48 cms)</option>
                                                <option name="tripaB" value="tripaBobinaGlase150Gr48Cm" >Bobina Glasé 150 grs (48 cms)</option>
                                                <option name="tripaB" value="tripaBobinaGlase200Gr48Cm" >Bobina Glasé 200 grs (48 cms)</option>
                                                <option name="tripaB" value="tripaBobinaGlase250Gr48Cm" >Bobina Glasé 250 grs (48 cms)</option>
                                                <option name="tripaB" value="tripaBobinaGlase80Gr51Cm" >Bobina Glasé 80 grs (51 cms)</option>
                                                <option name="tripaB" value="tripaBobinaImprenta48,8Gr50Cm" >Bobina Imprenta 48,8 grs (50 cms)</option>
                                                <option name="tripaB" value="tripaBobinaImprenta48,8Gr66Cm" >Bobina Imprenta 48,8 grs (66 cms)</option>
                                                <option name="tripaB" value="tripaBobinaImprenta48,8Gr71Cm" >Bobina Imprenta 48,8 grs (71 cms)</option>
                                                <option name="tripaB" value="tripaBobinaImprenta48,8Gr88Cm" >Bobina Imprenta 48,8 grs (88 cms)</option>
                                                <option name="tripaB" value="tripaBobinaElectrobrite52Gr66Cm" >Bobina Electrobrite 52 grs (66 cms)</option>
                                                <option name="tripaB" value="tripaBobinaNovel80Gr66Cm" >Bobina Novel 80 grs (66 cms)</option>
                                                <option name="tripaB" value="tripaBobinaAbibowAlternative" >Bobina abibow  alternative</option>
                                            </select>
                                            <br />
                                            <h5>Tipo de Maquina</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo de Maquina</option>
                                                <option value="Concepta"  
                                                    name="tipoMaquinaTripaB" 
                                                    >CONCEPTA
                                                </option>
                                                <option 
                                                    value="HeidelbergKord" 
                                                    name="tipoMaquinaTripaB" 
                                                    >HEIDELBERG KORD
                                                </option>
                                                <option 
                                                    value="SakuraiOliver" 
                                                    name="tipoMaquinaTripaB" 
                                                    >SAKURAI OLIVER 
                                                </option>
                                                <option 
                                                    value="HeidelbergGto" 
                                                    name="tipoMaquinaTripaB"
                                                    >Heidelberg Gto
                                                </option>
                                                <option 
                                                    value="RolandRecord" 
                                                    name="tipoMaquinaTripaB"
                                                    >ROLAND REKORD
                                                </option>
                                                <option 
                                                    value="RolandParva" 
                                                    name="tipoMaquinaTripaB"
                                                    >ROLAND PARVA
                                                </option>
                                                <option 
                                                    value="Minerva1/8" 
                                                    name="tipoMaquinaTripaB"
                                                    >MINERVA 1/8
                                                </option>
                                                <option 
                                                    value="Cylinder" 
                                                    name="tipoMaquinaTripaB"
                                                    >CYLINDER
                                                </option>
                                                <option 
                                                    value="Manugraph" 
                                                    name="tipoMaquinaTripaB"
                                                    >MANUGRAPH
                                                </option>
                                                <option 
                                                    value="NoAplica" 
                                                    name="tipoMaquinaTripaB"
                                                    >NO APLICA
                                                </option>
                                            </select>
                                            <br />
                                            <h5>Tipo de Montaje</h5>
                                            <select class="form-select" aria-label="Default select example">
                                                <option selected>Tipo de Montaje</option>
                                                <option 
                                                    value="Sencillo" 
                                                    name="tipoMontajeTripaB"
                                                    >Sencillo
                                                </option>
                                                <option 
                                                    value="Doble Paralelo" 
                                                    name="tipoMontajeTripaB"
                                                    >Doble Paralelo
                                                </option>
                                                <option 
                                                    value="Doble Banda"  
                                                    name="tipoMontajeTripaB"
                                                    >Doble Banda
                                                </option>
                                                <option 
                                                    value="Terciado" 
                                                    name="tipoMontajeTripaB"
                                                    >Terciado
                                                    </option>
                                                <option 
                                                    value="En Forma" 
                                                    name="tipoMontajeTripaB"
                                                    >En Forma
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>  
                
                <fieldset className="form-group">
                    <nav aria-label="Page navigation example">
                        <br />
                        <ul className="pagination">
                            <li className="page-item page-link">
                                <Link to="/step1">
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

export default Step2Form