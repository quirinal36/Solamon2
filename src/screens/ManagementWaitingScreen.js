import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image} from 'react-native';
import { Container,  Icon } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';
import { API_URL } from './StaticVariable';

export default class ManagementWaitingScreen extends Component{
   
    constructor(props){
        super(props);
        this.state={
            info:''
        };
    }

    componentDidMount(){
        this.getToken();
    }

    getToken = async () => {
        try {
            await this._getUserData();
        } catch (error) {
            console.log('데이터를 가져오는데 실패하였습니다.');
            return false;
        }
        return true;
    }

    _getUserData=async()=>{
        await axios.get(API_URL+"/panel/certOrderList").then((result)=>{
            this.setState({
                info:result.data
            });
        })
    }


    render(){
        const tmpData = [
            {
              id: '1',
              title: '5W 18V 태양전지판',
              company: '(주)케이테크',
              time: '5분전',
              src: 'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204145354893.jpg'
            },
            {
              id: '2',
              title: '300W 태양전지판',
              company: '(주)다원',
              time: '1시간전',
              src: 'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204145354903.jpg'
            },
            {
              id: '3',
              title: '180W 태양전지판',
              company: '(주)전문태양',
              time: '2020-12-15',
              src: 'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204145354900.jpg'
            },
            {
              id: '4',
              title: '350W 태양전지판',
              company: '(주)모두태양',
              time: '2020-12-10',
              src: 'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_2021020414535553.jpg'
            },
        ];

        let navigation=this.props.navigation;
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <View>
                    <FlatList
                        data={this.state.info}
                        keyExtractor={(item)=>String(item.panelId)}
                        showsVerticalScrollIndicator={false}
                        numColumns={1}
                        renderItem={({item})=>(
                            <View style={{backgroundColor:'white', margin:1,height:100, flexDirection:'row', justifyContent:'space-between'}}>
                                <View style={{flex:0.2}}></View>
                                <Pressable style={{flex:1.2, alignSelf:'center'}}>
                                    <Icon name='person'/>
                                </Pressable>
                                <Pressable 
                                    onPress={()=>navigation.navigate({
                                        routeName: 'CertScreen',
                                        params:{
                                            capacity:item.generationCapacity,
                                            id:item.panelId,
                                            product:item.type,
                                            company:item.company,
                                            src:item.fieldImageUrl,
                                        }
                                    })}
                                    style={{flex:10, marginLeft:20,justifyContent:'center'}}>
                                    <Text style={{fontSize:12}}>{item.generationCapacity}W {item.type}</Text>
                                    <Text style={{fontSize:9, color:'gray'}}>{item.company}</Text>
                                    <Text style={{fontSize:9, color:'gray'}}>{item.regDt}</Text>
                                </Pressable>
                                <Image
                                    style={{flex:3,alignSelf:'center', width:80, height:80, padding:5}}
                                    source={{uri:item.fieldImageUrl}}
                                    resizeMode={'cover'}
                                >

                                </Image>
                            </View>
                        )}
                    >

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