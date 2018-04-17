import { INCREMENT_ITEM, DECREMENT_ITEM } from '../../../config/redux/actionTypes';

const update = (state, mutations) =>
    Object.assign({}, state, mutations);

export const INITIAL_STATE = {
    quantidade: 1,
}

const vendasReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INCREMENT_ITEM:
            state = update(state, { quantidade: state.quantidade + 1 });
            console.log(state);
            break;

        case DECREMENT_ITEM:
            state = update(state, { quantidade: state.quantidade - 1 });
            console.log(state);
            break;
    }
    return state;
}

export default vendasReducers;