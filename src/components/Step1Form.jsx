import React from "react";

const Step1Form = () => {
    return (
        <div>
            <div className='container'>
                <nav class="navbar navbar-light bg-light">
                    <a class="navbar-brand" href="https://imprentadelacultura.wordpress.com/">
                        <img src="https://imprentadelacultura.files.wordpress.com/2015/04/logo-imprenta.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
                        Fundacion Imprenta de la Cultura
                    </a>
                </nav>
            </div>            
            <form>
                <div class="row">
                    <div class="col">
                    <label for="exampleInputEmail1">Razón Social</label>
                    <input type="text" class="form-control" placeholder="Razón Social"/>
                </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">Tipo decumento</legend>
                                <div class="col form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                        <label class="form-check-label" for="inlineRadio1">V</label>
                                </div>
                                <div class="col form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                        <label class="form-check-label" for="inlineRadio2">J</label>
                                </div>
                                <div class="col form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                        <label class="form-check-label" for="inlineRadio3">E</label>
                                </div>
                                <div class="col form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                        <label class="form-check-label" for="inlineRadio4">P</label>
                                </div>
                                <div class="col form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                        <label class="form-check-label" for="inlineRadio5">G</label>
                                </div>
                        </div>
                    </fieldset>
                </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo Electronico</label>
                        <input type class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ejemplo@gmail.com" />
                    </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"/>
                </div>
                <button type="submit" class="btn btn-primary">Siguiente</button>
            </form> 
        </div>
    )
}

export default Step1Form
