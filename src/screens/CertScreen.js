import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, ImageBackground} from 'react-native';
import { Container, Content, Footer,Header, Button, Icon } from "native-base";
import { TextInput } from 'react-native-gesture-handler';

export default class AddCertScreen extends Component{
    
    render(){
        let navigation=this.props.navigation;

        const certInfo={
            capacity:navigation.getParam('capacity'),
            id:navigation.getParam('userId'),
            product:navigation.getParam('product'),
            src:navigation.getParam('src'),
            company:navigation.getParam('company')
        };

        return(
            <Container style={{backgroundColor:'#68708A'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%', backgroundColor:'#68708A'}}>
                    <Pressable onPress={()=>navigation.goBack()} style={{margin:15}}>
                        <Icon name={'close'}/>
                    </Pressable>
                    <Pressable style={{margin:15, backgroundColor:'gray', borderRadius:5, justifyContent:'center'}}>
                        <Text style={{color:'white', padding:10}}>인증서 발급</Text>
                    </Pressable>
                </View>
                {/* body */}
                <Content >
                    <ImageBackground
                        style={{width:'100%', height:400,marginTop:50}}
                        source={{uri:certInfo.src}}
                    >
                    </ImageBackground>
                    <View style={{backgroundColor:'#68708A', justifyContent:'flex-start', margin:15}}>
                        <View style={{flexDirection:'row'}}>
                            <Text style={{color:'white'}}>{certInfo.capacity}W {certInfo.product}</Text>
                        </View>
                        <View>
                            <Text style={{color:'white'}}>{certInfo.company}</Text>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
})