import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Banner from './components/Banner';
import Cells from './components/Cells';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Banner/>
      <Text style={{fontSize:20, color:'#1E2772', fontWeight:'bold', marginVertical: 20}}>Login your account</Text>
      <Cells 
      placeholder="ejemplo@email.com"
      textContentType="emailAdress"
      icon="mail"
      etiqueta="Email"
      />
      <Cells 
      placeholder="Enter your password"
      textContentType="password"
      icon="lock-closed"
      etiqueta="Password"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
