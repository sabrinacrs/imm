import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import Home from '../../modules/defaults/Home/home';

import ClienteCreate from '../../modules/Clientes/components/ClienteCreate';
import ClienteList from '../../modules/Clientes/components/ClientesList';

import ProdutosList from '../../modules/Produtos/components/ProdutosList';

import OrcamentosList from '../../modules/Orcamentos/components/OrcamentosList';
import OrcamentoFilters from '../../modules/Orcamentos/components/OrcamentoFilters';
import OrcamentoCreate from '../../modules/Orcamentos/components/OrcamentoCreate';

// Testes
import OrcamentoItensListView from '../../modules/Orcamentos/components/containers/OrcamentoItensListView';
import OrcamentoFormView from '../../modules/Orcamentos/components/containers/OrcamentoFormView';

export default TabNavigator(
    {
        Home: { 
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Home',
            }
        },
        
        ProdutosList: { 
            screen: ProdutosList,
            navigationOptions: {
                tabBarLabel: 'Produtos',
            }
        },
        
        OrcamentosList: { 
            screen: OrcamentosList,
            navigationOptions: {
                tabBarLabel: 'Orçamentos',
            }
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
        
        tabBarOptions: {
            activeTintColor: "#ff7f50",
            inactiveTintColor: '#333',
            renderIndicator: () => null,
            style: { 
                backgroundColor: '#fff',
            },
        },
    }
);

const styles = StyleSheet.create({
    tab: {
        backgroundColor: '#fff'
    }
});