const INITIAL_STATE = {
    cliente: {},
    vendedor: {},
}

export default function orcamentosReducer (state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'SET_CLIENTE': 
            return {
                cliente: action.cliente,
                vendedor: state.vendedor
            };

        case 'SET_VENDEDOR': 
            return {
                cliente: state.cliente,
                vendedor: action.vendedor
            };

        case 'SET_FILTERS':
            return {
                filtros: action.filtros,
            };

        default:
            return state;
    }
}