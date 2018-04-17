import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, TextInput } from 'react-native';
import { SearchBar, ListItem } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { clientes } from '../../../config/data/clientes';
import ClienteItemView from '../../Clientes/components/containers/ClienteItemView';

class ClienteSearch extends Component {
    static navigationOptions = {
        drawerLabel: 'Clientes',
    };

    constructor(props) {
        super(props);

        this.state = {
            clientes: clientes,
        }
    }

    sendClienteGoBack(cliente) {
        this.props.navigation.state.params.returnDataCliente(cliente);
        this.props.navigation.goBack();
    }

    filterSearch (text) {
        const newData = clientes.filter((item) => {
            const itemData = item.nome.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });

        this.setState({
            text: text,
            clientes: newData
        });
    }

    refreshList () {
        this.setState({
            clientes: clientes
        });
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.label}>Cliente:</Text>
                <SearchBar
                    lightTheme
                    onChangeText={(text) => this.filterSearch(text)}
                    onClear={() => this.refreshList()}
                    placeholder='Type Here...' 
                />

                <View>
                {
                    this.state.clientes.map((cliente, i) => (
                        <TouchableHighlight
                            key={i}    
                            onPress={() => this.sendClienteGoBack(cliente)} // seleciona cliente
                        >
                            <Text>{cliente.nome}</Text>
                        </TouchableHighlight>
                        
                        // <ListItem
                        //     key={i}
                        //     title={cliente.nome}
                        //     subtitle={cliente.email}
                        //     onLongPress={() => false} // abre detail
                        //     onPress={() => this.sendClienteBack(cliente)} // seleciona cliente
                        // />
                    ))
                }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    
    label: {
        color: '#000',
        fontWeight: 'bold'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    btnSearch: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderColor: '#BDBDBD',
        borderWidth: 0.5,
        paddingVertical: 5,
        height: 45,
        width: '15%'
    }, 

    input: {
        height: 45,
        width: '85%',
        borderWidth: 1,
        borderColor: '#BDBDBD',
    },
});

function mapStateToProps (state) {
    return {
        cliente: state.orcamentosReducer.cliente,
    }
}

// function mapDispatchToProps (dispatch) {
//     return bindActionCreators({selectCliente}, dispatch);
// }

export default connect(mapStateToProps)(ClienteSearch);