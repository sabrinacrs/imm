export default function counterReducer (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':   
            return state + 1;
        case 'DECREMENT':   
            return (state <= 0) ? 0 : state - 1;
        case 'UPDATE_COUNTER':
            if(action.countValue == "") {
                state = 0;
            } else {
                state = parseFloat(action.countValue); 
            }
            return state;

        default:
            return state;
    } 
}