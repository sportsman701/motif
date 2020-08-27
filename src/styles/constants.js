import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const Size = (n = 1) => n * 10 * width / 250

export const Colors = {
  primary: '#FFA800',
  secondary: '#1ED593'
}
