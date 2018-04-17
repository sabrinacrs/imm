// equivale ao index dos reducers que estão nos componentes
// usa combinereducers aqui
// dá import em todos os reducers
import { combineReducers } from 'redux';

import vendasReducers from '../../modules/Vendas/reducers/vendasReducers';
import counterReducer from '../../modules/defaults/Counter/reducers/contador';
import orcamentosReducer from '../../modules/Orcamentos/reducers/orcamentos';
import clienteReducers from '../../modules/Clientes/redux/reducers/clienteReducers';

export default reducers = combineReducers({
    vendasReducers,
    counterReducer,
    orcamentosReducer,
    clienteReducers: clienteReducers,
});