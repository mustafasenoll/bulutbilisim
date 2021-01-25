import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

} from 'react-native';
const App:() => React$Node = () => {
  return(
    <>

    <View style={styles.body}>
    <Text style={styles.sectionDescription}>Ad  Soyad = Mustafa Şenol</Text>
    <Text style={styles.sectionDescription}>Yaş =20</Text>
    <Text style={styles.sectionDescription}>Memleket = Erzurum</Text>
    <Text style={styles.sectionDescription}>Lise =Kartal Doğa Koleji</Text>
    <Text style={styles.sectionDescription}>Üniversite = Okan Üniversitesi</Text>
    <Text style={styles.sectionDescription}>Okuduğum Bölüm = Bilgisayar Programcılığı</Text>
    <Text style={styles.sectionDescription}>Hobiler = Müzik Dinlemek,Kitap Okumak</Text>


    
    </View>
    </>

  );
};
const styles = StyleSheet.create({
 sectionDescription:{
   marginTop:70,
   marginLeft:15,
   fontSize:20,
   fontWeight:'300',
   color:'#000000',


 },


});
export default App;
