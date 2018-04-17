import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, } from 'react-native';

class ClienteItemView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const cliente = this.props.data;

        return (
            <TouchableHighlight style={styles.cliente} onPress={() => navigate('ClienteDetail', cliente)}>
                <View style={styles.clienteInfo}>
                    <Text style={styles.clienteId}>{cliente.id}     {cliente.nome}</Text>
                    <Text style={styles.clienteTelefone}>Tel: {cliente.telefone}</Text>
                    <Text style={styles.clienteTelefone}>End: {cliente.endereco}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

//#region Styles
const styles = StyleSheet.create({
    cliente: {
        backgroundColor: '#fff',
        height: 70,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#828282'
    },

    clienteInfo: {
        paddingHorizontal: 10
    },

    clienteId: {
        fontFamily: 'CircularStd-Bold',
        color: '#4F5B66'
    },

    regular: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },

    clienteName: {
        fontFamily: 'CircularStd-Bold',
        color: '#4F5B66'
    },

    clienteTelefone: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    }
});
//#endregion

export default ClienteItemView;