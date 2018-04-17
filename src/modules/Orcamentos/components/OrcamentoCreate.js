import React, { Component } from 'react';
import { View, StyleSheet, TouchableHighlight, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCliente, setVendedor } from '../actions/orcamentos';
import CounterVertical from '../../defaults/Counter/index';
import OrcamentoFormView from './containers/OrcamentoFormView';

class OrcamentoCreate extends Component {
    static navigationOptions = {
        drawerLabel: 'Novo Orçamento',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <OrcamentoFormView
                    navigation={this.props.navigation} 
                />
                {/* <CounterVertical /> */}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        cliente: state.orcamentosReducer.cliente,
        vendedor: state.orcamentosReducer.vendedor, 
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setCliente,
        setVendedor,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrcamentoCreate);