import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, SearchBar, Slider } from 'react-native-elements';
import { setClienteToUpdate } from '../redux/actions/clienteActions';

export default class ClienteDetail extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;

        return {
            title: 'Cliente',
            headerRight: (
                <TouchableHighlight
                    style={{ paddingRight: 20 }}
                    onPress={() => navigate('ClienteCreateStack', this.props.cliente)}
                >
                    <Icon name="pen" size={30} color="#4F5B66" />
                </TouchableHighlight>
            ),
        };
    };

    constructor(props) {
        super(props);

        const cliente = this.props.navigation.state.params;
        this.props.setClienteToUpdate(cliente);
    }

    render() {
        // const cliente = this.props.navigation.state.params;
        // this.props.setClienteToUpdate(cliente);

        console.log('PROPS');
        console.log(this.props);

        console.log('PROP CLIENTE');
        console.log(this.props.cliente);

        return (
            <View style={styles.container}>
                <ScrollView >
                    <View style={styles.clienteInfo}>
                        <View style={styles.row}>
                            <Text style={styles.label}>Nome:</Text>
                            <TextInput 
                                value={cliente.nome} 
                                editable={this.editable}
                                underlineColorAndroid='#00798c'
                                style={styles.textInput} 
                                editable={false}
                            />
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>E-mail:</Text>
                            <TextInput 
                                value={cliente.email} 
                                editable={this.editable}
                                underlineColorAndroid='#00798c'
                                style={styles.textInput} 
                                editable={false}
                            />
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Telefone:</Text>
                            <TextInput 
                                value={cliente.telefone} 
                                editable={this.editable}
                                underlineColorAndroid='#00798c'
                                style={styles.textInput} 
                                editable={false}
                            />
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>CPF/CNPJ:</Text>
                            <TextInput 
                                value={cliente.cpfCnpj} 
                                editable={this.editable}
                                underlineColorAndroid='#00798c'
                                style={styles.textInput} 
                                editable={false}
                            />
                        </View>

                        <View style={styles.groupInputRow}>
                            <View style={[styles.row, {width: '75%'}]}>
                                <Text style={styles.label}>Logradouro:</Text>
                                <TextInput 
                                    value={cliente.endereco} 
                                    editable={this.editable}
                                    underlineColorAndroid='#00798c'
                                    style={styles.textInput} 
                                    editable={false}
                                />
                            </View>

                            <View style={[styles.row, {width: '20%'}]}>
                                <Text style={styles.label}>Nº:</Text>
                                <TextInput 
                                    value={cliente.numero + ""} 
                                    editable={this.editable}
                                    underlineColorAndroid='#00798c'
                                    style={styles.textInput} 
                                    editable={false}
                                />
                            </View>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Bairro:</Text>
                            <TextInput 
                                value={cliente.bairro}
                                editable={this.editable}
                                underlineColorAndroid='#00798c'
                                style={styles.textInput} 
                                editable={false}
                            />
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>CEP:</Text>
                            <TextInput 
                                value={cliente.cep}
                                editable={this.editable}
                                underlineColorAndroid='#00798c'
                                style={styles.textInput} 
                                editable={false}
                            />
                        </View>

                        <View style={styles.groupInputRow}>
                            <View style={[styles.row, {width: '75%'}]}>
                                <Text style={styles.label}>Cidade:</Text>
                                <TextInput 
                                    value={cliente.cidade}
                                    editable={this.editable}
                                    underlineColorAndroid='#00798c'
                                    style={styles.textInput}
                                    editable={false} 
                                />
                            </View>
                            <View style={[styles.row, {width: '20%'}]}>
                                <Text style={styles.label}>UF:</Text>
                                <TextInput 
                                    value={cliente.uf}
                                    editable={this.editable}
                                    underlineColorAndroid='#00798c'
                                    style={styles.textInput}
                                    editable={false} 
                                />
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <TouchableHighlight style={styles.btnSave} onPress={() => false}>
                        <Text style={styles.textBtn}>Salvar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    clienteInfo: {
        marginTop: 20,
        marginBottom: 40,
        paddingHorizontal: 20,
    },

    row: {
        paddingBottom: 20
    },

    groupInputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    label: {
        fontFamily: 'CircularStd-Book',
        color: '#333'
    },

    regular: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },

    textInput: {
        height: 45,
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },

    btnSave: {
        height: '100%',
        backgroundColor: '#219653',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textBtn: {
        color: '#fff',
        fontFamily: 'CircularStd-Book',
    },

    footer: {
        position: 'absolute',
        width: '100%',
        height: 40,
        bottom: 0,
        right: 0
    }
});

function mapStateToProps() {
    return {
        cliente: state.clienteReducers.cliente,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setClienteToUpdate
    }, dispatch);
}