import {Dimensions, Platform} from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window')

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: wp('1%'),
  marginVertical: hp('1%'),
  section: 25,
  baseMargin: hp('1.5%'),
  doubleBaseMargin: hp('2.5%'),
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: hp('1.5%'),
    small:hp('2.0%'),
    medium: hp('2.5%'),
    large: hp('3.0%'),
    xl: hp('4.0%')
  },
  images: {
    small: hp('2%'),
    medium: hp('3%'),
    large: hp('5%'),
    logo: hp('17%')
  }
}

export default metrics
