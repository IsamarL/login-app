import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
      <Text style={{fontSize:14, color:'#1E2772', textDecorationLine:'underline', right:-100, margin:10, }}>Forgot your password?</Text>
   
      <TouchableOpacity style={styles.LoginButton}>
        <Text style={{color:'white', textAlign:'center', fontSize:16}}>Login Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignupButton}>
        <Text style={{color:'#FD7401', textAlign:'center', fontSize:16}}>Signup Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  LoginButton:{
    width:'90%',
    backgroundColor:'#FD7401',
    height:50,
    borderRadius:15,
    justifyContent:'center',
    margin:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  SignupButton:{
    width:'90%',
    backgroundColor:'white',
    height:50,
    borderRadius:15,
    borderWidth:1,
    borderColor:'#FD7401',
    justifyContent:'center',
    margin:10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },

});
