import React, { useState } from 'react';
import { StyleSheet , Text,View,Image,} from 'react-native';
import {Pressable} from 'react-native';
function Task(props) {
    // const completeTask = (index) => {
    //   let itemsCopy = [...taskItems];
    //   itemsCopy.splice(index, 1);
    //   setTaskItems(itemsCopy)
    // }
    return (
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
          </View>
{/* Actions */}
       <View style={{display:"flex",flexDirection:"row",alignItems:"center",}}>
    {/*   // <Pressable onPress={props.completeTask} >
        //<Text >Done</Text>
     // </Pressable> */}
       <Pressable onPress={props.openModel}
        style={{marginHorizontal:8}}>
        <Text >Edit</Text>
      </Pressable>
     <Pressable onPress={()=>props.removeTask(props.index)}>
     <Image style={{width:20,height:20}} source={require('../app/assets/delete-icon-png-6.jpg')}></Image>
     </Pressable>
    
       </View>
        </View>
      )
    }

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        flex:1
    
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        flex:1
      },
      square: {
        width: 24,
        height: 24,
        backgroundColor: '#e04f5f',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
      },
      itemText: {
        maxWidth: '80%',
        
      },
      circular: {
        width: 20,
        height: 20,
        borderColor: '#e04f5f',
        borderWidth: 2,
        borderRadius: 5,
        opacity:0.4
      
      },
   
    });
    
export default Task;