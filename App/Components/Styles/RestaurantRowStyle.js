import { StyleSheet, PixelRatio } from 'react-native';
import { Colors, Fonts } from "../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 180 * PixelRatio.get(),
    width: '100%',
    flexDirection: 'column',
    justifyContent:'flex-end',
  },
  gradient:  {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingLeft: 12,
    paddingBottom: 6
  },
  sectionTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular * PixelRatio.get(),
    color: Colors.white
  },
  sectionSubTitle:{
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small * PixelRatio.get(),
    color: Colors.white
  }
})
