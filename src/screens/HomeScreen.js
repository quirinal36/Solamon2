import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, ImageBackground} from 'react-native';
import { Container, Content, Footer,Header, Drawer, Left, Body, Right } from "native-base";
import { FlatList } from 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen'
import SideMenu from 'react-native-side-menu'
import SideBar from '../components/SideBar';
import { LogBox } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { API_URL } from './StaticVariable';
import { NavigationEvents } from 'react-navigation';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            test:1,
        };
    }

    componentDidMount(){
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']); //FlatList 사용 시 Warning 뜨는 문제 때문에 추가
        setTimeout(()=>{
            SplashScreen.hide();
        }, 500);
    }

    getToken = async () => {
        let t = '';
        try {
            t = await AsyncStorage.getItem('token') || '';
            setToken(t);
        } catch (error) {
            console.log('토큰을 가져오는데 실패하였습니다.');
            setToken('');
            return false;
        }
        return true;
    }

    _testHandler= async()=>{
        console.log('홈');
        await this._getUserType();
    }

    _getUserType= async()=>{
        let t2= await AsyncStorage.getItem('userType').then(()=>{
            this.setState=({
                test:t2,
            })
        });
    }

    
    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render(){
        let navigation=this.props.navigation;

        const tmpData = [
            {
                id: '1',
                product: '태양광 패널',
                company:'홍길동',
                src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204135949875.jpg',
                time: "2021-02-04 13:20",
              },
              {
                id: '2',
                product: '태양 전지판',
                company:'(주)모두태양',
                src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_202102041475113.jpg',
                time: '2021-02-04 08:20',
              },
              {
                id: '3',
                product: '300W 패널',
                company:'(주)전문태양',
                src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204135949854.jpg',
                time: '2021-02-03 20:20',
              },
              {
                id: '4',
                product: 'Solar Panel',
                company:'SolarTech',
                src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_2021020413595046.jpg',
                time: '2021-02-03 20:20',
              },
              {
                id: '5',
                product: '600W 전지판',
                company:'ASolar',
                src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_2021020414817490.jpg',
                time: '2021-02-03 20:20',
              },
              {
                id: '6',
                product: 'Lorem ipsum',
                company:'BTech',
                src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_2021020413595044.jpg',
                time: '2021-02-03 20:20',
              },
              {
                id: '7',
                product: 'seven item',
                company:'seven company',
                src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204135950334.jpg',
                time: '2021-02-03 20:20',
              },
              {
                id: '8',
                product: 'eight Item',
                company:'8th company',
                src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204135950310.jpg',
                time: '2021-02-03 20:20',
              },
              {
                id: '9',
                product: 'nine Item',
                company:'9th company',
                src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_2021020414817492.jpg',
                time: '2021-02-03 20:20',
              },
        ];

        const renderItem = (item) =>{
            return (
                <Pressable 
                    onPress={()=>navigation.navigate({
                        routeName: 'AddCertScreen',
                        params:{
                            id:item.id,
                            product:item.product,
                            src:item.src,
                            company:item.company,
                        }
                    })}
                    style={{backgroundColor:'white', width:'100%', maxWidth:'45%', margin:8, minHeight:200, height:'30%', alignSelf:'center'}}>
                    <ImageBackground
                        style={{width:'100%', height:150}}
                        source={{uri:item.src}}
                        resizeMode={'cover'}
                    ></ImageBackground>
                    <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                        <Icon style={{backgroundColor:'lightgray', borderRadius:180, padding:5, marginLeft:5}} name={'person'} size={25}/>
                        <View style={{marginLeft:5, padding:5, alignSelf:'flex-start'}}>
                            <Text>{item.product}</Text>
                            <Text style={{fontSize:12, color:'gray', height:'100%'}}>by {item.company}</Text>
                        </View>
                    </View>
                </Pressable>
            )
        }


        return(
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigation={navigation} uType={this.state.test}/>}
                onClose={() => this.closeDrawer()}
            >
                <Header style={styles.header}>
                    <Pressable onPress={()=>this.openDrawer()}>
                        <Icon style={{color:'white'}} name={'menu'} size={20}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>태양광패널</Text>
                    <Text></Text>
                </Header>
                <Content>
                    <View style={{width:'100%', justifyContent:'center'}}>
                        <FlatList
                            data={tmpData}
                            keyExtractor={(tmpData)=>tmpData.id}
                            numColumns={2}
                            renderItem={({item})=>renderItem(item)}
                        ></FlatList>
                    </View>
                </Content>
                
                <NavigationEvents onWillFocus={()=>this._testHandler()}/>
            </Drawer>
        );
    }
}

class TESTT extends Component{

    

    render(){
        let navigation=this.props.navigation;
        const menu = <SideBar uType={this.state.test} navigation={navigation}/>;

        return (
            <SideMenu
                menu={menu}
            >
                <ContentView navigation={navigation}/>
            </SideMenu>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
        justifyContent:'space-between',
    },

})