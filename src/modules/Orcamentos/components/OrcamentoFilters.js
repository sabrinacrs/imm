import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import OrcamentoFiltersView from './containers/OrcamentoFiltersView';

class OrcamentoFilters extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{height: '100%'}}>
                    <OrcamentoFiltersView />                        
                </View>
                
                <View style={styles.footer}>
                    <Button title="Aplicar" color="#0E2349" onPress={() => false} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
        
    footer: {
        // margin: 20
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%'
    },
});

export default OrcamentoFilters;