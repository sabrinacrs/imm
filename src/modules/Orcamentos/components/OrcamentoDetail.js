// Tem detalhes do orcamento e lista de itens
import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import OrcamentoFormView from '../components/containers/OrcamentoFormView';
import OrcamentoItensListView from '../components/containers/OrcamentoItensListView';

class OrcamentoDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const orcamento = this.props.navigation.state.params;

        return (
            <View>
                <OrcamentoFormView orcamento={orcamento} navigation={this.props.navigation} />
                <OrcamentoItensListView orcamento={orcamento} />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});

export default OrcamentoDetail;