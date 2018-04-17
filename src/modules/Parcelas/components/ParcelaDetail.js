import React, { Component } from 'react';
import { View } from 'react-native';

import ParcelaFormView from './containers/ParcelaFormView';

class ParcelaDetail extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        // Parametro Parcelas que vem do ItemView
        const parcela = this.props.navigation.state.params;

        console.log("Parecela Detail");
        console.log(parcela);

        return (
            <View style={{ backgroundColor: '#fff' }}>
                <ParcelaFormView data={parcela} />
            </View>
        );
    }
}

export default ParcelaDetail;