import { StyleSheet, PixelRatio } from 'react-native'
import {Colors, Fonts, Metrics} from "../../Themes";

export default StyleSheet.create({
  container: {
    width: '100%',
    height: PixelRatio.get() * 180
  },
  thumbnail: {
    width: Metrics.images.large,
    height: Metrics.images.large
  },
  detailsContainer: {
    paddingLeft: 6,
    height: Metrics.images.large
  },
  detailsText: {
    fontSize: 8,
    color:Colors.sectionTitleBackground,
    fontFamily: Fonts.type.base
  }
})
