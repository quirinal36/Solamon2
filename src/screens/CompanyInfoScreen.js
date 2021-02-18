import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';

export default class CompanyInfoScreen extends Component{
   
    render(){
        let navigation=this.props.navigation;
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>회사 정보 입력</Text>
                    <Pressable style={{position:'absolute', right:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Text style={{color:'white'}}>완료</Text>
                    </Pressable>
                </Header>

                {/* body */}
                <Content style={{height:'100%'}}>
                    <View style={styles.listLeft}>
                        <Text style={{fontSize:10, width:70}}>회사명</Text>
                        <TextInput style={{backgroundColor:'white', flex:1}} placeholder='회사명을 입력해주세요.'></TextInput>
                    </View>
                    <View style={styles.listLeft}>
                        <Text style={{fontSize:10, width:70}}>사업자 번호</Text>
                        <TextInput style={{marginRight:10, backgroundColor:'white', flex:1}} placeholder=''></TextInput>
                        <TextInput style={{marginHorizontal:10, backgroundColor:'white', flex:1}} placeholder=''></TextInput>
                        <TextInput style={{marginLeft:10, backgroundColor:'white', flex:1}} placeholder=''></TextInput>
                    </View>
                    <View style={styles.listLeft}>
                        <Text style={{fontSize:10, width:70}}>법인사업자</Text>
                        <TextInput style={{backgroundColor:'white', flex:1}} placeholder=''></TextInput>
                    </View>
                    <View style={styles.listLeft}>
                        <Text style={{fontSize:10, width:70}}>법인번호</Text>
                        <TextInput style={{marginRight:10, backgroundColor:'white', flex:1}} placeholder=''></TextInput>
                        <TextInput style={{marginLeft:10, backgroundColor:'white', flex:1}} placeholder=''></TextInput>
                    </View>
                    <View style={styles.listLeft}>
                        <Text style={{fontSize:10, width:70}}>대표명</Text>
                        <TextInput style={{backgroundColor:'white', flex:1}} placeholder='대표명을 입력해주세요.'></TextInput>
                    </View>
                    <View style={styles.listLeft}>
                        <Text style={{fontSize:10, width:70}}>대표자 주민등록번호</Text>
                        <TextInput style={{marginRight:10, backgroundColor:'white', flex:1}} placeholder=''></TextInput>
                        <TextInput style={{marginLeft:10, backgroundColor:'white', flex:1}} placeholder=''></TextInput>
                    </View>
                    <View style={styles.listLeft}>
                        <Text style={{fontSize:10, width:70}}>회사주소</Text>
                        <View style={{flexDirection:'row'}}>
                            <TextInput style={{backgroundColor:'white', width:'50%', marginRight:20}} placeholder='우편번호'></TextInput>
                            <Button style={{flex:0.4, justifyContent:'center', backgroundColor:'lightblue'}}><Text>검색</Text></Button>
                        </View>
                    </View>
                    <View style={styles.listLeft}>
                        <Text style={{fontSize:10, width:70}}></Text>
                        <TextInput style={{backgroundColor:'white', flex:1}} placeholder='회사 주소'></TextInput>
                    </View>
                    <View style={styles.listLeft}>
                        <Text style={{fontSize:10, width:70}}></Text>
                        <TextInput style={{backgroundColor:'white', flex:1}} placeholder='회사 상세 주소'></TextInput>
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
    listLeft:{
        flexDirection:'row', 
        margin:10, 
        alignItems:'center'
    }
})