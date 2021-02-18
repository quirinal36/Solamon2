import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Textarea } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from '../../components/DatePicker'

export default class ConsultAddScreen extends Component{
    
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

        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>상담 등록</Text>
                    <Pressable style={{position:'absolute', right:0, padding:5}} onPress={()=>navigation.navigate('ConsultListScreen')}>
                        <Text style={{color:'white', fontSize:15, paddingRight:10}}>등록</Text>
                    </Pressable>
                </Header>

                {/* body */}
                <Content showsVerticalScrollIndicator={false}>
                    <View style={{borderBottomWidth:1, borderBottomColor:'lightgray', height:35}}>
                        <Text style={{textAlignVertical:'center', paddingLeft:15, fontSize:9, color:'#AAA', height:'100%'}}>패널 등록</Text>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>발전용량</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={{fontSize:9}} placeholder='발전용량을 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>설치업체</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={{fontSize:9}} placeholder='설치업체를 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널종류</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={{fontSize:9}} placeholder='패널종류를 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널제조사</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={{fontSize:9}} placeholder='패널제조사를 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널보관장소</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={{fontSize:9}} placeholder='보관장소의 구나 면까지 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>판매희망가격</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={{fontSize:9}} placeholder='판매희망가격을 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>현장사진</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={{fontSize:9}} placeholder='현장사진을 선택해주세요'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널사진</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={{fontSize:9}} placeholder='사진을 선택해주세요'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <Pressable onPress={showDatePicker()} style={{flex:4}}>
                            <Text style={{fontSize:9}}>철거희망년월</Text>
                        </Pressable>
                        <View style={{flex:10}}>
                            <DatePicker
                            ></DatePicker>
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
    }
})