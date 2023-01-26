import React from "react";
import { Link } from "react-router-dom";

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
                <div class="container">
                    <form>
                        <div class="row">
                            <div class="col">
                                <input type="number" class="form-control" placeholder="Numero de ejemplares" />
                            </div>
                        </div>
                    </form>
                </div>

               <div class="row">
                    <div class=" col dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                    
                        Tripa A
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/">Autoadhesivo (66x96 cms)</a>
                            <a class="dropdown-item" href="/">Carton de 1 kg</a>                                
                            <a class="dropdown-item" href="/">Cartulina Hilo (70x100 cms)</a>
                            <a class="dropdown-item" href="/">Cartulina Bristol 200 grs (48 cms)</a>
                            <a class="dropdown-item" href="/">Cartulina Sulfato Cal. 012 (70x100 cms)</a>
                            <a class="dropdown-item" href="/">Cartulina Sulfato Cal. 014 (70x100 cms)</a>                                    
                            <a class="dropdown-item" href="/">Cartulina Sulfato Cal. 016 (70x100 cms)</a>
                            <a class="dropdown-item" href="/">Opalina (70x100 cms)</a>
                        </div>
                        
                    </div>
                    
                    <div class="col">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">                                    
                        Tripa B
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/">Autoadhesivo (66x96 cms)</a>
                            <a class="dropdown-item" href="/">Carton de 1 kg</a>                                
                            <a class="dropdown-item" href="/">Cartulina Hilo (70x100 cms)</a>
                            <a class="dropdown-item" href="/">Cartulina Bristol 200 grs (48 cms)</a>
                            <a class="dropdown-item" href="/">Cartulina Sulfato Cal. 012 (70x100 cms)</a>
                            <a class="dropdown-item" href="/">Cartulina Sulfato Cal. 014 (70x100 cms)</a>                                    
                            <a class="dropdown-item" href="/">Cartulina Sulfato Cal. 016 (70x100 cms)</a>
                            <a class="dropdown-item" href="/">Opalina (70x100 cms)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Step2Form