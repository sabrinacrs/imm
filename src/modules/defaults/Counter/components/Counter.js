import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { increment, decrement, updateCounter } from '../actions/contador';

class CounterVertical extends Component {
    constructor(props) {
        super(props);

        this.state = {count: 0}
    }

    incrementCounter() {
        this.props.increment(this.props.count);
    }

    decrementCounter() {
        this.props.decrement(this.props.count);
    }

    updateTextInput(countValue) {
        this.props.updateCounter(countValue);
    }

    render() {
        console.log("");
        console.log(this.props);

        var count = this.props.count.counterReducer;

        return (
            <View style={styles.boxQtde}>
                <TextInput
                    keyboardType={'numeric'}
                    value={this.props.count + ""}
                    onChangeText={(countValue) => this.updateTextInput(countValue)}
                    style={styles.input}
                    underlineColorAndroid='rgba(0, 0, 0, 0)'
                />
                <View style={styles.boxButtons}>
                    <TouchableHighlight 
                        style={styles.minus}
                        onPress={() => this.decrementCounter()}
                    >
                        <Icon name="minus" size={20} color="#fff" />
                    </TouchableHighlight>

                    <TouchableHighlight 
                        style={styles.plus} 
                        onPress={() => this.incrementCounter()}
                    >
                        <Icon name="plus" size={20} color="#fff" />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxQtde: {
        borderColor: '#E0E0E0',
        borderWidth: 0.5,
    },

    input: {
        height: 50,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },

    boxButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%'
    },

    plus: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27AE60',
        borderColor: '#27AE60',
        borderWidth: 1,
        width: 30,
        height: 35
    },

    minus: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EB5757',
        borderColor: '#EB5757',
        borderWidth: 1,
        width: 30,
        height: 35
    },
});

function mapStateToProps (state) {
    return { 
        count: state.counterReducer
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators({increment, decrement, updateCounter}, dispatch);
}

export default connect (mapStateToProps, mapDispatchToProps)(CounterVertical);