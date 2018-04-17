import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Image } from 'react-native';
import CustomCheckBox from '../../../defaults/containers/CustomCheckBox';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

// import { } from '../../../../../assets/images/edit-icon.png'

class BoxEdit extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
                <Text style={styles.label}>Quantidade: </Text>
                <TextInput
                    style={[styles.input]}
                    underlineColorAndroid='#00798c'
                />

                <TouchableHighlight style={styles.minus}>
                    {/* // onPress={() => this.props.decrementAction()} */}
                    <Icon name="minus" size={20} color="#EB5757" />
                </TouchableHighlight>

                <TouchableHighlight style={styles.plus} >
                    {/* // onPress={() => this.props.incrementAction()} */}
                    <Icon name="plus" size={20} color="#27AE60" />
                </TouchableHighlight>
            </View>
        );
    }
}

//#region OrcamentoListView
class OrcamentoItensListView extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    showingEditField() {

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.boxCheckbox}>
                        <CustomCheckBox item={true} />
                    </View>

                    <View style={{  }}>
                        {/* borderColor: '#A6A6A6', borderWidth: 0.5, */}
                        <View style={styles.boxDetail}>
                            <Text style={styles.label}>Produto</Text>
                            <View style={styles.row}>
                                <Text style={[styles.label, {width: '50%'}]}>Total: R$ 0,00</Text>
                                <View style={styles.row}>
                                    <Text style={styles.label}>Qtde Itens: </Text>
                                    <Text style={styles.label}>0</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.rowButtons}>
                            {/* Se variavel show edit estiver habilitada, mostra a linha de edição */}
                            {/* Box edit na verdade é um contador */}
                            
                            <BoxEdit />
                        </View>
                    </View>

                    <View style={styles.boxBtn}>
                        <TouchableHighlight onPress={() => showingEditField()}>
                            <Icon name="edit" size={25} color="#00798c" />
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}
//#endregion OrcamentoListView

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        width: '100%'
    },

    box: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },

    boxDetail: {
        width: '100%'
    },

    boxCheckbox: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%',
    },

    boxBtn: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '15%'
    },

    label: {
        color: '#4F5B66',
        fontFamily: 'CircularStd-Book'
    },

    input: {
        height: 40,
        maxWidth: '30%'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },

    rowButtons: {
    },

    btn: {
        borderColor: '#A6A6A6',
        borderWidth: 0.5,
    },

    plus: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 30,
        height: 35
    },

    minus: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: 30,
        height: 35
    },
});

export default OrcamentoItensListView;