import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, } from 'react-native';

export default class ProdutoListItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const produto = this.props.data;
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.produto}>
                <TouchableHighlight style={styles.produtoInfo} onPress={() => navigate('ProdutoDetail', produto)}>
                    <View style={styles.boxInfo}>
                        <View style={styles.boxProdutoInfoLeft}>
                            <Text style={styles.produtoId}>Cód.: { produto.id }   { produto.descricao }</Text>
                            <Text style={styles.regular}>Estoque: { produto.estoqueDisponivel }</Text>
                        </View>

                        <View style={styles.boxProdutoInfoRight}>
                            <Text style={styles.textProdutoPreco}>R$ { produto.valorVenda }</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    produto: {
        backgroundColor: '#fff',
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#828282',
        paddingLeft: 10,
    },

    regular: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },

    produtoInfo: {
        // marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingHorizontal: 5
    },

    produtoId: {
        fontFamily: 'CircularStd-Bold',
        color: '#4F5B66'
    },

    produtoDescricao: {
        fontWeight: 'bold',
        color: '#000'
    },

    produtoEstoque: {
        // fontSize: 12,
        fontFamily: 'CircularStd-Book',
        color: '#000',
    },

    produtoInfoMore: {
        fontSize: 14,
        color: '#999',
        fontFamily: 'CircularStd-Book',
    },

    produtoPreco: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'CircularStd-Book',
    },
    textProdutoPreco: {
        fontSize: 16,
        color: '#4F5B66',
        fontFamily: 'CircularStd-Bold',
    },

    boxInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    boxProdutoInfoLeft: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 5,
        width: '60%'
    },

    boxProdutoInfoRight: {
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '40%',
    },

    
});