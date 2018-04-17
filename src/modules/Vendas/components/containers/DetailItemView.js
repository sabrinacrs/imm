import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

class DetailItemView extends Component {
    render (){
        const item = this.props.data;

        return (
            <View style={styles.container}>
                <Text style={styles.textProduto}>{item.produto}</Text>
                <Text style={styles.textProdutoEstoque}>Unid.: {item.estoque}</Text>
                <Text style={styles.textProdutoPreco}>R$ {item.preco}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginVertical: 15,
    },

    textProduto: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    },

    textProdutoEstoque: {
        color: '#000'
    },

    textProdutoPreco: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    }
});

export default DetailItemView;