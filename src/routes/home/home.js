import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import Footer from './footer'
import Text from 'components/Text'
import NotificationIcon from 'icons/notification'
import MessageIcon from 'icons/message'
import { Size, flexOne, scrollPadding } from 'styles';

export default () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text format='title'>Home</Text>
      <View style={styles.icons}>
        <NotificationIcon style={styles.firstIcon}/>
        <MessageIcon />
      </View>
    </View>
    <View>
      <Text>🔥Hot</Text>
      <Text>Spectating</Text>
    </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  firstIcon: {
    marginRight: Size()
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
