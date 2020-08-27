import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Text from '../Text'
import { Colors, Size, CustomStyles } from 'styles'

const variants = {
  primary: CustomStyles.bgPrimary,
  // danger: CustomStyles.
  nobg: { backgroundColor: '#ffff' }
}

export default ({ style, title, block, variant, children, ...rest }) => (
  <TouchableOpacity
    style={[
      styles.container,
      styles.buttonView,
      block && styles.block,
      variants[variant] || CustomStyles.bgPrimary,
      style
    ]}
    activeOpacity={0.7}
    {...rest}
  >
    {children ? children : (
      <Text center style={styles.buttonText}>
        {title}
      </Text>
    )}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: Size(0.5),
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 50,
  },
  block: {
    flex: 1
  },
  buttonText: {
    color: 'white',
  }
})
