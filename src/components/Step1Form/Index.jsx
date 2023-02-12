import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Store } from "../../utils/store";

const Step1Form = () => {
  const history = useHistory();
  const { dispatch } = useContext(Store);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    let newCliente = {};
    // En la consola se puede apreciar cada uno de los valores del form
    for (let [key, value] of formData.entries()) {
      newCliente[key] = value;
    }

    dispatch({ type: "STEP_1", payload: { ...newCliente } });

    // Comentar esto para pausar el cambio de pagina y poder ver la consola
    history.push("/step2");
  };

  const addToCart = (id) => {
    const product = data.products.find((x) => x.id === id);
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity } });
  };

  const delToCart = (id) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: id });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col">
          <label htmlFor="exampleInputEmail1">Razón Social</label>
          <input
            name="razon"
            type="text"
            className="form-control"
            placeholder="Razón Social"
          />
          <br />
        </div>

        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">
              Tipo decumento
            </legend>
            <div className="col form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="documento"
                id="documento-v"
                value="v"
              />
              <label className="form-check-label" htmlFor="documento-v">
                V
              </label>
            </div>
            <div className="col form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="documento"
                id="documento-j"
                value="j"
              />
              <label className="form-check-label" htmlFor="documento-j">
                J
              </label>
            </div>
            <div className="col form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="documento"
                id="documento-e"
                value="e"
              />
              <label className="form-check-label" htmlFor="documento-e">
                E
              </label>
            </div>
            <div className="col form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="documento"
                id="documento-p"
                value="p"
              />
              <label className="form-check-label" htmlFor="documento-p">
                P
              </label>
            </div>
            <div className="col form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="documento"
                id="documento-g"
                value="g"
              />
              <label className="form-check-label" htmlFor="documento-g">
                G
              </label>
            </div>
            <br />
          </div>
        </fieldset>
      </div>

      <div className="form-group">
        <br />
        <label htmlFor="exampleInputEmail1">Correo Electronico</label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="ejemplo@gmail.com"
        />
      </div>

      <div className="form-group">
        <br />
        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          placeholder="Contraseña"
        />
        <br />
        <br />
      </div>

      <button type="submit" className="btn btn-primary">
        Siguiente
      </button>
    </form>
  );
};

export default Step1Form;
