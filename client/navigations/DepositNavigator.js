import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

// SCREENS
import Deposit from '../screens/Deposit'

const DepositNav = createStackNavigator({
  Deposit: {
    screen: Deposit
  }
}, {
  initialRouteName: 'Deposit',
  defaultNavigationOptions: {
    title: 'Add new deposit'
  }
})

export default createAppContainer(DepositNav)
