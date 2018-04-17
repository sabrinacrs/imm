import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity } from 'react-native';

class ParcelaItemView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const parcela = this.props.data;
        const { navigate } = this.props.navigation;

        return (
            <TouchableHighlight style={[ styles.info, styles.produto ]} onPress={ () => navigate('ParcelaDetail', parcela) }>
                <View style={styles.boxInfo}>
                    <Text style={styles.parcelaTitle}>Parcela: { parcela.id }</Text>
                    <Text style={styles.parcelaValor}>Valor: <Text style={{ fontWeight: 'bold' }}>R$ { parcela.valor }</Text></Text>
                    <Text style={styles.parcelaData}>Data Vencimento: <Text style={{ fontWeight: 'bold' }}>{ parcela.dataVencimento }</Text></Text>
                </View>
            </TouchableHighlight>
        );
    }
}

//#region Styles
const styles = StyleSheet.create({
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

    info: {
        // marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        paddingHorizontal: 5
    },

    produtoId: {
        fontWeight: 'bold',
        color: '#000'
    },

    parcelaTitle: {
        fontWeight: 'bold',
        color: '#000'
    },

    parcelaValor: {
        color: '#000',
    },

    parcelaData: {
        color: '#000'
    },

    produtoPreco: {
        fontSize: 12,
        color: '#000'
    },
    textProdutoPreco: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
    },

    boxInfo: {
        padding: 10,
        flexDirection: 'column',
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
//#endregion Styles

export default ParcelaItemView;