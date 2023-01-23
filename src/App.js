import { useContext } from 'react';
import LoginForm from './components/loginform';
import './App.css';
import data from './data';
import { Store } from './utils/store';

function App() {

  const { state, dispatch} = useContext(Store)
  const {cart:{cartItems}} = state

  const addToCart = (id)=>{
    const product = data.products.find(x => x.id === id)
    const existItem = state.cart.cartItems.find(x => x.id === product.id)
    const quantity = existItem ? existItem.quantity + 1 : 1
// el quantity podria ser cambiado por IVA, algun otro impuesto y etc
// jeje holi

    dispatch({type:'ADD_TO_CART', payload: {...product, quantity}})
  }

  const delToCart = (id)=>{
    dispatch({type: 'CART_REMOVE_ITEM', payload: id})
  }

  return (
    <div className='page'>
      <LoginForm/>
      <div className="container">
        <div className='container'>

          <div className='col-md-8'>
            {/* seccion para productos */}
            <h1 className='text-center mt-4 mb-5'>Lista de tripa</h1>
              <div className='row row-cols-1 row-cols-md-3 g-3'>
                {
                  data.products.map(product =>(
                    <div key={product.id}>
                      <h3>{product.name}</h3>
                      <h5>{product.precio}BS</h5>
                      <button className='btn btn-primary' onClick={()=>addToCart(product.id)}>Agregar</button>
                    </div>
                  ))
                }
              </div>
          </div>

          <div className='col-md-4'>
            {/* seccion para orden de compra */}
            <div className=' card card-body mt-5'>
              <h3 className='text-center'>Cotizaciòn</h3>
              {
                cartItems.map((item)=> (
                  <div key={item.id}>
                    <p><button className="btn btn-danger" onClick={()=>delToCart(item)}>X</button><strong>{item.name}</strong></p>
                    <p>cantidad: {item.quantity}</p>
                  </div>
                ))
              }

              <div>
                Subtotal:({cartItems.reduce((a, c)=> a + c.quantity , 0)}) : $
                  {cartItems.reduce((a,c)=> a +c.quantity * c.precio, 0)}
              </div>
            </div>
          </div>
        </div>

        {/* es para pie de pagina */}
          <footer className='bg-dark p-3 mt-5'>
            <p className='text-center text-white'>Imprenta Nacional de la cultua</p>
            
          </footer>
        {/*  seccion para footer */}
      </div>
    </div>

  );
}

export default App;
