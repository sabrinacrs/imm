import React, { Component } from 'react';
import { View, StyleSheet, Platform, TouchableHighlight, Text } from 'react-native';

class OrcamentoItemView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const orcamento = this.props.data;
        var { navigate } = this.props.navigation;

        return (
            <TouchableHighlight 
                style={styles.orcamento}
                onPress={() => navigate('OrcamentoDetail', orcamento)}
            >
                <View>
                    <View style={styles.orcamentoInfo}>

                        <View style={styles.row}>
                            <Text style={styles.textOrcamentoHeader}>Código</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Vendedor:</Text>
                            <Text style={styles.regular}>{orcamento.vendedor}</Text>
                        </View>
                        
                        <View style={styles.row}>
                            <Text style={styles.label}>Cliente:</Text>
                            <Text style={styles.regular}>{orcamento.cliente}</Text>
                        </View>

                        <View style={styles.row}>
                            <Text style={styles.label}>Data Emissão:</Text>
                            <Text style={styles.regular}>{orcamento.dataEmissao}</Text>
                        </View>
                        
                        <View style={styles.row}>
                            <Text style={[styles.totalPedidoText, {width: 120}]}>Total: </Text>
                            <Text style={styles.totalPedidoText}>R$ {orcamento.total}</Text>                        
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    orcamento: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: '#D3DDE8',
    },

    orcamentoHeader: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
    },

    orcamentoInfo: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 10
    },

    textOrcamentoHeader: {
        color: '#00798c',
        fontFamily: 'CircularStd-Bold',
    },

    label: {
        width: 120,
        fontFamily: 'CircularStd-Book',
        color: '#333'
    },

    title: {
        fontSize: 30,
        fontFamily: 'CircularStd-Bold',
        color: '#4F5B66'
    },

    regular: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },

    info: {
        color: '#333',
        paddingBottom: 5,
    },

    vendedorText: {
        color: '#333',
        fontFamily: 'CircularStd-Book',
        paddingBottom: 5
    },

    clienteText: {
        color: '#333',
        fontFamily: 'CircularStd-Book',
        paddingBottom: 5
    },

    totalPedidoText: {
        color: '#333',
        fontFamily: 'CircularStd-Book',
    },

    row: {
        flexDirection: 'row',
    }
});

export default OrcamentoItemView;