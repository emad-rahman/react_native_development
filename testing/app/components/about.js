import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux'

export default class Home extends Component{
    render(){
        return(
            <View style={{flex: 1, paddingTop: 70, backgroundColor: 'red'}}>
                <Text onPress={() => {
                    Actions.pop();
                }}>pop about</Text>
            </View>
        );
    }
}
