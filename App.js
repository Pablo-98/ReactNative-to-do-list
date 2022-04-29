import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import Task from './components/Task'

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's :)tasks</Text>

        <View style={styles.items}> 
        {/* This is wehere the tasks will go */ }
        <Task text={'task 1'} />
        <Task text={'task 2'} />
    

 </View>
      </View>
      {/* write a task*/}
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios'? 'padding' : 'height'}
      style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placehoolder={'write a task'}  />

        <TouchableOpacity >
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
    justifyContent: 'space-between',

  },
  input: {},
  addWrapper: {},
  addText: {},

});
