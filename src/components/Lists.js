import React, { useState } from 'react';
import { Button, StyleSheet, View, TextInput, Text, FlatList } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useDispatch, useSelector } from 'react-redux';


export const Lists = ({ input, callInput }) => {
  const dispatch = useDispatch()
  const lists = useSelector((state) => state.list);
  const [task, setTask] = useState('')
  const[checkBox,setCheckBox]=useState(false)
  const saveTask = () => {
    dispatch({ type: 'SAVE_TASK', payload: task })
    setTask('')
    callInput(false)

  }

  return (
    <View  >
      {input && <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={setTask} value={task} />
        <Button onPress={saveTask} style={styles.button} title='добавить' /></View>}
      <FlatList style={styles.list}
        data={lists}
        renderItem={({ item }) => <> 
        {/* <CheckBox    disabled={false} value={checkBox}/> */}
        <Text  onPress={()=> setCheckBox(!checkBox)} style={styles.text}>{item.name}</Text>
        </>}
        keyExtractor={item => item.id.toString()}/>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
    paddingVertical: 10
  },
  container: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    width: '50%',
    borderBottomColor: '#000000',
    borderStyle: 'solid',
    borderBottomWidth: 3
  },
  list: {
    paddingHorizontal: 40,
    paddingVertical: 40
  }
});
