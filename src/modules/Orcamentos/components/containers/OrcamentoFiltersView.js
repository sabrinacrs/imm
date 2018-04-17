import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-native-datepicker';
import CustomCheckBox from '../../../defaults/containers/CustomCheckBox';

import { vendedores } from '../../../../config/data/vendedores';
import { setVendedor, setFilters } from '../../actions/orcamentos';

class OrcamentoFiltersView extends Component {
    static navigationOptions = {
        title: 'Filtros',
    };

    constructor(props) {
        super(props);

        this.state = {
            dataInicio: '',
            dataFim: '',
            faturados: true,
            naoFaturados: false,
        }
    }

    returnDataFilters() {
        const { dataInicio, dataFim, faturados, naoFaturados } = this.state;

        this.props.navigation.state.params.returnDataFilters({
            dataInicio,
            dataFim,
            faturados,
            naoFaturados,
        });
        this.props.navigation.goBack();
    }

    setVendedor(vendedorId) {
        var vendedor = vendedores.find((v) => { return v.id === vendedorId});
        this.props.setVendedor(vendedor);
    }

    render() {
        return (
            <ScrollView>
                <View style={[styles.container, { flexDirection: 'column', justifyContent: 'center', marginTop: 40 }]}>
                    {/* <View style={styles.row}> */}
                    <View style={[styles.groupInput, { paddingHorizontal: 20 }]}>
                        <Text style={styles.label}>Vendedor:</Text>
                        <View style={styles.picker}>
                            <Picker
                                selectedValue={this.props.vendedor.id}
                                onValueChange={(vendedorId) => this.setVendedor(vendedorId)}
                            >
                                {vendedores.map(vendedor =>
                                    <Picker.Item
                                        key={vendedor.id}
                                        value={vendedor.id}
                                        label={vendedor.nome}
                                    />
                                )}
                            </Picker>
                        </View>
                    </View>
                    {/* </View> */}

                    <View style={styles.row}>
                        <View style={styles.groupInput}>
                            <Text style={styles.label}>Filtrar por data</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <View style={[styles.groupInput, { paddingRight: 20 }]}>
                                    <Text style={styles.labelData}>Início</Text>
                                    <DatePicker
                                        showIcon={false}
                                        date={this.state.dateInicio}
                                        mode="date"
                                        placeholder=""
                                        format="DD-MM-YYYY"
                                        confirmBtnText="OK"
                                        cancelBtnText="Cancel"
                                        onDateChange={(date) => { this.setState({dateInicio: date}) }}
                                    />
                                </View>
                                <View style={styles.groupInput}>
                                    <Text style={styles.labelData}>Fim</Text>
                                    <DatePicker
                                        showIcon={false}
                                        date={this.state.dateFim}
                                        mode="date"
                                        placeholder=""
                                        format="DD-MM-YYYY"
                                        confirmBtnText="OK"
                                        cancelBtnText="Cancel"
                                        onDateChange={(date) => { this.setState({dateFim: date}) }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.row, {marginBottom: 40}]}>
                        <View style={styles.groupInput}>
                            <Text style={styles.label}>Situação</Text>
                            <CustomCheckBox
                                item={true}
                                title={'Faturados'}
                            />
                            <CustomCheckBox
                                item={true}
                                title={'Não faturados'}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },

    picker: {
        borderColor: '#A6A6A6',
        borderWidth: 0.5,
    },

    label: {
        fontFamily: 'CircularStd-Book',
        color: '#00798c'
    },

    labelData: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
    },

    groupInput: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        paddingTop: 20
    },

    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 20,
    }
});

function mapStateToProps(state) {
    return {
        vendedor: state.orcamentosReducer.vendedor,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setVendedor,
        setFilters,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrcamentoFiltersView);


