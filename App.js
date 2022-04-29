import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Task from './components/Task'

export default function App() {
  const [task , setTask] = useState(); //this is  how we create a state in a FC task is name of state, setTask is the function to set state
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
setTaskItems([...taskItems, task]) 
setTask(null);
}

const completeTask =(indeex) => {
  let itemsCopy = [...taskItems];
  itemsCopy.splice(index, 1);
  setTaskItems(itemsCopy);
}
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's :)tasks</Text>

        <View style={styles.items}> 
        {/* This is wehere the tasks will go */ }

        {
          taskItems.map((item, index) => {
           return(
             <TouchableOpacity key={index} onpress={() => compltetTask(index)}>
           ) <Task  text={item} />
          })
        }
       {/*} <Task text={'task 1'} />
        <Task text={'task 2'} /> */}
    

 </View>
      </View>
      {/* write a task*/}
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios'? 'padding' : 'height'}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placehoolder={'write a task'} value={task} onChangeText={task => setTask(text)}  />

        <TouchableOpacity onPress={() => handleAddTask()} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}></Text>
          </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontize: 24,
    fontweight: 'bold',
  },
  items: {
    marginTop: 30,
  }, 
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',


  },
  input: {
    verticalPadding: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 60,
    borderColor:'#C0C0C0',
    borderWidth: 1,

  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#C0C0C0',
    borderWidth: 1, 

  },
  addText: {},

});
