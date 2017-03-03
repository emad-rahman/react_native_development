import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Splash extends Component{
  render() {
    return(
      <View style={styles.wrapper}>
        <View style={styles.oneThird} />
        <View style={styles.oneThird}>
          <View style={{flex:1, alignItems: 'center'}}>
            <Text style={styles.title}>Notes</Text>
          </View>
        </View>
        <View style={styles.oneThird} >
          <View style={styles.footer}>
            <Text style={styles.subtitle}>tm Emad Rahman</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  oneThird: {
    flex: 1
  },
  wrapper: {
    backgroundColor: '#E91E63',
    flex: 1
  },
  title: {
    fontSize: 50,
    color: 'white',
    fontWeight: 'bold'
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center'
  },
  subtitle: {
    color: 'white',
    fontSize: 15,
    paddingBottom: 20
  }
});
