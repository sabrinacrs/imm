export function setCliente (cliente) {
    return {
        type: 'SET_CLIENTE',
        cliente
    }
}

export function setVendedor (vendedor) {
    return {
        type: 'SET_VENDEDOR',
        vendedor
    }
}

export function setFilters (filtros) {
    return {
        type: 'SET_FILTERS',
        filtros
    }
}