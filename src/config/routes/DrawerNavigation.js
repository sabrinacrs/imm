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

//

import { DrawerNavigator } from 'react-navigation';

export default DrawerNavigator(
    {
        Home: { screen: Home },

        ClienteCreate: { screen: ClienteCreate },
        ClienteList: { screen: ClienteList },
        
        ProdutosList: { screen: ProdutosList },

        OrcamentoItensListView: { screen: OrcamentoItensListView },

        OrcamentoCreate: { screen: OrcamentoCreate },
        OrcamentoFilters: { screen: OrcamentoFilters },
        OrcamentosList: { screen: OrcamentosList }
    }, 
    {
        drawerWidth: 300,
        drawerBackgroundColor: '#fff',
        tintColor: '#070744'
    }
);

DrawerNavigator.navigationOptions = {
    title: 'Home Feed',
    header: () => ({
		// Render a button on the right side of the header
		// When pressed switches the screen to edit mode.
		left: (
			<Button title={'Drawer'} />
		),
		tintColor: 'rgba(51, 51, 51, 1)'
	}),
}

