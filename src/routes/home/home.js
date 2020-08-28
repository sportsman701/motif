import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Footer from './footer'
import { Size, flexOne, scrollPadding } from 'styles';

export default () => (
  <View style={styles.container}>
    <ScrollView style={[flexOne, scrollPadding]}>
      {new Array(10).fill(0).map((x, i) =>
        <Text key={i}>hihi234534254325234554322222</Text>
      )}
    </ScrollView>
    <Footer style={styles.footer} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginRight: -Size(),
    marginLeft: -Size(),
    marginBottom: -Size()
  }
})
