import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Container,
    Content,
    Footer,
    FooterTab,
    Button,
    Icon,
    Text } from 'native-base';

import Home from './home.js';
import About from './about.js'


export default class FooterPage extends Component {
    constructor(){
        super();
        this.changeTabs = this.changeTabs.bind(this);
    }

    changeTabs(name){
        this.props.navigator.push({
            name
        });
    }

    render(){
        return(

            <Container>
                <Content />
                <Footer >
                    <FooterTab>
                        <Button onPress={() => {
                            this.changeTabs('homePage');
                            }}>
                            <Text>Home</Text>
                        </Button>
                        <Button onPress={() => {
                            this.changeTabs('aboutPage')
                            }}>
                            <Text>About</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
