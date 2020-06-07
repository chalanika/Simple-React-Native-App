import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2}>
        hello world hhhhhhhhhhhhhhhhhhhhhhh bjhkjji njchhxij skjiosa mxjxhisu sjkckhcidj cjhdjciii hello world hhhhhhhhhhhhhhhhhhhhhhh bjhkjji njchhxij skjiosa mxjxhisu sjkckhcidj cjhdjciii
      </Text>
      <Image source={{
        width:200,
        height:300, 
        uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQGmPW_Scx2vfFBt4MWqD3bd7zck4l00fMoH7ynwNoLHnlcxWjC&usqp=CAU"
        }}
      />
           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A6A9BC',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
    justifyContent:"center",
    alignItems:"center",
    
},
});
