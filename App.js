import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity,KeyboardAvoidingView,Keyboard,ScrollView,Button, Alert} from 'react-native';
import { useState } from 'react';
import { Modal, Pressable} from 'react-native';
import Task from './Components/Task';



export default function App() {
  const [task,setTask]=useState();
  const [taskItems,setTaskItems]=useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [edit,setEdit]=useState({
    text:'',
    index:0
  });
  const handleAddTask=(task)=>{

    if (task== null) {
      Alert.alert('Error','plese enter text')
      
    }else{
      setTaskItems([...taskItems,task])
      Keyboard.dismiss();
     setTask(null);
  }
}
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  const removeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  const editTask = (edit) => {
   
    let itemsCopy = [...taskItems];
    itemsCopy[edit.index]=edit.text;
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
      <View key={index}  style={{paddingHorizontal:10}}>
           <Task  text={Item} index={index} handleAddTask={handleAddTask}
           completeTask={completeTask} removeTask={removeTask} openModel={()=>{setEdit({text:Item,index:index});setModalVisible(true)}}></Task>
       </View>
    
    )
    })
}
<Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TextInput style={{width:"100%",minWidth:150,minHeight:50,borderWidth:1,borderRadius:20,padding:10,borderColor:"grey"}} value={edit.text} onChangeText={(text)=>{setEdit((prev)=>{return({...prev,text:text})})}} placeholder={'Edit a Task'}  />
          <Pressable  style={{position:"absolute",right:0,}}  onPress={() => setModalVisible(!modalVisible)}>
          <Text style={{backgroundColor:"white",padding:10, shadowColor: '#000',shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 4,elevation: 5,}}>x</Text>
          </Pressable>
          <Pressable
        style={[styles.button, styles.buttonOpen,]}
        onPress={() => {editTask(edit);setModalVisible(!modalVisible)}}>
        <Text  style={styles.textStyle}>Done</Text>
      </Pressable>
          </View>
        </View>
      </Modal>
</View>
 
  </ScrollView>
  

{/* Write a task */}
{/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen */}
<KeyboardAvoidingView 
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={styles.writeTaskWrapper}
>
  <TextInput style={styles.input} placeholder={'Write a Task'} value={task}onChangeText={text=> setTask(text)}/>
  <TouchableOpacity  onPress={()=>handleAddTask(task)}>
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
    justifyContent:'space-evenly'
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position:"relative"
  },
  button: {
    borderRadius: 3,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#e04f5f',
    marginHorizontal:10,
    
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop:20
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
   
  },
});

