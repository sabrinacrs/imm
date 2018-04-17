import { INCREMENT_ITEM, DECREMENT_ITEM, SET_QTDE_ITEM } from '../../../config/redux/actionTypes';

function setQtdeItem(quantidade) {
    return {
        type: SET_QTDE_ITEM,
        quantidade
    }
}

export function incrementAction(quantidade) {
    return {
        type: INCREMENT_ITEM,
        quantidade
    }
}

export function decrementAction(quantidade) {
    return {
        type: DECREMENT_ITEM,
        quantidade
    }
}