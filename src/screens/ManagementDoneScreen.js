import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, Image} from 'react-native';
import { Container,  Icon } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { API_URL } from './StaticVariable';

export default class ManagementDoneScreen extends Component{
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
        let t = '';
        try {
            t = await AsyncStorage.getItem('token') || '';
            await this._getUserData(t);
        } catch (error) {
            console.log('토큰을 가져오는데 실패하였습니다.');
            return false;
        }
        return true;
    }

    _getUserData=async(token)=>{
        await axios.get(API_URL+"/panel/panelList").then((result)=>{
            this.setState({
                info:result.data
            });
        })
    }



    render(){
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
                                <View style={{flex:10, marginLeft:20,justifyContent:'center'}}>
                                    <Text style={{fontSize:12}}>{item.generationCapacity}W {item.type}</Text>
                                    <Text style={{fontSize:9, color:'gray'}}>{item.company}</Text>
                                    <Text style={{fontSize:9, color:'gray'}}>{item.regDt}</Text>
                                </View>
                                <Image
                                    style={{flex:3,alignSelf:'center', width:80, height:80, padding:5}}
                                    source={{uri:item.certificationImageUrl}}
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