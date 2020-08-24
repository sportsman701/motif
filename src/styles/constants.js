import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
export const Size = (n = 1) => n * 10 * width / 250

export const Colors = {
  primary: '#FFA800',
  secondary: '#1ED593'
}

export const CustomStyles = {
  fullScreen: {
    marginRight: -Size(),
    marginLeft: -Size(),
  },

  /* Font size */
  textTitle: {
    fontSize: Size(1.5),
    fontWeight: 'bold'
  },
  textSection: {
    fontSize: Size(1.3),
    fontWeight: 'bold'
  },
  textSubSection: {
    fontSize: Size(1.15),
    fontWeight: 'bold'
  },
  textNormal: {
    fontSize: Size()
  },

  /* Text color */
  primary: {
    color: Colors.primary
  },
  seconary: {
    color: Colors.seconray
  },
  white: {
    color: 'white'
  },

  /* Background */
  bgPrimary: {
    backgroundColor: Colors.primary
  },
  bgSecondary: {
    backgroundColor: Colors.secondary
  },

  /* Layout */
  flexOne: {
    flex: 1
  }
}
