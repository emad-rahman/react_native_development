import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';

export default class Home extends Component{
    constructor(){
        super()

        this.navigate = this.navigate.bind(this)
    }

    navigate(){
        this.props.navigator.pop();
    }

    render(){
        return(
            <View style={{flex: 1, paddingTop: 30, backgroundColor: 'red'}}>
                <Text>This is the About page</Text>
                <View style={{flex:1, justifyContent: 'center'}}>
                    <Button onPress={() => {
                        this.navigate();
                        }}>
                        <Text>Go to Home page</Text>
                    </Button>
                </View>
            </View>
        );
    }
}
