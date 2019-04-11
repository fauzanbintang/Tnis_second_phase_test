import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  Image
} from 'react-native'
import { connect } from 'react-redux'

// COMPONENTS
import Card from './customers/Card';
import { getCustomers } from '../store/actions/userAction';

class Customers extends Component {
  componentDidMount = () => {
    this.props.getCustomers()
  }

  render() {
    return (
      <View style={s.container}>
        {this.props.loading && <Image
          style={s.image}
          source={require('../assets/loading.gif')}
        />}
        {!this.props.loading && <FlatList
          data={this.props.customers}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Card data={item} navigation={this.props.navigation} />}
        />}
      </View>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: "#EFEEEE"
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center'
  }
})

const mapStateToProps = (state) => ({
  customers: state.user.customers,
  loading: state.user.loading,
  err: state.user.err
})

const mapDispatchToProps = (dispatch) => ({
  getCustomers: () => dispatch(getCustomers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Customers)
