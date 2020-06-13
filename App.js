import React ,{useState} from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter Your Name :
      </Text>
      <TextInput
        style={ styles.userInput }
        onChangeText={text => setName(text)}
      />
      
      <Text style={styles.title}>
        Enter Your Age :
      </Text>
      <TextInput
        style={ styles.userInput }
        keyboardType = 'numeric'
        onChangeText={text => setAge(text)}
      />
      {name != '' && age != '' && <Text style={{fontSize:18, marginTop:50,fontWeight: "bold"}}>Hello {name}.Your age is {age}.</Text>}
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize: 18,
    fontWeight: "bold"
  },
  userInput:{
    width:200,
    height:50,
    borderColor: '#241AA9', 
    borderWidth: 2, 
    padding: 5, 
    margin: 20,
    fontSize:20, 
     
  }

});
