import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Home() {
  return (
    <View style={{ flex: 1}}>
      <ImageBackground
      source={require('../assets/background.jpg')}
      style={{ flex: 1, justifyContent: 'flex-start'}}
      resizeMode='repeat'>

        <View style={styles.header}>
          <Text style={styles.title}>Lista de Produtos</Text>
          <Ionicons name="trash" size={32} color = '#fff' />
        </View>

        <View style={{ flex: 1}}></View>

        <View style={styles.footer}></View>

      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 25,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000c0',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff'
  }
})