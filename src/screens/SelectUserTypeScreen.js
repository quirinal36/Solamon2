import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';

export default class SelectUserTypeScreen extends Component{
    
    render(){
        let navigation=this.props.navigation;

        return(
            <Container style={{backgroundColor:'blue'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>사용자 유형을 선택해주세요.</Text>
                </Header>

                <View style={{justifyContent:'center', height:'100%', width:'100%'}}>
                    <View style={{justifyContent:'space-around', flexDirection:'row', borderWidth:1}}>
                        <Pressable onPress={()=>{isBuyer=0}}>
                            <Icon style={{color:'white'}} name='document'/>
                            <Text style={{fontSize:10, color:'white'}}>판매자</Text>
                            <Text style={{fontSize:10, color:'white'}}>제품을 등록하고 판매합니다.</Text>
                        </Pressable>
                        <Pressable onPress={()=>{isBuyer=1}}>
                            <Icon style={{color:'white'}} name='document'/>
                            <Text style={{fontSize:10, color:'white'}}>구매자</Text>
                            <Text style={{fontSize:10, color:'white'}}>제품을 구매하고 싶습니다.</Text>
                        </Pressable>
                    </View>
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