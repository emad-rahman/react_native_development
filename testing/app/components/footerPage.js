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
        this.state = {
            showHome: true,
            showAbout: false
        }
        this.changeTabs = this.changeTabs.bind(this);
    }

    changeTabs(name){
        if(name == 'homePage'){
                this.setState({showHome: true});
                this.setState({showAbout: false});
        }else if(name == 'aboutPage'){
            this.setState({showHome: false});
            this.setState({showAbout: true});
        }

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
