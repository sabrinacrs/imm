import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';

class ParcelaFormView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.leftHeader}>
                        <Text style={styles.label}>Código: </Text>
                        <Text style={styles.info}>{this.props.data.id}</Text>
                    </View>
                    <View style={styles.rightHeader}>
                        <Text style={styles.label}>Data Vencimento: </Text>
                        <DatePicker
                            // style={{width: 200}}
                            // placeholder="Select a date"
                            date="19/08/2016"
                            mode="date"
                            format="DD/MM/YYYY"
                            minDate="01/05/2000"
                            maxDate="01/06/2500"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            showIcon={false}
                            // customStyles={{
                            // dateIcon: {
                            //     position: 'absolute',
                            //     left: 0,
                            //     top: 4,
                            //     marginLeft: 0
                            // },
                            // dateInput: {
                            //     marginLeft: 36
                            // }
                            // // ... You can check the source to find the other keys.
                            // }}
                            // onDateChange={(date) => {this.setState({date: date})}}
                        />
                    </View>
                </View>

                {/* Separator */}
                <View style={styles.separator} />

                <View style={styles.content}>
                    <Text style={styles.label}>Cliente:</Text>
                    <Text style={styles.info}>{this.props.data.cliente}</Text>

                    <Text style={styles.label}>Vendedor:</Text>
                    <Text style={styles.info}>{this.props.data.vendedor}</Text>

                    <Text style={styles.label}>Valor:</Text>
                    <Text style={styles.info}>R$ {this.props.data.valor}</Text>

                    <Text style={styles.label}>Valor Pago:</Text>
                    <Text style={styles.info}>R$ {this.props.data.valorPago}</Text>

                    <Text style={styles.label}>Desconto R$( - ):</Text>
                    <Text style={styles.info}>R$ {this.props.data.desconto}</Text>

                    <Text style={styles.label}>Forma Pagamento:</Text>
                    <Text style={styles.info}>{this.props.data.formaPagamento}</Text>
                </View>

                <View style={styles.footer}>
                    <TouchableHighlight style={styles.btnSave} onPress={() => false}>
                        <Text style={styles.textBtn}>Salvar</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        );
    }
}

//#region Styles
const styles = StyleSheet.create({
    container: {

    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },

    leftHeader: {

    },

    rightHeader: {

    },

    content: {
        paddingHorizontal: 20,
        paddingTop: 10
    },

    label: {
        fontSize: 12,
        color: '#000',
        fontWeight: 'bold',
    },

    info: {
        color: '#333',
        fontSize: 16,
        paddingBottom: 20
    },

    separator: {
        height: 1, 
        backgroundColor: '#BDBDBD', 
        marginHorizontal: 20,
        marginVertical: 20
    },

    btnSave: {
        height: 40,
        backgroundColor: '#219653',
        justifyContent: 'center',
        alignItems: 'center'
    },

    textBtn: {
        color: '#fff',
    },

    footer: {
        // position: 'absolute',
        // width: '100%',
        // bottom: 0,
        // right: 0
    }

});
//#endregion Styles

export default ParcelaFormView;