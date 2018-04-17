import { StackNavigator } from 'react-navigation';
import ParcelasList from '../../modules/Parcelas/components/ParcelasList';
import ParcelaDetail from '../../modules/Parcelas/components/ParcelaDetail';

import ProdutosList from '../../modules/Produtos/components/ProdutosList';
import ProdutoDetail from '../../modules/Produtos/components/ProdutoDetail';

import OrcamentosList from '../../modules/Orcamentos/components/OrcamentosList';
import OrcamentoFilters from '../../modules/Orcamentos/components/OrcamentoFilters';
import OrcamentoDetail from '../../modules/Orcamentos/components/OrcamentoDetail';
import OrcamentoCreate from '../../modules/Orcamentos/components/OrcamentoCreate';

import OrcamentoFormView from '../../modules/Orcamentos/components/containers/OrcamentoFormView';
import OrcamentoItensListView from '../../modules/Orcamentos/components/containers/OrcamentoItensListView';
import OrcamentoFiltersView from '../../modules/Orcamentos/components/containers/OrcamentoFiltersView'

import ClientesList from '../../modules/Clientes/components/ClientesList';
import ClienteDetail from '../../modules/Clientes/components/ClienteDetail';
import ClienteCreate from '../../modules/Clientes/components/ClienteCreate';

import ClienteSearch from '../../modules/Clientes/components/ClienteSearch';

import VendaItensList from '../../modules/Vendas/components/VendaItensList';

import DrawerNavigation from './DrawerNavigation';

import TabNavigator from './TabNavigator';

export const ClienteCreateStack = StackNavigator({
    ClienteCreate: {
        screen: ClienteCreate
    }
});

// export const ClienteUpdateStack = StackNavigator({
//     ClienteUpdate: {
//         screen: ClienteUpdate
//     }
// });

const Routes = StackNavigator(
    {
        ParcelasList: { screen: ParcelasList },
        ParcelaDetail: { screen: ParcelaDetail },

        ProdutosList: { screen: ProdutosList },
        ProdutoDetail: { screen: ProdutoDetail },

        OrcamentoCreate: { screen: OrcamentoCreate },
        OrcamentosList: { screen: OrcamentosList },
        OrcamentoFilters: { screen: OrcamentoFilters },
        OrcamentoDetail: { screen: OrcamentoDetail },

        OrcamentoFormView: { screen: OrcamentoFormView },
        OrcamentoItensListView: { screen: OrcamentoItensListView },
        OrcamentoFiltersView: { screen: OrcamentoFiltersView },

        ClienteDetail: { screen: ClienteDetail },
        ClientesList: { screen: ClientesList },
        ClienteCreate: {screen: ClienteCreate },

        ClienteSearch: { screen: ClienteSearch },

        VendaItensList: { screen: VendaItensList },

        DrawerNavigation: { screen: DrawerNavigation },

        TabNavigator: { screen: TabNavigator }
    },
    {
        initialRouteName: 'TabNavigator',
        // navigationOptions: {
        //     title: 'App Name',
        //     headerTintColor: 'white',
        //     headerStyle: { backgroundColor: '#070744' },
        //     headerTitleStyle: { color: 'white' }
        // }
    }
);

export default Routes;