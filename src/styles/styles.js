import { Size, Colors } from './constants'

export const basicPadding = {
  paddingLeft: Size(),
  paddingRight: Size(),
  paddingTop: Size(2),
  paddingBottom: Size()
}

export const fullScreen = {
  marginRight: -Size(),
  marginLeft: -Size(),
  marginTop: -Size(2),
  marginBottom: -Size(),
  ...basicPadding
}

export const scrollPadding = {
  marginLeft: -Size(),
  marginRight: -Size(),
  paddingLeft: Size(),
  paddingRight: Size()
}

/* Font size */
export const textTitle = {
  fontSize: Size(1.5),
  fontWeight: 'bold'
}

export const textSection = {
  fontSize: Size(1.3),
  fontWeight: 'bold'
}

export const textSubSection = {
  fontSize: Size(1.15),
  fontWeight: 'bold'
}

export const textNormal = {
  fontSize: Size()
}

/* Text color */
export const primary = {
  color: Colors.primary
}

export const secondary = {
  color: Colors.secondary
}

export const white = {
  color: 'white'
}

/* Background */
export const bgPrimary = {
  backgroundColor: Colors.primary
}

export const bgSecondary = {
  backgroundColor: Colors.secondary
}

/* Layout */
export const flexOne = {
  flex: 1
}
