import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native'

export default class Card extends Component {
  render() {
    return (
      <View style={s.card}>
        <View style={s.content}>
          <View>
            <Text style={s.email} >{this.props.data.email}</Text>
            <Text>Number: {this.props.data.account_number}</Text>
          </View>
          <View style={s.btnFlex}>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.navigate('Details', { data: this.props.data })}>
              <View style={s.btnColor}>
                <Text style={s.btnTxt}>Detail</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
      </View>
    )
  }
}

const s = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 5,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    overflow: "hidden"
  },
  content: {
    flex: 1,
    marginHorizontal: 3,
    justifyContent: 'space-between'
  },
  btnFlex: {
    alignSelf: 'flex-end',
    flexDirection: "row"
  },
  btnColor: {
    marginBottom: 3,
    marginHorizontal: 3,
    borderRadius: 3,
    backgroundColor: 'blue'
  },
  btnTxt: {
    color: "white",
    padding: 8
  },
  email: {
    fontSize: 17,
    fontWeight: "bold"
  }
})
