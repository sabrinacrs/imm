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

class ClienteCreate extends Component {
    static navigationOptions = (props) => {
        const { clear } = props;
        console.log('ON NAVIGATION OPTIONS');
        console.log(props);
        console.log(this.clear);

        return {
            title: 'Novo cliente',
            headerRight: (
                <TouchableHighlight
                    style={{ paddingRight: 20 }}
                    onPress={() => false}
                >
                    <Icon name="trash" size={30} color="#4F5B66" />
                </TouchableHighlight>
            ),
        };
    };

    constructor(props) {
        super(props);

        this.clear = this.clear.bind(this);
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
                <ScrollView style={styles.main}> 
                    <View style={styles.content}>
                        <View style={styles.groupInput}>
                            <Hoshi
                                value={this.props.nome}
                                onChangeText={(text) => this.setNome(text)}
                                label={'Nome'}
                                borderColor={(this.props.nomeIsValid) ? '#00798c' : '#db1c1c'}
                                labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                inputStyle={styles.textInputs}
                            />
                            {
                                (this.props.nomeIsValid) ? null: 
                                <Text style={estilos.labelDanger}>* Campo obrigatório</Text>
                            }
                        </View>
                        
                         <View style={styles.groupInput}>
                            <Hoshi 
                                value={this.props.email}
                                onChangeText={(text) => this.setEmail(text)}
                                label={'E-mail'}
                                borderColor={(this.props.emailIsValid) ? '#00798c' : '#db1c1c'}
                                labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                inputStyle={styles.textInputs}
                                keyboardType='email-address'
                            />
                            {
                                (this.props.emailIsValid) ? null: 
                                <Text style={estilos.labelDanger}>* E-mail inválido</Text>
                            }
                        </View>
                        
                        <View style={styles.groupInput}>
                            <TextInputMask 
                                value={this.props.telefone}
                                onChangeText={(text) => this.setTelefone(text)}
                                type={'cel-phone'}
                                options={{
                                    format: '(99) 99999-9999'
                                }}
                                customTextInput={Hoshi}
                                customTextInputProps={{
                                    label: 'Telefone',
                                    borderColor: '#00798c',
                                    labelStyle: { fontFamily: 'CircularStd-Book' },
                                    inputStyle: styles.textInputs,
                                }}
                                keyboardType='phone-pad'
                                maxLength={15}
                            />
                            {
                                (this.props.telefoneIsValid) ? null: 
                                <Text style={estilos.labelDanger}>* Telefone inválido</Text>
                            }
                        </View>
                        
                        <View style={styles.groupInput}>
                            <Hoshi 
                                value={this.props.cpfCnpj}
                                onChangeText={(text) => this.setCpfCnpj(text)}
                                label={'CPF/CNPJ'}
                                borderColor={'#00798c'}
                                labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                inputStyle={styles.textInputs}
                                keyboardType='numeric'
                                maxLength={20}
                            />
                            {
                                (this.props.cpfCnpjIsValid) ? null: 
                                <Text style={estilos.labelDanger}>* Dados inválidos</Text>
                            }
                        </View>

                        <View style={styles.groupInputRow}>
                            <View style={[styles.groupInput, {width: '75%'}]}>
                                <Hoshi 
                                    value={this.props.endereco}
                                    onChangeText={(text) => this.setEndereco(text)}
                                    label={'Endereço'}
                                    borderColor={'#00798c'}
                                    labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                    inputStyle={styles.textInputs}
                                />
                            </View>

                            <View style={[styles.groupInput, {width: '20%'}]}>
                                <TextInputMask
                                    value={this.props.numero}
                                    onChangeText={(text) => this.setNumero(text)}
                                    type={'only-numbers'}
                                    customTextInput={Hoshi}
                                    customTextInputProps={{
                                        label: 'Nº',
                                        borderColor: '#00798c',
                                        labelStyle: { fontFamily: 'CircularStd-Book' },
                                        inputStyle: styles.textInputs,
                                    }}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        
                        <View style={styles.groupInput}>
                            <Hoshi 
                                value={this.props.bairro}
                                onChangeText={(text) => this.setBairro(text)}
                                label={'Bairro'}
                                borderColor={'#00798c'}
                                labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                inputStyle={styles.textInputs}
                            />
                        </View>
                        
                        <View style={styles.groupInput}>
                            <TextInputMask
                                value={this.props.cep}
                                onChangeText={(text) => this.setCep(text)}
                                type={'zip-code'}
                                options={{
                                    format: '99999-999'
                                }}
                                customTextInput={Hoshi}
                                customTextInputProps={{
                                    label: 'CEP',
                                    borderColor: '#00798c',
                                    labelStyle: { fontFamily: 'CircularStd-Book' },
                                    inputStyle: styles.textInputs,
                                }}
                                keyboardType='numeric'
                            />
                        </View>
                        
                        <View style={styles.groupInputRow}>
                            <View style={[ styles.groupInput, {width: '75%'} ]}>
                                <Hoshi 
                                    value={this.props.cidade}
                                    onChangeText={(text) => this.setCidade(text)}
                                    label={'Cidade'}
                                    borderColor={'#00798c'}
                                    labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                    inputStyle={styles.textInputs}
                                />
                            </View>

                            <View style={[ styles.groupInput, {width: '20%'} ]}>
                                <Hoshi 
                                    value={this.props.uf}
                                    onChangeText={(text) => this.setUf(text)}
                                    label={'UF'}
                                    borderColor={'#00798c'}
                                    labelStyle={{ fontFamily: 'CircularStd-Book' }}
                                    inputStyle={styles.textInputs}
                                    maxLength={2}
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Button 
                        title="Cadastrar" 
                        color="#219653" 
                        onPress={() => this.saveNewCliente()}
                    />
                </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(ClienteCreate);

// import React, { Component } from 'react';
// import { View, StyleSheet, Text, Button, ScrollView } from 'react-native';


// class ClienteCreate extends Component {



//     render() {
//         return (
//             <View style={styles.container}>
//                 <ScrollView>
                    
//                     {/* <View style={styles.footer}>
//                         <Button title="Cadastrar" color="#219653" onPress={() => false} />
//                     </View> */}
//                 </ScrollView>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: '#fff'
//     },
        
//     footer: {
//         // margin: 20
//     },
// });

// export default ClienteCreate;