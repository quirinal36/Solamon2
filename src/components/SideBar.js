import React, {Component,useEffect, useState} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationEvents } from 'react-navigation';


function SideBar({children, ...props}){
    const {navigation} = props;
    const {uType} = props;
    const [u_type, setUType] = useState('');
    const [load,setLoad] = useState(false);
    const [userType, setUserType] = useState('');


    useEffect(()=>{
        if(userType==''){
            start().then(()=>{
                setLoad(true);
            }).catch(()=>{})
        }
    });

    const start = async()=>{
        await getUType();
    }

    const getUType = async () => {
        let t='';

        try{
            t=await AsyncStorage.getItem('userType') || '';
            setUType(t);
            if(t==='0')
                setUserType('구매자');
            else if(t==='1')
                setUserType('판매자');
            else if(t==='2')
                setUserType('관리자');
            else if(t==='')
                setUserType('');
        }catch(error){
            console.log('유저 타입을 가져오는 데 실패하였습니다.');
            setUType('');
            setUserType('');
            return false;
        }
        return true;
    }

    const logInOut=()=>{
        if(userType===''){
            navigation.navigate('SignInScreen');
        }else{
            setUserType('');
            AsyncStorage.setItem('userType', 'n');
            navigation.navigate('HomeScreen');
        }
    }
    if(load){
        return(
            <View style={{backgroundColor:'#F0F2FA'}}>
                {/* 상단 */}
                <Pressable style={styles.topMenu} onPress={()=>navigation.navigate('SellerScreen')}>
                    <Icon name="person" size={50}/>
                    <Text style={{fontSize:15, color:'white'}}>홍길동</Text>
                        <Text style={{fontSize:12, color:'white'}}>{userType}</Text>
                </Pressable>
                {/* 목록 */}
                <View style={{height:'70%', justifyContent:'space-between'}}>
                    <View>
                        <Pressable onPress={()=>navigation.navigate('UserPanelListScreen')} style={styles.menuList}>
                            <Text style={{fontSize:15}}>제품</Text>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('TermOfServiceScreen')} style={styles.menuList}>
                            <Text style={{fontSize:15}}>서비스 소개</Text>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('ConsultListScreen')} style={styles.menuList}>
                            <Text style={{fontSize:15}}>상담 신청</Text>
                        </Pressable>
                        {
                            u_type==='m'?
                            <Pressable onPress={()=>navigation.navigate('ManagementWaitingScreen')} style={styles.menuList}>
                                <Text style={{fontSize:15}}>관리자</Text>
                            </Pressable>
                            :
                            <View></View>
                        }
                        <Pressable onPress={()=>navigation.navigate('UserPanelListScreen')} style={styles.menuList}>
                            <Text style={{fontSize:15}}>설정</Text>
                        </Pressable>
                        <Pressable onPress={()=>navigation.navigate('ManagementScreen')} style={styles.menuList}>
                            <Text style={{fontSize:15}}>인증 리스트</Text>
                        </Pressable>
                    </View>
                    {/* 로그아웃 */}
                    <View>
                        <Pressable onPress={()=>logInOut()} style={styles.logoutBtn}>
                            {
                                u_type==='n'?
                                <Text style={{color:'white', alignSelf:'center', paddingVertical:10}}>로그인</Text>
                                :
                                <Text style={{color:'white', alignSelf:'center', paddingVertical:10}}>로그아웃</Text>
                            }
                        </Pressable>
                    </View>
                </View>
                <NavigationEvents>

                </NavigationEvents>
            </View>
        )
    }else{
        return(
            <View><Text>로딩중</Text></View>
        )
    }
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
        backgroundColor:'#005A96', 
        width:'80%', 
        alignSelf:'center', 
        borderRadius:90
    }

})

export default SideBar;