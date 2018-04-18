import React, { Component } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextInputMask } from 'react-native-masked-text';
import { Hoshi } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/FontAwesome';

import estilos from '../../../appStyle';
import { validateEmail, validaCnpj, validaCpf, validaCpfCnpj } from '../../../utils/validations';
import Cliente from '../../../models/Cliente';
import { 
    clear, 
    modifyNome,
    modifyEmail,
    modifyCpfCnpj,
    modifyEndereco,
    modifyNumero, 
    modifyBairro,
    modifyTelefone,
    modifyCep,
    modifyCidade,
    modifyUF,
    saveCliente, 
    getAllCientes,
} from '../redux/actions/clienteActions';

class ClienteUpdate extends Component {
    constructor(props) {
        super(props);
    }

    clearFields() {
        this.props.clear();
    }

    setNome(nome) {
        this.props.modifyNome(nome);
    }

    setEmail(email) {
        this.props.modifyEmail(email);
    }

    setEndereco(endereco) {
        this.props.modifyEndereco(endereco);
    }

    setTelefone(telefone) {
        this.props.modifyTelefone(telefone);
    }

    setNumero(numero) {
        this.props.modifyNumero(numero);
    }

    setCpfCnpj(cpfCnpj) {
        this.props.modifyCpfCnpj(cpfCnpj);
    }

    setBairro(bairro) {
        this.props.modifyBairro(bairro);
    }

    setCep(cep) {
        this.props.modifyCep(cep);
    }

    setCidade(cidade) {
        this.props.modifyCidade(cidade);
    }

    setUf(uf) {
        this.props.modifyUF(uf);
    }

    saveNewCliente() {
        const { nome, email, cpfCnpj, endereco, numero, bairro, telefone, cep, cidade, uf } = this.props;
        
        // parse numero
        const numeroInt = (numero == "") ? 0 : parseInt(numero);

        // instância de novo cliente
        const newCliente = new Cliente(nome, email, cpfCnpj, endereco, numeroInt, bairro, telefone, cep, cidade, uf);

        if(this.formValidate()) {
            // remove pontos e traços do cpf/cnpj para gravar apenas numeros no banco
            newCliente.cpfCnpj = newCliente.cpfCnpj.replace(/[^\d]/g,"");

            this.props.saveCliente(newCliente);
            
            // clear fields
            this.props.clear();
        }
    }

    formValidate() {
        let flag = true;

        // valida nome
        if(this.props.nome.length < 3) {
            this.setNome(this.props.nome);
            flag = false;
        }
        
        // valida email
        if(!validateEmail(this.props.email)) {
            this.setEmail(this.props.email);
            flag = false;
        }

        // valida telefone
        if(this.props.telefone !== "" && this.props.telefone.length < 14) {
            this.setTelefone(this.props.telefone);
            flag = false;
        }

        // valida cpf / cnpj
        if(this.props.cpfCnpj !== "" && !validaCpfCnpj(this.props.cpfCnpj)) {
            this.setCpfCnpj(this.props.cpfCnpj);
            flag = false;
        }

        // validar cep
        if(this.props.cep != "" && this.props.cep.length < 9) {
            this.setCep(this.props.cep);
            flag = false;
        }

        return flag;
    }

    getClientes() {
        getAllCientes();
        console.log(this.props.clientes);
    }

    render() {
        return (
            <View>

            </View>
        );
    }
}

//#region Styles
const styles = StyleSheet.create({
    main: {
        height: '95%',
        backgroundColor: '#f9f9f9',
    },

    header: {
        margin: 20
    },

    content: {
        // margin: 20,
        padding: 20,
        justifyContent: 'center'
    },

    footer: {
        // margin: 20
        height: '10%',
    },
    
    groupInput: {
        marginBottom: 25
    },

    groupInputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    viewTextInputs: {
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    viewTouch: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewButtons: {
        margin: 30,
    },

    regular: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },

    label: {
        fontFamily: 'CircularStd-Book',
        color: '#333'
    },

    textLabel: {
        color: '#fff',
        fontSize: 15,
        fontFamily: 'CircularStd-Book',
    },

    textInputs: {
        fontSize: 20,
        height: 45,
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },
    
    textTouch: {
        marginTop: 20,
        color: '#fff',
        fontSize: 15,
        fontFamily: 'CircularStd-Book',
    },

    touchButton: {
        backgroundColor: '#e55321',
        color: '#fff',
        fontSize: 15,
        padding: 5,
        textAlign: 'center',
        fontFamily: 'CircularStd-Book',
    }
});
//#endregion

function mapStateToProps(state) {
    return {
        nome: state.clienteReducers.nome,
        email: state.clienteReducers.email,
        cpfCnpj: state.clienteReducers.cpfCnpj,
        endereco: state.clienteReducers.endereco,
        numero: state.clienteReducers.numero,
        bairro: state.clienteReducers.bairro,
        telefone: state.clienteReducers.telefone,
        cep: state.clienteReducers.cep,
        cidade: state.clienteReducers.cidade,
        uf: state.clienteReducers.uf,
        clientes: state.clienteReducers.clientes,
        
        nomeIsValid: state.clienteReducers.nomeIsValid,
        emailIsValid: state.clienteReducers.emailIsValid,
        telefoneIsValid: state.clienteReducers.telefoneIsValid,
        cpfCnpjIsValid: state.clienteReducers.cpfCnpjIsValid,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        clear,
        modifyNome,
        modifyEmail,
        modifyCpfCnpj,
        modifyEndereco,
        modifyNumero, 
        modifyBairro,
        modifyTelefone,
        modifyCep,
        modifyCidade,
        modifyUF,
        saveCliente,
        getAllCientes,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ClienteUpdate);