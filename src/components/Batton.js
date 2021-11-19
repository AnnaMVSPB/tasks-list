import React from 'react';
      import { Button, StyleSheet, View ,Text} from 'react-native';


export const Batton = ({callInput,input}) => {

  return (
    <View style={styles.con} >
      <Text style={styles.text}>Tasks</Text>
      <Button  onPress={()=>callInput(true)} title='+' />
    </View>
  );
}

const styles = StyleSheet.create({
 con:{
   height:200,
   alignItems:'center',
   justifyContent:'center',
   flexDirection:'row',
 },
 text:{
  width:'60%',
  fontSize:80,
  color:'#FFFFFF'
 },
});
