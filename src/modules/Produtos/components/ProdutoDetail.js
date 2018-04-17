import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';

import ProdutoFormView from './containers/ProdutoFormView';

class ProdutoDetail extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        const produto = this.props.navigation.state.params;

        return (
            <View style={{ backgroundColor: '#fff' }}>
                <ProdutoFormView data={produto} />

                {/* <View style={styles.footer}>
                    <TouchableHighlight style={styles.btnSave} onPress={() => false}>
                        <Text style={styles.textBtn}>Salvar</Text>
                    </TouchableHighlight>
                </View> */}
            </View>
        );
    }
}

//#region Styles
const styles = StyleSheet.create({
    btnSave: {
        height: '100%',
        backgroundColor: '#219653',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textBtn: {
        color: '#fff',
    },

    footer: {
        position: 'absolute',
        width: '100%',
        height: 40,
        bottom: 0,
        right: 0
    }
});
//#endregion

export default ProdutoDetail;