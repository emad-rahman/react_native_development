import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component{
    render(){
        return(
            <View style={{flex: 1, paddingTop: 70, backgroundColor: 'blue'}}>
                <Text onPress={() => {
                    Actions.pop();
                }}>Pop settings</Text>

                <Text style={{paddingTop:20}}
                onPress={() => {
                    Actions.about();
                }}>Go to about</Text>
            </View>
        );
    }
}
