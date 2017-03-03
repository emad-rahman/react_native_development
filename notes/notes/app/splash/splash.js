import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Splash extends Component{
  render() {
    return(
      <View style={styles.wrapper}>
        <Text>Hello World!</Text>
      </View>
    )
  }
}

const styles = {
  wrapper: {
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}
