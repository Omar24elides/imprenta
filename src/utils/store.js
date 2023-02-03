// uso similar a un carrito
import { useReducer, createContext } from "react";

export const Store = createContext();

//estado inicial de la aplicacion o variable de estado
const initialState = {
    cliente: {
        razon: "",
        documento: "", 
        email: "", 
        password: "",
    },
    libro: {}
}

function reducer(state, { type, payload }) {
    switch (type) {
        case 'STEP_1' : {
            const newState = {
                ...state,
                cliente: { ...payload }
            }

            return newState
        }
        case 'STEP_2' : {
            const newState = {
                ...state,
                libro: { ...payload }
            }

            return newState
        }

        default: 
            return state;
    }
}

// funcion para crear el store y envolver a los componentes hijos
export function StoreProvider ({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
}