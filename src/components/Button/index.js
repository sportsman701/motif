import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Link } from 'react-router-native'
import Text from '../Text'
import { Size, bgPrimary } from 'styles'

const variants = {
  primary: bgPrimary,
  // danger: CustomStyles.
  nobg: { backgroundColor: '#ffff' }
}

const Button = ({ style, title, block, variant, children, ...rest }) => (
  <TouchableOpacity
    style={[
      styles.container,
      block && styles.block,
      variants[variant] || bgPrimary,
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

export default ({ link, ...rest }) =>
  link ? (
    <Link to={link} component={Button} {...rest} />
  ) : (
    <Button {...rest} />
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
