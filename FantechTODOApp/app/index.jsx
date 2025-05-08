import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container}>
	    <View style={styles.containerImage}>
	   <Image 
	      source={require('../assets/imagem.jpg')}
	      style={styles.imagem}
	   />
	</View>

  <View style={styles.content}>
      <Text style={styles.title}>Fantech Shopping List - Aplicação TODO</Text>
      <Text style={styles.text}>Monte sua lista de compras para comprar coisas.</Text>
      <Link style={styles.button} href={'/home'}> 
        <Text style={styles.buttonText}>Acessar</Text>
	    </Link>
	</View>	

  <StatusBar style='light' backgroundColor='#000' />

  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
 },
 containerImage: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
 },
 imagem: {
    width: 230,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 115
 },
 content: {
    flex: 1,
    backgroundColor: '#dadada',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%'
 },
 title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 22,
    textAlign: 'center'
 },
 text: {
    fontSize: 16,
    color: 'gray'
 },
 button: {
    position: 'absolute',
    backgroundColor: '#000',
    bottom: '10%',
    alignSelf: 'center',
    borderRadius: 20,
    paddingVertical: 15,
    width: '60%',
    textAlign: 'center'
 },
 buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
 }})