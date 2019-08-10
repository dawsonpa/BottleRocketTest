import React from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
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
  navigationOptions: {
    headerStyle: styles.header,
    headerRight: () => <HeaderIcon imgSource={Images.mapIcon} />,
    headerTitleStyle: {
      color: '#FFFFFF',
      fontSize: 17,
      fontFamily: Fonts.type.bold
    }
  }
})

const DrawerNavigator = createDrawerNavigator({
  list: {
    screen: ListScreen,
    navigationOptions: ()  => ({
      headerBackTitleVisible: false
    })
  },
  detail: DetailScreen
},{
  hideStatusBar: true,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#43E895'
    },
    title:  'Lunch Tyme',
    headerBackImage: () => <HeaderIcon imgSource={Images.backButton} />,
    headerRight: () => <HeaderIcon imgSource={Images.mapIcon} />,
    headerTitleStyle: {
      color: '#FFFFFF',
      fontSize: 17,
      fontFamily: Fonts.type.bold
    }
  }
})




export default createAppContainer(DrawerNavigator)
