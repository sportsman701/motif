import React from 'react'
import { Text, StyleSheet } from 'react-native'
import CommonStyles from 'styles';

export default ({ format, center, style, children }) => {
  const getStyle = () => {
    const style = []
    
    switch (format) {
      case 'title':
        style.push(CommonStyles.textTitle)
        break
      case 'section':
        style.push(CommonStyles.textSection)
        break
      case 'subsection':
        style.push(CommonStyles.textSubSection)
        break
      case 'normal':
      default:
        style.push(CommonStyles.textNormal)
        break
    }

    if (center) {
      style.push([styles.center])
    }

    return style
  }

  return (
    <Text style={[getStyle(), style]}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  center: {
    textAlign: 'center'
  }
})

