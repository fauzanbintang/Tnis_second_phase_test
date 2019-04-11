import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { addDeposit } from '../store/actions/userAction';

class Deposit extends Component {
  state = {
    email: '',
    amount: ''
  }

  submit = () => {
    let input = {
      email: this.state.email,
      amount: Number(this.state.amount)
    }
    this.props.addDeposit(input)
    this.clearForm()
  }

  clearForm = () => {
    this.setState({
      email: '',
      amount: ''
    })
  }

  render() {
    const { email, amount } = this.state
    return (
      <View style={s.container}>
        <Text>Customer Email</Text>
        <TextInput
          style={s.input}
          placeholder="Input Customer Email!"
          value={email}
          onChangeText={(text) => this.setState({ email: text })}
        />
        <Text>Amount</Text>
        <TextInput
          style={s.input}
          placeholder="Input Deposit Amount!"
          value={amount}
          keyboardType={"numeric"}
          onChangeText={(text) => this.setState({ amount: text })}
        />
        <Button style={s.button} title="Submit" onPress={() => this.submit()} />
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: "stretch",
    backgroundColor: "#EFEEEE"
  },
  input: {
    height: 40,
    margin: 2,
    backgroundColor: "white"
  }
})

const mapStateToProps = (state) => ({
  loading: state.user.loading,
  err: state.user.err
})

const mapDispatchToProps = (dispatch) => ({
  addDeposit: (input) => dispatch(addDeposit(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Deposit)