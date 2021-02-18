import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Button } from "native-base";
import Icon from 'react-native-vector-icons/Ionicons';


function HomePanelList({children, ...props}){
    const {item} = props;
    return(
        <View style={{backgroundColor:'white', width:'100%', maxWidth:'40%', margin:10, minHeight:200, height:'30%'}}>
            <Text style={{flex:5}}>{item.title}</Text>
            <View style={{flex:1, flexDirection:'row'}}>
                <Icon name={'document'}/>
                <Text>{item.title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topMenu:{
        backgroundColor:'#005A96', 
        height:'30%', 
        justifyContent:'center', 
        paddingLeft:10
    },
    menuList:{
        justifyContent:'center', 
        marginLeft:20,
        paddingVertical:10,
    },
    logoutBtn:{
        marginBottom:15, 
        backgroundColor:'lightblue', 
        width:'80%', 
        alignSelf:'center', 
        borderRadius:90
    }
})

export default HomePanelList;