import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, ImageBackground} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../StaticVariable';
import { FlatList } from 'react-native-gesture-handler';

export default class SellerPanelListScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            info:''
        };
    }

    componentDidMount(){
        this.getToken();
    }

    getToken = async () => {
        let t = '';
        try {
            t = await AsyncStorage.getItem('token') || '';
            await this._getUserData(t);
        } catch (error) {
            console.log('토큰을 가져오는데 실패하였습니다.');
            console.log(JSON.stringify(error));
            return false;
        }
        return true;
    }

    _getUserData=async(token)=>{
        console.log(token);
        await axios.get(API_URL+"/panel/personal/panelList",
        {headers: {'Authorization': 'Bearer '+token,
            'Content-Type': 'application/json'}
        }).then((result)=>{
            this.setState({
                info:result.data
            });
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

        const info=this.state.info;
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

        const goPanelDetailScreen=(id)=>{
            AsyncStorage.setItem('detailPanelId', id);
            navigation.navigate('SellerPanelDetailScren');
            console.log('?');
        }

        return(

            
            <Container style={{backgroundColor:'#F0F2FA'}}>
                {/* body */}
                <Content showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={info}
                        
                        keyExtractor={(item)=>String(item.panelId)}/* 문자열로 바꾸지 않으면 Warning 발생 */
                        renderItem={({item})=>
                            <Pressable 
                                style={{marginTop:2, backgroundColor:'white', height:50, flexDirection:'row', alignItems:'center'}}
                                onPress={()=>navigation.navigate({
                                    routeName:'SellerPanelDetailScreen',
                                    params:{
                                        id:item.panelId
                                    }
                                })}
                            >
                                <ImageBackground
                                style={{width:40, height:40, marginHorizontal:10}}
                                resizeMode={'cover'}
                                source={{uri:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_202102041475113.jpg'}}
                                />
                                <Text style={{marginHorizontal:10}}>{item.type} {item.generationCapacity}W</Text>
                            </Pressable>
                        }
                    >

                    </FlatList>
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
    item:{
        fontSize:14,
        textAlignVertical:'center',
        marginRight:10,
        paddingLeft:10,
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