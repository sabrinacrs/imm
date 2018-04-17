import React, { Component } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet, Platform, TouchableHighlight, Text } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import ParcelaItemView from './containers/ParcelaItemView';

class ParcelasList extends Component {
    state = {
        parcelas: [
            {
                id: 1,
                cliente: 1,
                vendedor: 1,
                descricao: 'Parcela 4',
                dataGeracao: '10/09/2010',
                dataVencimento: '10/10/2010',
                valor: 20.50,
                valorPago: 20.50,
                desconto: 0.00,
                formaPagamento: 'Prazo'
            },
            {
                id: 2,
                cliente: 1,
                vendedor: 1,
                descricao: 'Parcela 2',
                dataGeracao: '10/09/2010',
                dataVencimento: '10/11/2010',
                valor: 20.50,
                valorPago: 20.50,
                desconto: 0.00,
                formaPagamento: 'Prazo'
            },
            {
                id: 3,
                cliente: 1,
                vendedor: 1,
                descricao: 'Parcela 3',
                dataGeracao: '10/09/2010',
                dataVencimento: '10/12/2010',
                valor: 20.50,
                valorPago: 20.50,
                desconto: 0.00,
                formaPagamento: 'Prazo'
            },
            {
                id: 4,
                cliente: 1,
                vendedor: 1,
                descricao: 'Parcela 4',
                dataGeracao: '10/09/2010',
                dataVencimento: '10/01/2011',
                valor: 20.50,
                valorPago: 20.50,
                desconto: 0.00,
                formaPagamento: 'Prazo'
            },
        ]
    }

    constructor(props) {
        super(props);

        console.log("Parcelas list props");
        console.log(props);
    }

    render () {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TextInput style={styles.textInputBusca} underlineColorAndroid='rgba(0, 0, 0, 0)' placeholder=" Procurar parcela" />
                    <TouchableHighlight style={styles.btnSearch}>
                    <Text>Ir</Text>
                    </TouchableHighlight>
                </View>

                <ScrollView style={styles.produtoList}>
                    { this.state.parcelas.map(parcela => 
                        <ParcelaItemView 
                            key={parcela.id} 
                            data={parcela} 
                            navigation={this.props.navigation} 
                        />
                    )}
                </ScrollView>
            </View>
        );
    }
}

//#region Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        paddingTop: (Platform.OS === 'ios') ? 50 : 20,
        padding: 10
    },

    produtoList: {
        flex: 2,
        padding: 20
    },

    produto: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#D3DDE8'
    },

    textInputBusca: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: '#BDBDBD',
      },
    
      btnSearch: {
        width: '20%',
        height: 50,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center'
      },
});
//#endregion End styles


export default ParcelasList;