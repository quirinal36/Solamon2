import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View} from 'react-native';
import { Container, Content, Icon, Footer,Header, Button } from "native-base";
import { FlatList, TextInput } from 'react-native-gesture-handler';

export default class ConsultListScreen extends Component{
    
    render(){
        const consultList = [
            {
              id: '1',
              name: "홍길동",
              time: "2021-02-04T13:20:00",
            },
            {
              id: '2',
              name: '(주)케이테크',
              time: '2021-02-04T08:20:00',
            },
            {
              id: '3',
              name: 'Solar Corporation',
              time: '2021-02-03T20:20:00',
            },
            {
              id: '4',
              name: 'Lorem ipsum',
              time: '2021-02-03T08:20:00',
            },
            {
              id: '5',
              name: 'dolor sit amet',
              time: '2021-01-29T10:20:00',
            },
            {
              id: '6',
              name: 'consectetur',
              time: '2020-12-04T10:20:00',
            },
            {
              id: '7',
              name: 'adipisicing',
              time: '2019-02-04T10:20:00',
            },
            {
              id: '8',
              name: 'elit',
              time: '2017-02-04T10:20:00',
            },
            {
              id: '9',
              name: 'eiusmod',
              time: '2013-02-04T10:20:00',
            },
            {
              id: '10',
              name: 'incididunt',
              time: '2012-02-04T10:20:00',
            },
            {
              id: '11',
              name: 'labore',
              time: '2011-02-04T10:20:00',
            },
            {
              id: '12',
              name: 'dolore',
              time: '2010-02-04T10:20:00',
            },
            {
              id: '13',
              name: 'magnaaliquaUtenimadminim',
              time: '2009-02-04T10:20:00',
            },
        ];

        const renderItem = (item) =>{
            let p_time=new Date();
            p_time.setHours(p_time.getHours()+10);
            const itemTime=new Date(item.time);
            let timeStr='';
            
            p_time-=itemTime;
            p_time/=1000;

            if(p_time>=31536000){       //년
                timeStr+=Math.floor(p_time/31536000)+'년 ';
            }
            else if(p_time>=2592000){    //달
                timeStr+=Math.floor(p_time/2592000)+'개월 ';
            }
            else if(p_time>=86400){     //일
                timeStr+=Math.floor(p_time/86400)+'일 ';
            }
            else if(p_time>=3600){      //시
                timeStr+=Math.floor(p_time/3600)+'시간 ';
            }
            else if(p_time>=60){        //분
                timeStr+=Math.floor(p_time/60)+'분 ';
            }else if(p_time>=0){         //초
                timeStr+=Math.floor(p_time%60)+'초 ';
            }
            if(p_time<0)
                timeStr+=Math.floor(p_time*-1)+'초 후';
            else
                timeStr+='전';
            return (
                <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'white', paddingVertical:5, marginVertical:2}}>
                    <View style={{paddingLeft:10}}>
                        <Text style={{color:'black', fontSize:12}}>{item.name}</Text>
                        <Text style={{color:'gray', fontSize:8}}>{timeStr}</Text>
                    </View>
                    <Pressable 
                        style={{backgroundColor:'#0078FF', justifyContent:'center', borderRadius:5, padding:5, marginRight:8}}
                        onPress={()=>navigation.navigate({
                            routeName: 'ConsultDetailScreen',
                            params:{
                                userId:item.id,
                                userName:item.name,
                                time:item.time
                            }
                        })
                        }
                    >
                        <Text>자세히</Text>
                    </Pressable>
                </View>
            )
        }

        let navigation=this.props.navigation;
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>상담 목록</Text>
                    <Pressable style={{position:'absolute', right:5}} onPress={()=>navigation.navigate('ConsultAddScreen')}>
                        <Icon style={{color:'white'}} name={'add'}></Icon>
                    </Pressable>
                </Header>

                {/* body */}
                <View style={{justifyContent:'space-around', height:'100%', width:'100%'}}>
                    <FlatList
                        data={consultList}
                        keyExtractor={(item)=>item.id}
                        numColumns={1}
                        ListFooterComponentStyle={{justifyContent:'flex-end'}}  
                        ListFooterComponent={<Footer style={{ backgroundColor:'#F0F2FA'}}/>}
                        renderItem={({item})=>renderItem(item)}
                    >
                    {/* ListFooterComponent 없으면 마지막 데이터 잘리는 문제 생김 */}
                    </FlatList>
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