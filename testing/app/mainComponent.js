import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    ListView,
    Navigator
} from 'react-native'
import SecondScene from './scenes/SecondScene'
import MyScene from './scenes/MyScene'
import Home from './components/home.js'
import About from './components/about.js'
import Settings from './components/settings.js'

import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import FooterPage from './components/footerPage.js'

import { Router, Scene } from 'react-native-router-flux'






const TabIcon = ({ selected, title }) => {
    return(
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    );
}


export default class MainComponent extends Component{
    constructor(){
        super()

        this.renderScene = this.renderScene.bind(this);
    }

    renderScene(route, navigator){
        if(route.name == 'homePage'){
            return <Home navigator={navigator} />
        }else if(route.name == 'aboutPage'){
            return <FooterPage navigator={navigator} />
        }
    }

    render(){
        return (



            // <FooterPage />
            // <Navigator
            //     initialRoute={{ name: 'homePage'}}
            //     renderScene={this.renderScene}
            // />

            <Router>
                <Scene key='root'>
                    <Scene
                        key="tab"
                        tabs={true}
                        tabBarStyle={{ backgroundColor: 'grey'}}
                    >
                        <Scene key="hi" title="Tab 1" icon={TabIcon}>
                            <Scene
                                key='home'
                                component={Home}
                                title='Home Page'
                                initial
                            />
                        </Scene>

                        <Scene key="hi2" title="Tab 2" icon={TabIcon}>
                        <Scene
                            key='about'
                            component={About}
                            title='About'
                        />
                        </Scene>

                        <Scene key="hi3" title="Tab 3" icon={TabIcon}>
                        <Scene
                            key='settings'
                            component={Settings}
                            title='Settings'
                        />
                        </Scene>

                    </Scene>

                </Scene>
            </Router>
        )
    }
}

class ListViewBasics extends Component {
        constructor(props){
            super(props);
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
            this.state = {
                dataSource: ds.cloneWithRows([
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin',
                    'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
                ])
            };
        }

        render(){
            return (
                <View style={{flex: 1, paddingTop: 22}}>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) => <Text>{rowData}</Text>}
                    />
                </View>
            );
        }
}





class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
                <Text style={styles.BigText}>spam</Text>
            </ScrollView>
        );
    }
}

class TextInputTest extends Component {
    constructor(props){
        super(props);
        this.state = {text: ' '};
    }

    render(){
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type Here"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10}}>
                    You typed "{this.state.text}"
                </Text>
            </View>
        );
    }
}

class PropTesting extends Component {
    render(){
        return (
            <View>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

class Blink extends Component {
    constructor(props){
        super(props);
        this.state = {showText: true};

        // toggle the state every second
        var toggleTime = 1000;
        setInterval(() => {
            this.setState({showText: !this.state.showText});
        }, toggleTime);
    }

    render(){
        var otherOption = 'Just look this blinking he made!!!'
        let display = this.state.showText ? this.props.text : otherOption;
        return (
            <View>
                <Text style={styles.BigText}>{display}</Text>
            </View>
        )
    }
}


class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>just red</Text>
        <Text style={styles.bigblue}>just bigblue</Text>
        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    BigText: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
      },
})
