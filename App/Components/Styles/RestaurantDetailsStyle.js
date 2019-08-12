import { StyleSheet, PixelRatio } from 'react-native'
import {Colors, Fonts, Metrics} from "../../Themes";

export default StyleSheet.create({
  container: {
    flexDirection:  'column',
    height: '60%'
  },
  sectionTitleContainer:  {
    width: '100%',
    height: '20%',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: Metrics.baseMargin,
    backgroundColor: Colors.sectionTitleBackground
  },
  sectionTitle: {
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    color: Colors.white,
  },
  sectionSubTitle:{
    fontFamily: Fonts.type.base,
    fontSize: Fonts.size.small,
    color: Colors.white,
  },
  detailsContainer: {
    width:'100%',
    height: '40%',
    paddingHorizontal: Metrics.baseMargin,
    paddingTop: Metrics.baseMargin,
    backgroundColor: Colors.snow,
    flexDirection: 'column'
  },
  addressContainer: {
    flexDirection: 'column',
    marginBottom: Metrics.doubleBaseMargin

  },
  detailsText: {
    fontSize: Fonts.size.regular,
    color: Colors.panther,
    fontFamily: Fonts.type.base
  }
})
