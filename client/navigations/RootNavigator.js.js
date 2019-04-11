import React from 'react'
import {
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons'

// NAVIGATION
import DepositNav from './DepositNavigator'
import CustomersNav from './CustomersNavigator'

const RootNav = createBottomTabNavigator({
  Deposit: DepositNav,
  Customers: CustomersNav
}, {
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state
      let IconComponent = Ionicons
      let iconName
      if (routeName === 'Deposit') {
        iconName = `ios-add-circle${focused ? '' : '-outline'}`
      }
      else if (routeName === 'Customers') {
        iconName = `ios-contact${focused ? 's' : ''}`
      }
      return <IconComponent name={iconName} size={25} color={tintColor} />
    }
  }),
  tabBarOptions: {
    activeTintColor: 'deepskyblue',
    inactiveTintColor: 'gray'
  }
})

export default createAppContainer(RootNav)