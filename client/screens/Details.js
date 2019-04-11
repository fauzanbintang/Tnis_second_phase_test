import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native'
import { connect } from 'react-redux'
import { getBalance } from '../store/actions/userAction'

// COMPONENTS
import Card from './details/Card'

class Details extends Component {
  componentDidMount = () => {
    let { navigation } = this.props
    this.props.getBalance(navigation.getParam('data').account_number)
  }

  render() {
    return (
      <View style={s.container}>
        {this.props.loading && <Image
          style={s.image}
          source={require('../assets/loading.gif')}
        />}
        {!this.props.loading && <>
          <View style={s.totalBalance}>
            <Text style={s.text}>Account Number: {this.props.balance.account_number}</Text>
            <Text style={s.text}>Email: {this.props.balance.email}</Text>
            <Text style={s.text}>Total Balance: <Text style={s.balance}>{this.props.balance.balance}</Text> </Text>
          </View>
          <ScrollView>
            {this.props.balance.history && this.props.balance.history.map((e, i) => <Card key={i} data={e} navigation={this.props.navigation} />)}
          </ScrollView>
        </>}
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#EFEEEE"
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center'
  },
  totalBalance: {
    backgroundColor: 'deepskyblue',
    padding: 3,
    marginBottom: 1
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  balance: {
    color: 'red'
  }
})

const mapStateToProps = (state) => ({
  balance: state.user.balance,
  loading: state.user.loading,
  err: state.user.err
})

const mapDispatchToProps = (dispatch) => ({
  getBalance: (accountNumber) => dispatch(getBalance(accountNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Details)