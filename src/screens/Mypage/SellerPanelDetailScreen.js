import React, {Component, useState, useEffect} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from '../../components/DatePicker'
import axios from 'axios';
import { API_URL } from '../StaticVariable';
import AsyncStorage from '@react-native-community/async-storage';

export default class SellerPanelDetailScreen extends Component{


    constructor(props){
        super(props);
        this.state={
            info:'',
            load:false,
        }
        this._getUserData();
    }

    _getUserData=async()=>{
        try{
            await axios.get(API_URL+"/panel/info/"+this.props.navigation.getParam('id'))
                .then((result)=>{
                    this.setState({
                        info:result.data,
                        load:true,
                    });
                console.log(JSON.stringify(result));
            })
        }catch(error){
            console.log('패널 정보 가져오기 실패');
        }
    }

    render(){
        let navigation=this.props.navigation;
        let isDatePickerVisible=false;

        const showDatePicker = () => {
            console.log("open");
            isDatePickerVisible=true;
        };
        
        const hideDatePicker = () => {
            isDatePickerVisible=false
        };
        
        const handleConfirm = (date) => {
            //console.warn("A date has been picked: ", date);
            hideDatePicker();
        };
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>판매자 정보 등록</Text>
                    <Pressable onPress={()=>navigation.goBack()} style={{position:"absolute", right:0, padding:10, marginRight:10}}>
                        <Text style={{color:'white'}}>등록</Text>
                    </Pressable>
                </Header>

                {/* body */}
                <Content showsVerticalScrollIndicator={false}>
                <View style={{borderBottomWidth:1, borderBottomColor:'lightgray', height:35}}>
                        <Text style={{textAlignVertical:'center', paddingLeft:15, fontSize:9, color:'#AAA', height:'100%'}}>패널 등록</Text>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>사업자명</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{this.state.info.company}</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>소재지</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{this.state.info.storageAddress}</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>발전용량</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{this.state.info.generationCapacity}</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>설치업체</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{this.state.info.company}</Text>                                
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널종류</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{this.state.info.type}</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널제조사</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{this.state.info.equipCompnay}</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>현장사진</Text>
                        </View>
                        <View style={{flex:10, flexDirection:'row'}}>
                            <Pressable 
                                style={{backgroundColor:'#007096', padding:10}} 
                                onPress={()=>navigation.navigate({
                                    routeName: 'PhotoScreen',
                                    params:{
                                        src:this.state.info.fieldImageUrl,
                                    }
                                })}>
                                <Text style={{color:'white'}}>보기</Text>
                            </Pressable>
                            <Pressable 
                                style={{backgroundColor:'#007096', padding:10, marginLeft:20}} 
                            >
                                <Text style={{color:'white'}}>변경</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널사진</Text>
                        </View>
                        <View style={{flex:10, flexDirection:'row'}}>
                            <Pressable 
                                style={{backgroundColor:'#007096', padding:10}} 
                                onPress={()=>navigation.navigate({
                                    routeName: 'PhotoScreen',
                                    params:{
                                        src:this.state.info.imageUrl,
                                    }
                                })}>
                                <Text style={{color:'white'}}>보기</Text>
                            </Pressable>
                            <Pressable 
                                style={{backgroundColor:'#007096', padding:10, marginLeft:20}} 
                            >
                                <Text style={{color:'white'}}>변경</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <Pressable onPress={showDatePicker()} style={{flex:4}}>
                            <Text style={{fontSize:9}}>철거희망년월</Text>
                        </Pressable>
                        <View style={{flex:10}}>
                            <DatePicker
                            ></DatePicker>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>연락처</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>00000000000</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
    contentItems:{
        height:60, 
        flexDirection:'row', 
        alignItems:'center', 
        paddingLeft:15, 
        borderColor:'lightgray', 
        borderBottomWidth:1,
    },
    textInput:{
        fontSize:9,
        backgroundColor:'#FFFFFF',
        marginRight:10,
        height:'70%',
    },
    itemContainer:{
        flexDirection:'row',
        marginVertical:2,

    },
    label:{
        fontSize:12,
        color:'gray',
        width:'20%',
        padding:5,
    },
    value:{
        fontSize:12,
        color:'black',
        backgroundColor:'white',
        width:'80%',
        padding:5,
    },
    item:{
        fontSize:14,
        textAlignVertical:'center',
        marginRight:10,
        paddingLeft:10,
        height:'70%',
    },
})