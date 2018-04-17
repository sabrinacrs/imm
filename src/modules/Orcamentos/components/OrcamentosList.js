import React, { Component } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet, Platform, TouchableHighlight, Text, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { orcamentos } from '../../../config/data/orcamentos';
import OrcamentoItemView from './containers/OrcamentoItemView';

class OrcamentosList extends Component {
    static navigationOptions = ({ navigation }) => {
        const { navigate } = navigation;

        return {
            title: 'Orçamentos',
            headerRight: (
                <TouchableHighlight
                    style={{ paddingRight: 20 }}
                    onPress={() => navigate('OrcamentoFilters', this.returnDataFilters)}
                    // returnDataFilters: this.returnDataFilters.bind(this)}
                >
                    <Icon name="sliders" size={30} color="#4F5B66" />
                </TouchableHighlight>
            ),
        };
    };

    constructor(props) {
        super(props);

        this.state = {
            situacao: "",
            orcamentos: orcamentos,
        }

        this.returnDataFilters = this.returnDataFilters.bind(this);
    }

    returnDataFilters(vendedor) {
        this.props.setFilters({
            vendedor,
            dataInicio,
            dataFim,
            faturados,
            naoFaturados,
        });
    }

    navigate(screen) {
        alert(screen);
        // this.props.navigation.navigate(screen);
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.scrollItems}>
                        { this.state.orcamentos.map(orcamento => 
                            <OrcamentoItemView  
                                key={orcamento.id} 
                                data={orcamento}
                                navigation={this.props.navigation}
                            />
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },

    boxSituacao: {
        // paddingHorizontal: 20,
        // paddingVertical: 10,
    },

    orcamento: {
        backgroundColor: '#fff',
        padding: 5,
        margin: 5,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: '#D3DDE8'
    },

    header: {
        padding: 20
    },

    situacaoText: {
        color: '#333',
        fontSize: 12,
        fontWeight: 'bold'
    },

    boxPicker: {
        borderColor: '#828282',
        borderWidth: 0.5
    },

    scrollItems: {
        marginTop: 20,
        marginBottom: 100,
        flexDirection: 'column',
    },

    sliders: {
        paddingRight: 20,
    }
});

export default  OrcamentosList;