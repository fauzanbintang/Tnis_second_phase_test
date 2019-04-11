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
          <Text style={s.date}>{new Date(this.props.data.date).toLocaleDateString('en-US')}</Text>
          <Text>Amount: {Number(this.props.data.amount).toLocaleString('en-US')}</Text>
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
  date: {
    fontWeight: 'bold'
  }
})
