import React from 'react'
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'
import DetailScreen from '../Containers/DetailScreen'
import ListScreen from '../Containers/ListScreen'
import Header from '../Containers/Header'
import LaunchScreen from '../Containers/LaunchScreen'

import HeaderIcon from '../Components/HeaderIcon'
import { Images } from '../Themes'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  DetailScreen: { screen: DetailScreen },
  ListScreen: { screen: ListScreen },
  Header: { screen: Header },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
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
      fontFamily:'Avenir Next Demi Bold'
    }
  }
})




export default createAppContainer(DrawerNavigator)
