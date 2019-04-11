import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

// SCREENS
import Customers from '../screens/Customers'
import Details from '../screens/Details'

const CustomersNav = createStackNavigator({
  Customers: {
    screen: Customers
  },
  Details: {
    screen: Details
  }
}, {
  initialRouteName: 'Customers',
  defaultNavigationOptions: {
    title: 'Customers'
  }
})

export default createAppContainer(CustomersNav)
