import { StyleSheet } from 'react-native'
import { Colors ,Fonts } from "../../Themes";

export default StyleSheet.create({
  container: {
    flexDirection:  'column'
  },
  sectionTitleContainer:  {
    width: '100%',
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 12,
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
    paddingHorizontal: 12,
    backgroundColor: Colors.background,
    flexDirection: 'column'
  },
  addressContainer: {
    marginTop: 16,
    flexDirection: 'column',
    paddingHorizontal: 12,
    marginBottom: 26

  },
  detailsText: {
    fontSize: Fonts.size.h6,
    color: Colors.panther
  }
})
