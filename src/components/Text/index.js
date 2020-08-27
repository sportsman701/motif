import React from 'react'
import { Text } from 'react-native'
import { textTitle, textSection, textSubSection, textNormal } from 'styles';

export default React.forwardRef(({ format, align, strong, style, children }, ref) => {
  const getStyle = () => {
    const style = []
    
    switch (format) {
      case 'title':
        style.push(textTitle)
        break
      case 'section':
        style.push(textSection)
        break
      case 'subsection':
        style.push(textSubSection)
        break
      case 'normal':
      default:
        style.push(textNormal)
        break
    }

    switch (align) {
      case 'left':
      case 'right':
      case 'center':
        style.push({ textAlign: align})
    }

    if (strong) {
      style.push({ fontWeight: 'bold' })
    }

    return style
  }

  return (
    <Text ref={ref} style={[getStyle(), style]}>
      {children}
    </Text>
  )
})
