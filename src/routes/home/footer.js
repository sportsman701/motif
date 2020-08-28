import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Footer from 'icons/footer'
import { Size } from 'styles';

export default ({ style }) => (
  <View style={[styles.container, style]}>
    <View style={styles.outline}>
      <View style={styles.wing} />
      <Footer />
      <View style={styles.wing} />
    </View>
    <View style={styles.height} />
    <View style={styles.content}>
      <Text>a</Text>
      <Text>a</Text>
      <View></View>
      <Text>a</Text>
      <Text>a</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: -12 },
    // shadowRadius: 20,
    // elevation: 5,
    // marginTop: Size()
  },
  outline: {
    flexDirection: 'row',
  },
  shadow: {
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: -12 },
    // elevation: 5
  },
  wing: {
    flex: 1,
    backgroundColor: 'white',
    borderTopColor: '#e7e7e7',
    borderTopWidth: 1,
  },
  height: {
    height: Size(1.5),
    top: -1,
    backgroundColor: 'white'
  },
  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
