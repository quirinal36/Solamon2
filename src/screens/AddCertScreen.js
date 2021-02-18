import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image} from 'react-native';
import { Container,  Icon } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { API_URL } from './StaticVariable';

export default class ManagementWaitingScreen extends Component{
   
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
        try {
            await this._getUserData();
        } catch (error) {
            console.log('데이터를 가져오는데 실패하였습니다.');
            return false;
        }
        return true;
    }

    _getUserData=async()=>{
        await axios.get(API_URL+"/panel/certOrderList").then((result)=>{
            this.setState({
                info:result.data
            });
        })
    }

    /*
    	private Integer userId; // 소유자 - 토큰
	private Integer panelId;
	private String consultDt; // 상담일
	private String paymentYn; // 결제여부
	private String paymentDt; // 결제일
	private String certificationImage; //인증서
	private String certificationImageUrl; //인증서 URL
	private String certificationDt;	// 인증서 발급일
	private String tradingYn;	// 매매여부
	private String regDt; // 등록일자
	private String modDt; // 수정일자
     */

    render(){
        let navigation=this.props.navigation;
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <View>
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
})