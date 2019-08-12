import { StyleSheet, PixelRatio } from 'react-native'
import {Colors, Fonts, Metrics} from "../../Themes";

export default StyleSheet.create({
  container: {
    width: '100%',
    height: PixelRatio.get() * 180
  },
  thumbnail: {
    width: PixelRatio.get() * Metrics.images.large,
    height: PixelRatio.get() * Metrics.images.large
  },
  detailsContainer: {
    paddingLeft: 6,
    height: PixelRatio.get() * Metrics.images.large
  },
  detailsText: {
    fontSize: 8 * PixelRatio.get(),
    color:Colors.sectionTitleBackground,
    fontFamily: Fonts.type.base
  }
})
