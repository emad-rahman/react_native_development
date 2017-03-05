import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import { Button } from 'native-base';

export default class Home extends Component{
    constructor(){
        super();

        this.navigate = this.navigate.bind(this);
    }

    navigate(name){
        this.props.navigator.push({
            name
        })
    }
    render(){
        return(
            <View style={{flex: 1, paddingTop: 30}}>
                <Text>This is the Home page</Text>
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Button onPress={() => {
                        this.navigate('aboutPage');
                        }}>
                        <Text>Go to About page</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
