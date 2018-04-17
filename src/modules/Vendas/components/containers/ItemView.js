import React, { Component } from 'react';
import {
    View,
    TextInput,
    Button,
    ScrollView,
    StyleSheet,
    Platform,
    TouchableHighlight,
    Text,
} from 'react-native';
import { connect } from 'react-redux';

import BoxChangeItemView from './BoxChangeItemView';
import DetailItemView from './DetailItemView';

class ItemView extends Component {
    render() {
        const item = this.props.data

        // teste
        console.log("Item da ItemView");
        console.log(item);

        return (
            <View style={styles.itemInfo}>
                <View style={styles.itemInfoLeft}>
                    <DetailItemView 
                        data={this.props.data}
                    />
                    {/* data={this.props.data} */}
                </View>
                <View style={styles.itemInfoRight}>
                    <BoxChangeItemView 
                        data={item}
                        // data={this.props.data}
                        incrementAction={()=>{}} 
                        decrementAction={()=>{}} 
                        quantidade={item.quantidade} 
                    />
                </View>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    itens: state
})

export default connect(mapStateToProps)(ItemView)

const styles = StyleSheet.create({
    itemInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 120,
        borderColor: '#DDE0EB',
        borderWidth: 1,
        paddingRight: 20,
        paddingLeft: 15,
        marginBottom: 5,
        // backgroundColor: '#acd5b6'
    },

    itemInfoLeft: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginRight: 5,
        width: '60%',
        height: 110,
        // backgroundColor: '#0768c6',
    },

    itemInfoRight: {
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '40%',
        marginRight: 50,
        // height: 110,
        // paddingHorizontal: 10,
        // backgroundColor: '#262C6A',
    }
});
