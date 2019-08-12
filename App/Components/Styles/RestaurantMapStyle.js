import { StyleSheet, PixelRatio } from 'react-native'
import {Colors, Fonts, Metrics} from "../../Themes";
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    width: '100%',
    height:'40%'
  },
  thumbnail: {
    width: hp('9%'),
    height: hp('9%'),
  },
  detailsContainer: {
    paddingLeft: 6,
    height:hp('9%')
  },
  detailsText: {
    fontSize: Fonts.size.tiny,
    color:Colors.sectionTitleBackground,
    fontFamily: Fonts.type.base
  }
})
