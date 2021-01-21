import React ,{ Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,View,TextInput,Button, TouchableOpacity
} from 'react-native';

export default class App extends Component <{}> {
  myFun=() =>{
    alert('Kayıt Başarılı');
  }
  render(){
  return(
    <View style={styles.container}>
     <TextInput
     placeholder='Adınız:'
     style={styles.myText}
     />
     <TextInput
     placeholder='Soyadınız:'
     style={styles.myText}
     />
     <TextInput
     placeholder='Yaşınız:'
     style={styles.myText}
     />
     <TextInput
     placeholder='Email:'
     style={styles.myText}
     />
     <TextInput
     placeholder='Şifre Giriniz:'
     style={styles.myText}
     />
     <TextInput
     placeholder='Şifre Tekrar:'
     style={styles.myText}
     />

     <TouchableOpacity
     onPress={this.myFun}
     style={{backgroundColor:'blue',padding:10,width:150}}
     >
       <Text style={{color:'white',textAlign:'center',fontSize:20,fontWeight:'bold'}}>Kaydet</Text>
       </TouchableOpacity>
    </View>
  );
  
}

}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
  },
  myText:{
    borderWidth:1,borderColor:'#ccc',
    margin:10,padding:10,width:'90%'
  }
});