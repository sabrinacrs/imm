const INITIAL_STATE = {
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    uf: '',
    cep: '',
    endereco: '',
    numero: '',
    bairro: '',
    cpfCnpj: '',
    cliente: {},
    clientes: {},
    nomeIsValid: true,
    emailIsValid: true,
    telefoneIsValid: true,
    cpfCnpjIsValid: true,
    cepIsValid: true,
}

export default function clienteReducers(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'CLEAR': 
            state = INITIAL_STATE;
            return state;

        case 'MODIFY_NOME':
            return { 
                ...state, 
                nome: action.payload.nome, 
                nomeIsValid: action.payload.nomeIsValid
            };

        case 'MODIFY_EMAIL':
            return { 
                ...state,
                email: action.payload.email, 
                emailIsValid: action.payload.emailIsValid 
            };
            
        case 'MODIFY_TELEFONE':
            return { 
                ...state, 
                telefone: action.payload.telefone, 
                telefoneIsValid: action.payload.telefoneIsValid
            };

        case 'MODIFY_CPF_CNPJ':
            return { 
                ...state, 
                cpfCnpj: action.payload.cpfCnpj,
                cpfCnpjIsValid: action.payload.cpfCnpjIsValid
            };
        
        case 'MODIFY_CEP':
            return { 
                ...state, 
                cep: action.payload.cep,
                cepIsValid: action.payload.cepIsValid
            };

        case 'MODIFY_CIDADE':
            return { ...state, cidade: action.payload };
        case 'MODIFY_UF':
            return { ...state, uf: action.payload };
        case 'MODIFY_ENDERECO':
            return { ...state, endereco: action.payload };
        case 'MODIFY_NUMERO':
            return { ...state, numero: action.payload };
        case 'MODIFY_BAIRRO':
            return { ...state, bairro: action.payload };
        case 'GET_ALL_CLIENTES':
            return { ...state, clientes: action.payload };
        case 'UPDATE_CLIENTE':
            return { ...state, cliente: action.payload };
        case 'SET_CLIENTE':
            return { ...state, cliente: action.payload };

        default:
            return state;
    }
}