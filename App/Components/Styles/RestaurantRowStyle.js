import { StyleSheet, PixelRatio } from 'react-native';
import {Colors, Fonts, Metrics} from "../../Themes";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    flex:1,
    height: hp('35%'),
    flexDirection: 'column',
    justifyContent:'flex-end',
  },
  gradient:  {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingLeft: Metrics.baseMargin,
    paddingBottom: Metrics.baseMargin
  },
  sectionTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    color: Colors.white
  },
  sectionSubTitle:{
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small ,
    color: Colors.white
  }
})
