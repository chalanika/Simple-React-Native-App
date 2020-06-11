import React from 'react';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';

export default function App() {
  const [value, onChangeText] = React.useState('E.g: Hasika Dilshani');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Enter Your Name :
      </Text>
      <TextInput
        style={ styles.userInput }
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button style={{ height: 30}}
        title="Submit"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8EB6F4',
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    fontSize: 18,
    fontWeight: "bold"
  },
  userInput:{
    borderColor: 'black', 
    borderWidth: 2, 
    padding: 5, 
    margin: 20, 
    marginBottom: 70, 
    backgroundColor: '#CFD6E1'
  }

});
