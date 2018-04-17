import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { clientes } from '../../../config/data/clientes';
import ClienteItemView from './containers/ClienteItemView';

class ClientesList extends Component {
    static navigationOptions = {
        drawerLabel: 'Clientes',
    };

    constructor(props) {
        super(props);

        this.state = {clientes: clientes}
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
        // initial state
        this.setState({
            clientes: clientes
        });
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    value={this.state.text} 
                    onChangeText={(text) => this.filterSearch(text)}
                    onClear={() => this.refreshList()}
                    placeholder='Nome do cliente...'
                />
                <ScrollView style={styles.clienteList}>
                    {this.state.clientes.map(cliente =>
                        <ClienteItemView
                            key={cliente.id}
                            data={cliente}
                            navigation={this.props.navigation}
                        />
                    )}
                </ScrollView>

                <View>
                    <TouchableHighlight style={styles.btnAdd} onPress={() => navigate('ClienteCreate')}>
                        <Text style={styles.textBtnAdd}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

//#region Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,
        paddingTop: (Platform.OS === 'ios') ? 50 : 20,
        padding: 10
    },

    clienteList: {
        flex: 2,
        // padding: 20
    },

    cliente: {
        backgroundColor: '#fff',
        padding: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#D3DDE8'
    },

    textInputBusca: {
        height: 50,
        width: '80%',
        borderWidth: 1,
        borderColor: '#BDBDBD',
    },

    btnSearch: {
        width: '20%',
        height: 50,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnAdd: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#219653',
        position: 'absolute',
        bottom: 20,
        right: 20,
    },

    textBtnAdd: {
        fontSize: 26,
        color: '#fff',
        position: 'absolute',
        bottom: 15,
        right: 23,
    }
});
//#endregion

export default ClientesList;