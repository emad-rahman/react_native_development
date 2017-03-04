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

export default class MainComponent extends Component{
    render(){
        return (
            // <Navigator
            //     initialRoute={{ title: 'My initial scene', index: 0 }}
            //     renderScene={(route, navigator) => {
            //         return <MyScene title={route.title} />
            //     }}
            // />

            <Navigator
                initialRoute={{ title: 'My Initial Scene', index: 0}}
                renderScene={(route, navigator) =>
                    <MyScene
                        title={route.title}

                        onForward={() => {
                            const nextIndex = route.index + 1;
                            navigator.push({
                                title: 'Scene ' + nextIndex,
                                index: nextIndex,
                            });
                        }}

                        onBack={() => {
                            if(route.index > 0) {
                                navigator.pop();
                            }
                        }}
                    />
                }
            />

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
