import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
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

        <View style={styles.footer}>
          <View style = {styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder = 'Digite o nome do produto...'
              placeholderTextColor = '#aeaiae' />
          </View>

          <TouchableOpacity style={styles.iconArea}>
            <Ionicons name='add' size={36} color='fff' />
          </TouchableOpacity>
        </View>
        
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
  },
  input: {
    color: '#fff',
    fontSize: 18
  },
  footer: {
    backgroundColor: '#000000c0',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomLeftRadius: 30
  },
  inputArea: {
    flex: 1,
    backgroundColor: '#000',
    height: 50,
    marginVertical: 20,
    borderRadius: 30,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  iconArea: {
    height: 50,
    width: 50,
    backgroundColor: '#000',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
})