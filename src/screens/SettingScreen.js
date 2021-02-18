import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';

export default class SettingScreen extends Component{
    
    render(){
        let navigation=this.props.navigation;
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>로그인</Text>
                </Header>

                {/* body */}
                <View style={{justifyContent:'space-around', height:'100%', width:'100%'}}>
                    {/* 안내 메세지 */}
                    <View style={{flex:1.5, justifyContent:'space-around'}}>
                        <View style={{ alignItems:'center'}}>
                            <Text style={{fontSize:20}}>로그인</Text>
                            <Text style={{fontSize:18, color:'gray', textAlign:'center'}}>솔라몬 서비스를 이용하기 위해 로그인을 해주세요</Text>
                        </View>
                    </View>

                    {/* ID, PW 입력칸 */}
                    <View style={{flex:1.3, justifyContent:'space-around'}}>
                        <View>
                            <TextInput style={{backgroundColor:'white', width:'90%', marginVertical:5, alignSelf:'center'}} placeholder={'아이디를 입력해주세요.'}/>
                            <TextInput style={{backgroundColor:'white', width:'90%', marginVertical:5, alignSelf:'center'}} placeholder={'비밀번호를 입력해주세요.'}/>
                        </View>
                    </View>

                    {/* 버튼 */}
                    <View style={{flex:1.2, alignContent:'center', justifyContent:'space-between', alignItems:'center'}}>
                        <Button style={{width:'95%', backgroundColor:'#005A96', alignSelf:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:15, color:'white'}}>로그인</Text>
                        </Button>
                        <Text>또는</Text>
                        <Button style={{width:'95%', backgroundColor:'#FFEB32', alignSelf:'center', justifyContent:'space-around'}}>
                            <Icon style={{color:'black', position:'absolute', left:5}} name='chatbubble'/>
                            <Text>카카오 로그인</Text>
                        </Button>
                        <Text>주의사항</Text>
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

})