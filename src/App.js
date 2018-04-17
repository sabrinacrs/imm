import React, { Component } from 'react';
import { Provider, connect } from "react-redux";
import { StackNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';

// testes
import ParcelasList from './modules/Parcelas/components/ParcelasList';
import ParcelaFormView from './modules/Parcelas/components/containers/ParcelaFormView';
import ParcelaDetail from './modules/Parcelas/components/ParcelaDetail';

// Rotas
import Routes from './config/routes';
import store from './config/redux/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Routes />
      </Provider>
    );
  }
}