import { StyleSheet } from 'react-native'
import { Colors ,Fonts } from "../../Themes";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:  'column'
  },
  sectionTitleContainer:  {
    width: '100%',
    height: 60,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: 12
  },
  detailsContainer: {
    width:'100%',
    paddingTop: 16,
    paddingHorizontal: 12,
    background: Colors.background,
    flexDirection: 'column'
  },
  addressContainer: {
    flexDirection: 'column',
  },
  detailsText: {
    fontSize: Fonts.size.h6,
    color: Colors.panther
  }
})
