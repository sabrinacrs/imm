import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import ItensList from './ItensList';
import ClienteListPage from '../Clientes/ClientesListPage';

export default Venda({
    ItensList: { screen: ItensList },
    Clientes: { screen: ClienteListPage },
  });
