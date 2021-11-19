import { StatusBar } from 'expo-status-bar';
import React, { useState }  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/helpers/store'
import { Provider } from 'react-redux';

import {Batton} from './src/components/Batton';
import { Lists } from './src/components/Lists';

export default function App() {
  const [input,setInput]=useState(false)
 const callInput = t =>{
    setInput(t)
  }
  return (
    <Provider store={store}>
    <View style={styles.container}>
     < Batton callInput={callInput} />
     <View style={styles.containerTasks}>
     <StatusBar style="auto" />
      <Lists input={input} callInput={callInput}/>
    
     </View>
    
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#808080',
    flex:1,
  },
  containerTasks:{
  
  },
  text:{
    color:'#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30
  }
});
