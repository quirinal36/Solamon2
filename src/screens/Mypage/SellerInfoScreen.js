import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Tabs, Tab } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from '../../components/DatePicker'
import SellerModifyScreen from './SellerModifyScreen'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../StaticVariable';

export default class SellerInfoScreen extends Component{
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
            return false;
        }
        return true;
    }

    _getUserData=async(token)=>{
        console.log(token);
        await axios.get(API_URL+"/users/info",
        {headers: {'Authorization': 'Bearer '+token,
            'Content-Type': 'application/json'}
        }).then((result)=>{
            this.setState({
                info:result.data
            });
            
            console.log(result.data);
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

        return(

            
            <Container style={{backgroundColor:'#F0F2FA'}}>
                {/* body */}
                <Content showsVerticalScrollIndicator={false}>
                
                <View style={{borderBottomWidth:1, borderBottomColor:'lightgray', height:35}}>
                        <Text style={{textAlignVertical:'center', paddingLeft:15, fontSize:9, color:'#AAA', height:'100%'}}>패널 등록</Text>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>ID</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{info.login}</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>사업자명</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{info.companyName}</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>소재지</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{info.companyAddress}</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>연락처</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={styles.item}>{info.phone}</Text>
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