import React, {Component, useState} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';

import axios from 'axios';
import { API_URL } from '../StaticVariable';
import AsyncStorage from '@react-native-community/async-storage';

export default class SignUpScreen extends Component{
   
    _signUpHandler=(id, pw, navigation)=>{
        axios.post(API_URL+"/users",{
            login:id,
            companyName:'test',
            companyId:'test1',
            companyAddress:'전북전주시',
            hp:'01012345678',
            phone:'0631234567',
            type:'1',
            passwd:pw,
        }).then((res)=>{
            console.log(res);
            navigation.navigate('HomeScreen');
        }).catch((err)=>{
            //Alert.alert(err);
            console.error(err);
            AsyncStorage.setItem('token','');
            AsyncStorage.setItem('userId','');
        });
    }


    _testHandler= async ()=>{
        await axios.get(API_URL+"/users/test").then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }
    render(){
        let id='';
        let pw='';

        let navigation=this.props.navigation;
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>회원가입</Text>
                </Header>

                {/* body */}
                <View style={{justifyContent:'space-around', height:'100%', width:'100%'}}>
                    {/* 안내 메세지 */}
                    <View style={{flex:1, alignItems:'center', marginTop:30}}>
                        <Button style={{width:'85%', backgroundColor:'#FFEB32', alignSelf:'center', justifyContent:'space-around'}}>
                            <Icon style={{color:'black', position:'absolute', left:5}} name='chatbubble'/>
                            <Text>카카오 로그인</Text>
                        </Button>
                        <Text>or with email</Text>
                    </View>
                    {/* ID, PW 입력칸 */}
                    <View style={{flex:1.5, justifyContent:'space-around', zIndex:1}}>
                        <View>
                            <TextInput style={styles.textInput} onChangeText={(_id)=>id=_id} placeholder={'사용하실 아이디를 입력해주세요.'}/>
                            <TextInput style={styles.textInput} onChangeText={(_pw)=>pw=_pw} placeholder={'비밀번호를 입력해주세요.'}/>
                            <TextInput style={styles.textInput} placeholder={'비밀번호를 다시 입력해주세요.'}/>
                            <TextInput style={styles.textInput} placeholder={'이름을 입력해주세요.'}/>
                        </View>
                    </View>

                    {/* 버튼 */}
                    <View style={{flex:1.2, alignContent:'center', justifyContent:'space-around', alignItems:'center'}}>
                        <Text style={{fontSize:11, color:'gray'}}>개인정보 보호 정책에 동의하신다면 회원가입 버튼을 눌러주세요.</Text>
                        <Button
                            onPress={()=>this._signUpHandler(id, pw, navigation)}
                            style={{width:'95%',alignSelf:'center', justifyContent:'center',  borderWidth:1, backgroundColor:'#F0F2FA', borderColor:'#005A96'}}>
                            <Text style={{fontSize:15, color:'#005A96'}}>회원가입</Text>
                        </Button>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{fontSize:12, color:'gray'}}>이미 아이디가 있으신가요? </Text>
                            <Pressable onPress={()=>navigation.navigate('SignInScreen')}>
                                <Text style={{fontSize:12, fontWeight:'bold', color:'black'}}>로그인하기</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{flex:0.5}}></View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
    textInput:{
        backgroundColor:'white', 
        width:'90%', 
        marginVertical:5, 
        alignSelf:'center',
    }
})