import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';

export default class ConsultDetailScreen extends Component{
    
    render(){
        let navigation=this.props.navigation;
        const consultInfo={
            id:navigation.getParam('userId'),
            name:navigation.getParam('userName'),
            time:navigation.getParam('time')
        };
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>상담 정보</Text>
                    <Pressable 
                        style={{position:'absolute', right:0, padding:5}}
                        onPress={()=>navigation.navigate({
                            routeName: 'ConsultAnswerScreen',
                            params:{
                                userId:consultInfo.id,
                                userName:consultInfo.name,
                                time:consultInfo.time
                            }
                        })}
                    >
                        <Text style={{color:'white', fontSize:12}}>답변하기</Text>
                    </Pressable>
                </Header>
                <View>
                    <Text>{consultInfo.id}</Text>
                    <Text>{consultInfo.name}</Text>
                    <Text>{consultInfo.time}</Text>
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