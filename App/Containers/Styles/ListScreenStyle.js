import { StyleSheet } from 'react-native'
import {ApplicationStyles, Colors} from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  details: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.snow

  }
})
