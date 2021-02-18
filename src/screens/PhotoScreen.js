import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, ImageBackground} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Body } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from '../components/DatePicker'

export default class PhotoScreen extends Component{

    render(){
        let navigation=this.props.navigation;
        let src=navigation.getParam('src');
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
            <Container>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>사진</Text>
                    <Pressable onPress={()=>navigation.goBack()} style={{position:"absolute", right:0, padding:10, marginRight:10}}>
                        
                    </Pressable>
                </Header>
                <Content style={{alignContent:'center'}}>
                    <ImageBackground
                        style={{flex:1, width:'100%', height:500, justifyContent:'center', alignSelf:'center', marginHorizontal:20}}
                        resizeMode={'contain'}
                        source={{uri:(src)}}
                    ></ImageBackground>
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },
})