import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from 'components/Button'
import Footer from 'icons/footer'
import AddIcon from 'icons/add'
import HomeIcon from 'icons/home'
import SearchIcon from 'icons/search'
import ChatIcon from 'icons/chat'
import { Size } from 'styles'

export default ({ style }) => (
  <View style={style}>
    <View style={styles.outline}>
      <View style={styles.wing} />
      <Footer />
      <View style={styles.wing} />
    </View>
    <View style={styles.height} />
    <View style={styles.content}>
      <HomeIcon />
      <SearchIcon />
      <View></View>
      <ChatIcon />
      <Text>a</Text>
    </View>
    <View style={styles.addButtonView}>
      <Button style={styles.addButton}>
        <AddIcon />
      </Button>
    </View>
  </View>
)

const footerHeight = Size(1.5)

const styles = StyleSheet.create({
  addButtonView: {
    position: 'absolute',
    bottom: footerHeight + 7,
    width: '100%',
  },
  addButton: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 20
  },
  outline: {
    flexDirection: 'row'
  },
  wing: {
    flex: 1,
    backgroundColor: 'white',
    borderTopColor: '#e7e7e7',
    borderTopWidth: 1
  },
  height: {
    height: footerHeight,
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
