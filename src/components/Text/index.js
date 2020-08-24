import React from 'react'
import { Text } from 'react-native'
import CommonStyles from 'styles';

export default ({ format, style, children }) => {
  const getStyle = () => {
    switch (format) {
      case 'title':
        return CommonStyles.textTitle
      case 'section':
        return CommonStyles.textSection
      case 'subsection':
        return CommonStyles.textSubSection
      case 'normal':
      default:
        return CommonStyles.textNormal
    }
  }

  return (
    <Text style={[getStyle(), style]}>
      {children}
    </Text>
  )
}
