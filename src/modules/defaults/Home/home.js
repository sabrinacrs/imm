import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import OrcamentosList from '../../Orcamentos/components/OrcamentosList';

class Home extends Component {
    render () {
        const { navigate } = this.props.navigation; 

        return (
            <View style={styles.container}>
                {/* <View style={styles.row}>
                    <Text style={styles.title}>Últimos orçamentos</Text>
                    <Icon name="plus" size={20} color="#27AE60" />
                </View> */}
                
                <TouchableHighlight onPress={() => navigate('OrcamentoCreate')}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Novo orçamento</Text>
                        <Icon name="plus" size={20} color="#003d5b" />
                    </View>
                </TouchableHighlight>
                
                <TouchableHighlight onPress={() => navigate('OrcamentosList')}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Orçamentos</Text>
                        <Icon name="dollar" size={20} color="#003d5b" />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate('ProdutosList')}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Produtos</Text>
                        <Icon name="shopping-cart" size={20} color="#003d5b" />
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => navigate('ClientesList')}>
                    <View style={styles.row}>
                        <Text style={styles.title}>Clientes</Text>
                        <Icon name="users" size={20} color="#003d5b" />
                    </View>
                </TouchableHighlight>
            
                <TouchableHighlight>
                    <View style={styles.row}>
                        <Text style={styles.title}>Configurações</Text>
                        <Icon name="cogs" size={20} color="#003d5b" />
                    </View>
                </TouchableHighlight>

                {/* <OrcamentosList navigation={this.props.navigation} /> */}
            </View>
        );
    }
}

{/* <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: 'HOME', style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
/> */}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },

    title: {
        fontSize: 20,
        fontFamily: 'CircularStd-Book',
        color: '#30638e'
    },

    regular: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 30
    }
});

export default Home;