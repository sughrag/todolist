import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity,KeyboardAvoidingView,Keyboard,ScrollView,Button, Alert} from 'react-native';
import { useState } from 'react';
import Task from './Components/Task';



export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);
  const handleAddTask=()=>{

      Keyboard.dismiss();
      setTaskItems([...taskItems,task])
    
     setTask(null);
    
    
   {/* if(taskItems ==""){
      Alert.alert('Error','plese enter text')
    }
  */}
   
  }
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  
  return (
    
    <View style={styles.container}>
            {/* Added this scroll view to enable scrolling when list gets longer than the page */}
            <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
      <View style={styles.TaskWraper}>
      <Text style={styles.SectionTilte} > Today's Agenda</Text>
      <Image source={require('./app/assets/pngegg.png')} style={{height:50, width:50}}></Image>
      
      </View> 
  <View style={styles.Items}>
    {
    taskItems.map((Item,index) => {

    return  (
      <TouchableOpacity key={index} onPress={()=>(completeTask(index))}>
           {/*<Image style={styles.circular} source={require('./app/assets/delete-icon-png-6.jpg')}></Image>*/}
           <Task  text={Item}></Task>

       </TouchableOpacity>
    
    )
    })
}
</View>
 
  </ScrollView>
  

{/* Write a task */}
{/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
<KeyboardAvoidingView 
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.writeTaskWrapper}
>
  <TextInput style={styles.input} placeholder={'Write a Task'} value={task}onChangeText={text=> setTask(text)}/>
  <TouchableOpacity onPress={()=>handleAddTask()}>
    <View style={styles.addWrapper}>
    <Image source = {require('./app/assets/plus.png')}   style = {{ width: 20, height: 20}} />
      {/*<Text style={styles.addText}>+</Text>*/}
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
  TaskWraper:{
    paddingTop:80,
    paddingHorizontal:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-even'
  },
  SectionTilte:{
    fontSize:24,
    fontWeight:'bold',
    flexDirection:'row',
    justifyContent:'space-between',
   alignItems:'center'
    

  },
  Items:{
    marginTop:20
    
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#e04f5f',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor:'#e04f5f',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },

});

