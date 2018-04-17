import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Picker, TouchableHighlight, StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { setCliente, setVendedor } from '../../actions/orcamentos';
import { vendedores } from '../../../../config/data/vendedores';

class OrcamentoFormView extends Component {
    constructor(props) {
        super(props);
    }

    returnDataCliente(cliente) {
        this.props.setCliente(cliente); // setCliente é uma action que retorna o objeto cliente
    }

    returnDataVendedor(vendedor) {
        this.props.setVendedor(vendedor);
    }

    setVendedor(vendedorId) {
        var vendedor = vendedores.find((v) => { return v.id === vendedorId});
        this.props.setVendedor(vendedor);
    }

    render() {
        var { navigate } = this.props.navigation;
        let vendedoresItemns = vendedores.map((v, i) => {
            return <Picker.Item key={v.id} value={v.id} label={v.nome} />
        });

        console.log(this.props);

        return (
            <View style={styles.container}>
                <View style={styles.boxRow}>
                    <Text style={styles.label}>Vendedor:</Text>
                    <View style={styles.boxPicker}>
                        <Picker
                            selectedValue={this.props.vendedor.id}
                            onValueChange={(vendedorId) => this.setVendedor(vendedorId)}
                        >
                            {vendedoresItemns}
                        </Picker>
                    </View>
                </View>
                <View style={styles.boxRow}>
                    <Text style={styles.label}>Cliente:</Text>
                    <View style={styles.row}>
                        <TextInput 
                            value={this.props.cliente.nome}
                            style={styles.input}
                            placeholder=" Cliente" 
                            underlineColorAndroid='#00798c'
                        />
                        <TouchableHighlight 
                            style={styles.btnSearch} 
                            onPress={() => navigate('ClienteSearch', {returnDataCliente: this.returnDataCliente.bind(this)})}
                        >
                            <View style={styles.search}>
                                <Icon 
                                    name="search" 
                                    size={20} 
                                    color="#00798c" 
                                />
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={styles.boxRow}>
                    <View style={[styles.row, {justifyContent: 'space-between', alignItems: 'center'}]}>
                        <Text style={styles.label}>Total: R$ 0,00</Text>
                        <Text style={styles.label}>Qtde. itens: 0</Text>
                    </View>
                </View>

                {/* Separator */}
                <View style={styles.separator} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    boxRow: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 10
    },

    boxPicker: {
        borderColor: '#828282',
        borderWidth: 0.5
    },

    input: {
        height: 45,
        width: '90%',
        fontFamily: 'CircularStd-Book'
    },

    btnSearch: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingVertical: 5,
        height: 45,
        width: '10%'
    }, 

    search: {
        
    },

    label: {
        color: '#000',
        fontFamily: 'CircularStd-Bold'
    },

    separator: {
        height: 1, 
        backgroundColor: '#BDBDBD', 
        marginHorizontal: 20,
    },

    picker: {
        borderColor: '#fff',
    }
});

function mapStateToProps (state) {
    return {
        cliente: state.orcamentosReducer.cliente,
        vendedor: state.orcamentosReducer.vendedor,
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({
        setCliente,
        setVendedor,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrcamentoFormView);