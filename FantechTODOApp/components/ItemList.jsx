import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function ItemList({ item }) {
  return (
    <View style={styles.itemList}>
      <Text style={styles.itemToBuy}>{item.name}</Text>
      <TouchableOpacity style={[styles.actionIcon, {backgroundColor: 'darkgreen'}]}>
        <Ionicons name='bag-check-outline' size={24} color='#fff' />
      </TouchableOpacity>

      <TouchableOpacity style={[styles.actionIcon, {backgroundColor: 'darkred'}]}>
        <Ionicons name='trash-bin-outline' size={24} color='#fff' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  itemList: {
    flex: 1,
    backgroundColor: '#000000c0',
    padding: 15,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemToBuy: {
    flex: 1,
    color: 'orange',
    fontSize: 24,
    textDecorationLine: 'none'
  },
  actionIcon: {
    marginHorizontal: 10,
    borderRadius: '50%',
    padding: 10,
    justifyContent: 'center'
  }
})