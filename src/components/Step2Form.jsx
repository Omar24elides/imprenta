import React from "react";
// import { Link } from "react-router-dom";

const Step2Form = () => {
    return (
        <div>            
            <div className='container'>
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="https://imprentadelacultura.wordpress.com/">
                        <img src="https://imprentadelacultura.files.wordpress.com/2015/04/logo-imprenta.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                        Fundacion Imprenta de la Cultura
                    </a>
                </nav>

                <div class="row">
                    <div class="container">
                        <form>
                            <div class="row">
                                <div class="col">
                                    <input type="number" class="form-control" placeholder="Numero de ejemplares" />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Tripa A</h5>
                                <div>
                                    <select>
                                        <option value="Autoadhesivo (66x96 cms)">Autoadhesivo (66x96 cms)</option>
                                        <option value="Carton de 1 kg">Carton de 1 kg</option>                                
                                        <option value="Cartulina Hilo (70x100 cms)">Cartulina Hilo (70x100 cms)</option>
                                        <option value="Cartulina Bristol 200 grs (48 cms)">Cartulina Bristol 200 grs (48 cms)</option>
                                        <option value="Cartulina Sulfato Cal. 012 (70x100 cms)">Cartulina Sulfato Cal. 012 (70x100 cms)</option>
                                        <option value="Cartulina Sulfato Cal. 014 (70x100 cms)">Cartulina Sulfato Cal. 014 (70x100 cms)</option>                                    
                                        <option value="Cartulina Sulfato Cal. 016 (70x100 cms)">Cartulina Sulfato Cal. 016 (70x100 cms)</option>
                                        <option value="Opalina (70x100 cms)">Opalina (70x100 cms)</option>    
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="card">
                            <h5 class="card-title">Tripa A</h5>
                                <div>
                                    <select>
                                        <option value="Autoadhesivo (66x96 cms)">Autoadhesivo (66x96 cms)</option>
                                        <option value="Carton de 1 kg">Carton de 1 kg</option>                                
                                        <option value="Cartulina Hilo (70x100 cms)">Cartulina Hilo (70x100 cms)</option>
                                        <option value="Cartulina Bristol 200 grs (48 cms)">Cartulina Bristol 200 grs (48 cms)</option>
                                        <option value="Cartulina Sulfato Cal. 012 (70x100 cms)">Cartulina Sulfato Cal. 012 (70x100 cms)</option>
                                        <option value="Cartulina Sulfato Cal. 014 (70x100 cms)">Cartulina Sulfato Cal. 014 (70x100 cms)</option>                                    
                                        <option value="Cartulina Sulfato Cal. 016 (70x100 cms)">Cartulina Sulfato Cal. 016 (70x100 cms)</option>
                                        <option value="Opalina (70x100 cms)">Opalina (70x100 cms)</option>    
                                    </select>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Step2Form