import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Tabs, Tab, TabHeading } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from '../../components/DatePicker'
import SellerModifyScreen from './SellerModifyScreen'
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../StaticVariable';
import SellerInfoScreen from './SellerInfoScreen';
import SellerPanelListScreen from './SellerPanelListScreen';

export default class SellerScreen extends Component{

    render(){
        let navigation=this.props.navigation;

        return(

            
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header} hasTabs>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>판매자 정보</Text>
                    <Pressable onPress={()=>navigation.navigate('SellerModifyScreen')} style={{position:"absolute", right:0, padding:10, marginRight:10}}>
                        <Text style={{color:'white'}}>수정</Text>
                    </Pressable>
                    
                </Header>
                <Tabs 
                    style={{backgroundColor:'#005A96'}}
                    scrollWithoutAnimation
                    locked
                >
                    <Tab style={{backgroundColor:'#005A96'}} heading={<TabHeading style={{backgroundColor:'#000'}}><Text style={{color:'white'}}>Tab1</Text></TabHeading>}>
                        <SellerInfoScreen navigation={navigation}/>
                    </Tab>
                    <Tab heading={<TabHeading style={{backgroundColor:'#000'}}><Text style={{color:'white'}}>Tab2</Text></TabHeading>}>
                        <SellerPanelListScreen navigation={navigation}/>
                    </Tab>
                </Tabs>
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