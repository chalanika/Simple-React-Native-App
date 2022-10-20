import React ,{useState} from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';

export default function App() {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter Your Name :
      </Text>
      <TextInput
        style={ styles.userInput }
        onChangeText={val => setName(val)}
      />  
      <Text style={styles.title}>
        Enter Your Age :
      </Text>
      <TextInput
        style={ styles.userInput }
        keyboardType = 'numeric'
        onChangeText={val => setAge(val)}
      />
      {name != null && age != null && <Text style={styles.text}>Hello,My name is {name}. Your age is {age}</Text>}
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
    height:30,
    borderColor: '#241AA9', 
    borderWidth: 2, 
    padding: 5, 
    margin: 20,
    fontSize:15,     
  },
  text:{
    fontSize:15, marginTop:50,fontWeight: "bold"
  }

});
