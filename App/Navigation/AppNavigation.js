import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import CloseDrawerButtonContainer from '../Containers/CloseDrawerButtonContainer'
import DetailScreen from '../Containers/DetailScreen'
import ListScreen from '../Containers/ListScreen'
import Header from '../Containers/Header'
import LaunchScreen from '../Containers/LaunchScreen'

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
      fontSize: 17,
      fontFamily: Fonts.type.bold
    }
  }
})

export default createAppContainer(ListStack)
