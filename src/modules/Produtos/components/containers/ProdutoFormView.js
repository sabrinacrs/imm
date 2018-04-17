import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class BoxEstoque extends Component{
    render() {
        const produto = this.props.produto;

        return (
            <View style={styles.contentBox}>
                <View style={styles.row}>
                    <Text style={styles.label}>Físico</Text>
                    <Text style={styles.info}>{produto.estoqueFisico}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Condicional</Text>
                    <Text style={styles.info}>{produto.estoqueCondicional}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Pedido</Text>
                    <Text style={styles.info}>{produto.estoquePedido}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Contábil</Text>
                    <Text style={styles.info}>{produto.estoqueContabil}</Text>
                </View>
            </View>
        );
    }
}

class BoxModificacoes extends Component {
    render() {
        const produto = this.props.produto;

        return (
            <View style={styles.contentBox}>
                <View style={styles.row}>
                    <Text style={styles.label}>Última alteração</Text>
                    <Text style={styles.info}>{produto.dataUltimaAlteracao}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Última entrada</Text>
                    <Text style={styles.info}>{produto.dataUltimaEntrada}</Text>
                </View>
            </View>
        );
    }
}

class ProdutoFormView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showingEstoque: true,
            showingModificacoes: true,
        }
    }

    setShowingEstoque() {
        this.setState({showingEstoque: !this.state.showingEstoque});
    }

    setShowingModificacoes() {
        this.setState({showingModificacoes: !this.state.showingModificacoes});
    }

    render() {
        const produto = this.props.data;

        return (
            <ScrollView style={styles.container} >
                <View style={[styles.header, {paddingTop: 20}]}>
                    <View style={styles.leftHeader}>
                        <Text style={styles.label}>Descrição </Text>
                        <Text style={styles.info}>{produto.descricao}</Text>
                    </View>
                    <View style={styles.rightHeader}>
                        <Text style={styles.label}>Código </Text>
                        <Text style={styles.info}>{produto.id}</Text>
                    </View>
                </View>

                {/* Separator */}
                <View style={styles.separator} />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <View style={[styles.row, styles.leftHeader]}>
                        {/* , {width: 200} */}
                            <Text style={styles.label}>Valor venda</Text>
                            <Text style={styles.info}>R$ {produto.valorVenda}</Text>
                        </View>

                        <View style={[styles.row, styles.rightHeader]}>
                            <Text style={styles.label}>Custo</Text>
                            <Text style={styles.info}>{produto.valorCusto}</Text>
                        </View>
                    </View>

                    <View style={styles.header}>
                        <View style={[styles.row, styles.leftHeader]}>
                            <Text style={styles.label}>Marca</Text>
                            <Text style={styles.info}>{produto.marca}</Text>
                        </View>
                        <View style={[styles.row, styles.rightHeader]}>
                            <Text style={styles.label}>Fabricante</Text>
                            <Text style={styles.info}>{produto.fabricante}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.headerBox} onPress={() => this.setShowingEstoque()}>
                            <Icon 
                                name={ this.state.showingEstoque ? "chevron-circle-down" : "chevron-circle-right"} 
                                size={20} 
                                color="#ff7f50"
                                style={{ width: 30 }}
                            />
                            <Text style={styles.textBox}>Estoque</Text>
                        </TouchableOpacity>

                        {/* Showing estoque info */}
                        {this.state.showingEstoque ? <BoxEstoque produto={produto} />: null}
                        
                    </View>

                    {/* Modificações */}
                    <View style={styles.box}>
                        <TouchableOpacity style={styles.headerBox} onPress={() => this.setShowingModificacoes()}>
                            <Icon 
                                name={ this.state.showingModificacoes ? "chevron-circle-down" : "chevron-circle-right"} 
                                size={20} 
                                color="#ff7f50"
                                style={{ width: 30 }}
                            />
                            <Text style={styles.textBox}>Modificações</Text>
                        </TouchableOpacity>

                        {/* Showing info */}
                        {this.state.showingModificacoes ? <BoxModificacoes produto={produto} />: null}
                    </View>
                </View>

                <View style={[styles.row, {paddingHorizontal: 30}]}>
                    <Text style={styles.label}>Referência</Text>
                    <Text style={styles.info}>{produto.referencia}</Text>
                </View>
            </ScrollView>
        );
    }
}

//#region Styles
const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        height: '95%'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },

    leftHeader: {
        width: '65%',
    },

    rightHeader: {
        width: '30%'
    },

    content: {
        // paddingHorizontal: 20,
    },

    textBox: {
        fontWeight: 'bold',
        fontFamily: 'CircularStd-Book',
        color: '#ff7f50'
    },

    headerBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20
    },

    box: {
        
    },

    contentBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25
    },

    row: {
        height: 50,
        flexDirection: 'column', 
        justifyContent: 'center', 
    },

    label: {
        fontFamily: 'CircularStd-Bold',
        color: '#30638e',
    },

    info: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66',
        fontSize: 16,
    },

    regular: {
        fontFamily: 'CircularStd-Book',
        color: '#4F5B66'
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

export default ProdutoFormView;