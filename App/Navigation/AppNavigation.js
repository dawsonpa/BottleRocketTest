import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CloseDrawerButtonContainer from '../Containers/CloseDrawerButtonContainer'
import ListScreen from '../Containers/ListScreen'
import HeaderIcon from '../Components/HeaderIcon'
import {Fonts, Images} from '../Themes'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const ListStack = createStackNavigator({
  ListScreen: { screen: ListScreen },
}, {
  // Default config for all screens
  headerMode: 'float',
  initialRouteName: 'ListScreen',
  defaultNavigationOptions: {
    title: 'Lunch Tyme',
    headerStyle: styles.header,
    headerRight: <HeaderIcon imgSource={Images.mapIcon} />,
    headerLeft: <CloseDrawerButtonContainer />,
    headerTitleStyle: {
      color: '#FFFFFF',
      fontSize: Fonts.size.regular,
      fontFamily: Fonts.type.bold
    }
  }
})

export default createAppContainer(ListStack)
