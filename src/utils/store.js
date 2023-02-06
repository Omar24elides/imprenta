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
    tripa: {
        numEjemplares: "",
        anchoTripaA: "",
        altoTripaA: "",
        colorTTripaA: "",
        colorRTripaA: "",
        numeroPaginasTripaA: "",
        tripaA: "",
        tipoMaquinaTripaA: "",
        tipoMontajeTripaA: "",
        anchoTripaB: "",
        altoTripaB: "",
        colorTTripaB: "",
        colorRTripaB: "",
        numeroPaginasTripaB: "",
        TripaB: "",
        tipoMaquinaTripaB: "",
        tipoMontajeTripaB: "",
    },
    sustrato: {
        numEjemplares: "",
        anchoPortada: "",
        altoPortada: "",
        colorTPortada: "",
        colorRPortada: "",
        lomoPortada: "",
        solapaPortada: "",
        portada: "",
        tipoMaquinaPortada: "",
        tipoMontajePortada: "",
        anchoOtro: "",
        altoOtro: "",
        colorTOtro: "",
        colorROtro: "",
        otro: "",
        tipoMaquinaOtro: "",
        tipoMontajeOtro: "",
    },
    tinta: {
        tintaTripaANegroTexto:"",
        tintaTripaANegroTextoIlustracion:"",
        tintaTripaAAzulCuatricomia:"",
        tintaTripaARojoCuatricomia:"",
        tintaTripaAAmarilloCuatricomia:"",
        tintaTripaANegroCuatricomia:"",
        tintaTripaAMedioTono:"",
        tintaTripaAFondoTexto:"",
        tintaTripaAFondotrama:"",
        tintaTripaAFondoPlastificado:"",
        tintaTripaABarniz:"",
        tintaTripaBNegroTexto:"",
        tintaTripaBNegroTextoIlustracion:"",
        tintaTripaBAzulCuatricomia:"",
        tintaTripaBRojoCuatricomia:"",
        tintaTripaBAmarilloCuatricomia:"",
        tintaTripaBNegroCuatricomia:"",
        tintaTripaBMedioTono:"",
        tintaTripaBFondoTexto:"",
        tintaTripaBFondotrama:"",
        tintaTripaBFondoPlastificado:"",
        tintaTripaBBarniz:"",
        tintaPortadaNegroTexto:"",
        tintaPortadaNegroTextoIlustracion:"",
        tintaPortadaAzulCuatricomia:"",
        tintaPortadaRojoCuatricomia:"",
        tintaPortadaAmarilloCuatricomia:"",
        tintaPortadaNegroCuatricomia:"",
        tintaPortadaMedioTono:"",
        tintaPortadaFondoTexto:"",
        tintaPortadaFondotrama:"",
        tintaPortadaFondoPlastificado:"",
        tintaPortadaBarniz:"",
        tintaOtroNegroTexto:"",
        tintaOtroNegroTextoIlustracion:"",
        tintaOtroAzulCuatricomia:"",
        tintaOtroRojoCuatricomia:"",
        tintaOtroAmarilloCuatricomia:"",
        tintaOtroNegroCuatricomia:"",
        tintaOtroMedioTono:"",
        tintaOtroFondoTexto:"",
        tintaOtroFondotrama:"",
        tintaOtroFondoPlastificado:"",
        tintaOtroBarniz:"",
    },
    plancha: {
        tripaA: "",
        tripaB: "",
        portada: "",
        otroFormato: "",
    },
    manoObra: {
        conceptaTurno: "",
        conceptaHoras: "",
        conceptaDias: "",
        conceptaMes: "",
        conceptaHExtra: "",
        kordTurno: "",
        kordHoras: "",
        kordDias: "",
        kordMes: "",
        kordHExtra: "",
        oliverTurno: "",
        oliverHoras: "",
        oliverDias: "",
        oliverMes: "",
        oliverHExtra: "",
        gtoTurno: "",
        gtoHoras: "",
        gtoDias: "",
        gtoMes: "",
        gtoHExtra: "",
        parvaTurno: "",
        parvaHoras: "",
        parvaDias: "",
        parvaMes: "",
        parvaHExtra: "",
        rekordTurno: "",
        rekordHoras: "",
        rekordDias: "",
        rekordMes: "",
        rekordHExtra: "",
        minervaTurno: "",
        minervaHoras: "",
        minervaDias: "",
        minervaMes: "",
        minervaHExtra: "",
        cylinderTurno: "",
        cylinderHoras: "",
        cylinderDias: "",
        cylinderMes: "",
        cylinderHExtra: "",
        guillotinaTurno: "",
        guillotinaHoras: "",
        guillotinaDias: "",
        guillotinaMes: "",
        guillotinaHExtra: "",
        tigraTurno: "",
        tigraHoras: "",
        tigraDias: "",
        tigraMes: "",
        tigraHExtra: "",
        grapadoraTurno: "",
        grapadoraHoras: "",
        grapadoraDias: "",
        grapadoraMes: "",
        grapadoraHExtra: "",
        dobladoraTurno: "",
        dobladoraHoras: "",
        dobladoraDias: "",
        dobladoraMes: "",
        dobladoraHExtra: "",
        cosedoraTurno: "",
        cosedoraHoras: "",
        cosedoraDias: "",
        cosedoraMes: "",
        cosedoraHExtra: "",
        artisticaTurno: "",
        artisticaHoras: "",
        artisticaDias: "",
        artisticaMes: "",
        artisticaHExtra: "",
        krauseTurno: "",
        krauseHoras: "",
        krauseDias: "",
        krauseMes: "",
        krauseHExtra: "",
        fotolitoTurno: "",
        fotolitoHoras: "",
        fotolitoDias: "",
        fotolitoMes: "",
        fotolitoHExtra: "",
    },
    costo: {
        fresado: "",
        cosido: "",
        engrapado: "",
        cajas: "",
        estibas: "",
        estrechFilm: "",
        Rectilado: "",
        refilado: "",
        plegado: "",
        diagramacion: "",
        numeracion: "",

    }
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
                tripa: { ...payload }
            }
        
            return newState
        }
        case 'STEP_3' : {
            const newState = {
                ...state,
                sustrato: { ...payload }
            }

            return newState
        }
        case 'STEP_4' : {
            const newState = {
                ...state,
                tinta: { ...payload }
            }

            return newState
        }
        case 'STEP_5' : {
            const newState = {
                ...state,
                plancha: { ...payload }
            }

            return newState
        }
        case 'STEP_6' : {
            const newState = {
                ...state,
                manoObra: { ...payload }
            }

            return newState
        }
        case 'STEP_7' : {
            const newState = {
                ...state,
                costo: { ...payload }
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