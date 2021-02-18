import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from '../../components/DatePicker'
import axios from 'axios';
import { API_URL } from '../StaticVariable';
import AsyncStorage from '@react-native-community/async-storage';

export default class SellerModifyScreen extends Component{
    
    componentDidMount(){
        let token=this.getToken();
        this._getUserData(token);
    }

    getToken = async () => {
        let t = '';
        try {
            t = await AsyncStorage.getItem('token') || '';
            setToken(t);
        } catch (error) {
            console.log('토큰을 가져오는데 실패하였습니다.');
            setToken('');
            return false;
        }
        return true;
    }

    _getUserData=async(token)=>{
        await axios.get(API_URL+"/users/info",
        {headers: {'Authorization': 'Bearer '+token,
            'Content-Type': 'application/json'}
        }).then((result)=>{
            console.log(result.data);
            AsyncStorage.setItem('userType', result.data.type.toString());
        })
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


        const data ={
            userName:'홍길동',
            location:'전주',
            capacity:'500W',
            company:'Solar Company',
            panelType:'idk',
            panelCompany:'idk Company',
            sitePhoto:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204135949875.jpg',
            panelPhoto:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_202102041475113.jpg',
            desireDate:'2020-12-31',
            phone:'01012345678',
        };

        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>판매자 정보 변경</Text>
                    <Pressable onPress={()=>navigation.navigate('HomeScreen')} style={{position:"absolute", right:0, padding:10, marginRight:10}}>
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
                            <TextInput style={styles.textInput} placeholder='사업자명을 입력해주세요.' value={data.userName}></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>소재지</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='소재지를 입력해주세요.' value={data.location}></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>발전용량</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='발전용량을 입력해주세요.' value={data.capacity}></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>설치업체</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='설치업체를 입력해주세요.' value={data.company}></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널종류</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='패널종류를 입력해주세요.' value={data.panelType}></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널제조사</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='패널제조사를 입력해주세요.' value={data.panelCompany}></TextInput>
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
                                        src:data.sitePhoto,
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
                                        src:data.panelPhoto,
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
                            <TextInput style={styles.textInput} placeholder='연락처를 입력해주세요.' value={data.phone}></TextInput>
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
        fontSize:13,
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
    }
})