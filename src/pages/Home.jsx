import { useContext } from 'react';
import data from '../data';
import { Store } from '../utils/store';
import PageComponent from "./PageComponent";

function Home() {

    const { state, dispatch } = useContext(Store)
    const { cart: { cartItems } } = state

    const addToCart = (id) => {
        const product = data.products.find(x => x.id === id)
        const existItem = state.cart.cartItems.find(x => x.id === product.id)
        const quantity = existItem ? existItem.quantity + 1 : 1


        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } })
    }

    const delToCart = (id) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: id })
    }

    return (
        <PageComponent>
            <div className="container">
                <div className='col-md-8'>
                    {/* seccion para productos */}
                    <h1 className='text-center mt-4 mb-5'>Servicio de presupuesto</h1>
                    <div className='row row-cols-1 row-cols-md-3 g-3'>
                        {
                            data.products.map(product => (
                                <div key={product.id}>
                                    <h3>{product.name}</h3>
                                    <h5>{product.precio}BS</h5>
                                    <button className='btn btn-primary' onClick={() => addToCart(product.id)}>Agregar</button>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className='col-md-4'>
                    {/* seccion para orden de compra */}
                    <div className=' card card-body mt-5'>
                        <h3 className='text-center'>Cotización</h3>
                        {
                            cartItems.map((item) => (
                                <div key={item.id}>
                                    <p><button className="btn btn-danger" onClick={() => delToCart(item)}>X</button><strong>{item.name}</strong></p>
                                    <p>cantidad: {item.quantity}</p>
                                </div>
                            ))
                        }

                        <div>
                            Subtotal:({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                            {cartItems.reduce((a, c) => a + c.quantity * c.precio, 0)}
                        </div>
                    </div>
                </div>
            </div>
        </PageComponent>
    );
}

export default Home;
