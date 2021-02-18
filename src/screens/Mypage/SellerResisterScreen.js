import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { TextInput } from 'react-native-gesture-handler';
import DatePicker from '../../components/DatePicker'

export default class SellerResisterScreen extends Component{
    
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
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>판매자 정보 등록</Text>
                    <Pressable onPress={()=>navigation.goBack()} style={{position:"absolute", right:0, padding:10, marginRight:10}}>
                        <Text style={{color:'white'}}>등록</Text>
                    </Pressable>
                </Header>

                {/* body */}
                <Content showsVerticalScrollIndicator={false}>
                <View style={{borderBottomWidth:1, borderBottomColor:'lightgray', height:35}}>
                        <Text style={{textAlignVertical:'center', paddingLeft:15, fontSize:9, color:'#AAA', height:'100%'}}>패널 등록</Text>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>사업자명</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='사업자명을 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>소재지</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='소재지를 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>발전용량</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='발전용량을 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>설치업체</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='설치업체를 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널종류</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='패널종류를 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널제조사</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='패널제조사를 입력해주세요.'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>현장사진</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='현장사진을 선택해주세요'></TextInput>
                        </View>
                    </View>
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>패널사진</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='사진을 선택해주세요'></TextInput>
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
                    <View style={styles.contentItems}>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:9}}>연락처</Text>
                        </View>
                        <View style={{flex:10}}>
                            <TextInput style={styles.textInput} placeholder='연락처를 입력해주세요.'></TextInput>
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
    },
    textInput:{
        fontSize:9,
        backgroundColor:'#FFFFFF',
        marginRight:10,
        height:'70%',
    },
    itemContainer:{
        flexDirection:'row',
        marginVertical:2,

    },
    label:{
        fontSize:12,
        color:'gray',
        width:'20%',
        padding:5,
    },
    value:{
        fontSize:12,
        color:'black',
        backgroundColor:'white',
        width:'80%',
        padding:5,
    }
})