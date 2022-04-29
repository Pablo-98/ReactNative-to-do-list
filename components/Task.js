import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';

const Task = (props) => {

    return (
        <View style={styles.items}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
            <Text style={styles.itemText}> {props.text} </Text>
        </View>
        <View style={styles.circlular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15, // all the way around is padding 15
        borderRadius: 10, // makes it look nice and rounded
        flexDirections: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottoms: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor:  '#558CF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight:15,
    },
    itemText:{
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#558CF6',
        borderWidth: 2,
        borderRadius: 5,

    },
    

}); 

export default Task;   