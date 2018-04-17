import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableHighlight, Text, } from 'react-native';
import { connect } from 'react-redux';

import { incrementAction, decrementAction } from '../../actions/vendasActions';

class BoxChangeItemView extends Component {
    render() {

        // teste
        console.log("BoxChangeItem");
        console.log(this.props);

        const quantidade = this.props.data.quantidade;

        return (
            <View style={styles.inputQtde}>
                <TextInput
                    value={this.props.data.quantidade.value}
                    // {this.props.data.quantidade.toString()}
                    style={styles.textInput}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                />
                <View style={styles.btn}>
                    <TouchableHighlight 
                        style={styles.btnRemove} 
                        onPress={() => this.props.decrementAction()}
                    >
                        <Text style={styles.btnText}>-</Text>
                    </TouchableHighlight>

                    <TouchableHighlight 
                        style={styles.btnAdd} 
                        onPress={() => this.props.incrementAction()}
                    >
                        <Text style={styles.btnText}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    quantidade: state
})

const mapDispatchToProps = {
    incrementAction,
    decrementAction
}

const styles = StyleSheet.create({
    inputQtde: {
        borderColor: '#E0E0E0',
        borderWidth: 0.5,
        // backgroundColor: '#f8c27c',
    },

    textInput: {
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    btn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // backgroundColor: '#8dc63f',
        width: '100%'
    },

    btnText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },

    btnAdd: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27AE60',
        height: 35
    },

    btnRemove: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EB5757',
        height: 35
    },


});

export default connect(mapStateToProps, mapDispatchToProps)(BoxChangeItemView);