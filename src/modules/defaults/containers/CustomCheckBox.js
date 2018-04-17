
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'

class CustomCheckBox extends Component {
    constructor(props) {
        super(props);

        this.state = {checked: this.props.item}
    }

    render() {
        var title = this.props.title;
        var id = 1;

        return (
            <CheckBox
                key={id}
                title={title}
                textStyle={{ 
                    fontFamily: 'CircularStd-Bold',
                    fontWeight: 'normal'
                }}
                checkedColor='#00798c'
                checkedIcon='check-square'
                containerStyle={{backgroundColor: '#fff', height: 0, borderColor: '#fff'}}
                checked={this.state.checked}
                onPress={() => this.setState({checked: !this.state.checked})}
            />
        );
    }
}

export default CustomCheckBox;