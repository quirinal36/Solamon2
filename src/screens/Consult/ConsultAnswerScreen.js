import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Textarea } from "native-base";

export default class ConsultAnswerScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            newValue:'',
            height:150,
        }
    }

    updateSize=(height)=>{
        this.setState({
            height
        });
    }

    render(){
        let navigation=this.props.navigation;
        const consultInfo={
            id:navigation.getParam('userId'),
            name:navigation.getParam('userName'),
            time:navigation.getParam('time')
        };
        const {newValue, height} = this.state;

        let newStyle={
            backgroundColor:'white', 
            marginHorizontal:20, 
            marginVertical:20, 
            padding:10,
            height
        }
        

        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>상담 답변</Text>
                    <Pressable style={{position:'absolute', right:0, padding:5}} onPress={()=>navigation.navigate('ConsultListScreen')}>
                        <Text style={{color:'white', fontSize:12}}>등록</Text>
                    </Pressable>
                </Header>
                <Content style={{marginTop:30}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{flex:2, fontSize:13, marginLeft:20, marginVertical:10}}>상담자</Text>
                        <Text style={{flex:8, backgroundColor:'lightgray', padding:10, marginRight:20}}>{consultInfo.name}</Text>
                    </View>

                    <Text style={{fontSize:13, marginLeft:20, marginTop:30}}>상담 내용</Text>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>발전용량</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={{fontSize:9}} placeholder='발전용량을 입력해주세요.'>600W</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>설치업체</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={{fontSize:9}} placeholder='설치업체를 입력해주세요.'>(주)태양</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널종류</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={{fontSize:9}} placeholder='패널종류를 입력해주세요.'>단결정</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널제조사</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={{fontSize:9}} placeholder='패널제조사를 입력해주세요.'>SolarPanel</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널보관장소</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={{fontSize:9}} placeholder='보관장소의 구나 면까지 입력해주세요.'>서울시</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>판매희망가격</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text style={{fontSize:9}} placeholder='판매희망가격을 입력해주세요.'>300000</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>현장사진</Text>
                        </View>
                        <View style={{flex:10, flexDirection:'row'}}>
                            <Text style={{fontSize:9, textAlignVertical:'center'}} placeholder='현장사진을 선택해주세요'>screenshot_2021_01_24_102436</Text>
                            <Text style={{backgroundColor:'white', padding:5, borderRadius:5, marginLeft:40}}>보기</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널사진</Text>
                        </View>
                        <View style={{flex:10, flexDirection:'row'}}>
                            <Text style={{fontSize:9, textAlignVertical:'center'}} placeholder='현장사진을 선택해주세요'>screenshot_2021_01_24_122436</Text>
                            <Text style={{backgroundColor:'white', padding:5, borderRadius:5, marginLeft:40}}>보기</Text>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>철거희망년월</Text>
                        </View>
                        <View style={{flex:10}}>
                            <Text>2010-10-02</Text>
                        </View>
                    </View>

                    <Text style={{fontSize:13, marginLeft:20, marginTop:30}}>부연 설명</Text>
                        <Text style={{backgroundColor:'lightgray', marginHorizontal:20, marginVertical:20, minHeight:150, padding:10}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                        <Text style={{fontSize:13, marginLeft:20, marginTop:30}}>답변 내용</Text>
                        <Textarea
                            style={newStyle}
                            rowSpan={6} 
                            multiline
                            bordered 
                            onChangeText={(value)=>this.setState({value})}
                            
                            onContentSizeChange={(e)=>this.updateSize(e.nativeEvent.contentSize.height)}
                            value={this.state.text}
                            placeholder={'답변을 입력해주세요.'}/>
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
        paddingLeft:20, 
        borderColor:'lightgray', 
        borderBottomWidth:1,
    }
})