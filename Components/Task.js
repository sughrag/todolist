import React, { useState } from 'react';
import { StyleSheet , Text,TouchableOpacity,View,Image} from 'react-native';

function Task(props) {
    const [taskItems,setTaskItems]=useState([]);
    const completeTask = (index) => {
      let itemsCopy = [...taskItems];
      itemsCopy.splice(index, 1);
      setTaskItems(itemsCopy)
    }
    return (
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text style={styles.itemText}>{props.text}</Text>
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
      },
      itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
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