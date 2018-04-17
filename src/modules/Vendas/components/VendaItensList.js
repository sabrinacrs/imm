import React, { Component } from 'react';
import {  View, ScrollView, StyleSheet, Platform, TouchableHighlight, Text, } from 'react-native';
import { connect } from 'react-redux';

import ItemView from './containers/ItemView';

class VendaItensList extends Component {
    state = {
        itens: [
            {
                id: 1,
                produto: 'Produto 1',
                estoque: 3,
                info: 'Info produto',
                preco: 150.99,
                quantidade: 3,
                vendedor: '',
                cliente: '',
            },
            {
                id: 2,
                produto: 'Produto 2',
                estoque: 100,
                info: 'Podrutinho',
                preco: 15.75,
                quantidade: 30,
                vendedor: '',
                cliente: '',
            },
            {
                id: 3,
                produto: 'Produto 3',
                estoque: 45,
                info: 'Testeando',
                preco: 20.00,
                quantidade: 5,
                vendedor: '',
                cliente: '',
            },
            {
                id: 4,
                produto: 'Produto 4',
                estoque: 10000,
                info: 'Produto danificado',
                preco: 20.50,
                quantidade: 100,
                vendedor: '',
                cliente: '',
            },
        ]
    }

    render () {
        return (
            <View style={styles.container}>
                {/* Tab simulation */}
                <View style={styles.tab}>
                </View>

                <View style={styles.vendedor}>
                    <Text style={styles.vendedorText}>Vendedor</Text>
                </View>

                <ScrollView style={styles.itensList}>
                    { this.state.itens.map( item => 
                                <TouchableHighlight key={item.id} onPress={() => false}>
                                    <ItemView key={item.id} data={item} />
                                </TouchableHighlight>
                    )}
                </ScrollView>

                <View>
                    <TouchableHighlight style={styles.btnAdd} onPress={() => false}>
                        <Text style={styles.textBtnAdd}>+</Text>
                    </TouchableHighlight> 
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }, 

    tab: {
        backgroundColor: '#F2F2F2',
        height: 40,
    },

    vendedor: 
    {
        backgroundColor: '#F2F2F2',
        borderWidth: 0.5,
        borderColor: '#BDBDBD',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        padding: 2
    },

    vendedorText: {
        fontSize: 10,
        color: '#828282',
    },

    itensList: {
        flex: 2,
        padding: 20,
        marginBottom: 20
    },

    btnAdd: {
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#219653',                                    
        position: 'absolute',                                          
        bottom: 20,                                                    
        right: 20, 
    },
    
    textBtnAdd: {
        fontSize: 26,
        color: '#fff',
        position: 'absolute',                                          
        bottom: 15,                                                    
        right: 23, 
    },
});

export default VendaItensList;