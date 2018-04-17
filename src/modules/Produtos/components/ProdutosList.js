import React, { Component } from 'react';
import { View, TextInput, Button, ScrollView, StyleSheet, Platform, TouchableHighlight, Text } from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { produtos } from '../../../config/data/produtos';
import ProdutoItemView from './containers/ProdutoItemView';

export default class ProdutosList extends Component {
    constructor(props) {
        super(props);

        this.state = {produtos: produtos}
    }

    filterSearch (text) {
        const newData = produtos.filter((item) => {
            const itemData = item.descricao.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
        });

        this.setState({
            text: text,
            produtos: newData
        });
    }

    refreshList () {
        this.setState({
            produtos: produtos
        });
    }

    render () {
        return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    value={this.state.text} 
                    onChangeText={(text) => this.filterSearch(text)}
                    onClear={() => this.refreshList()}
                    placeholder='Descrição do produto...'
                />
                <ScrollView style={styles.produtoList}>
                    { this.state.produtos.map(produto => 
                        <ProdutoItemView 
                            key={produto.id} 
                            data={produto}
                            navigation={this.props.navigation} 
                        />
                    )}
                </ScrollView>
            </View>
            
        );
    }
}

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

    produtoList: {
        flex: 2,
    },

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

    regular: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
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
});
