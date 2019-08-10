import { StyleSheet } from 'react-native'
import { Colors } from "../../Themes";
import Fonts from "../../Themes/Fonts";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    width: '100%',
    flexDirection: 'column',
    justifyContent:'flex-end',
  },
  gradient:  {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingLeft:12,
    paddingBottom: 6
  },
  sectionTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    color: Colors.white,
    opacity: 1
  },
  sectionSubTitle:{
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
    color: Colors.white,
    opacity: 1
  }

})
