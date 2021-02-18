import React, {Component} from 'react';
import {Text,StyleSheet, Pressable, View, ImageBackground } from 'react-native';
import { Container, Content, Icon, Footer,Header, Button, Drawer } from "native-base";
import { FlatList,ScrollView,TextInput } from 'react-native-gesture-handler';  
import SideMenu from 'react-native-side-menu'
import SideBar from '../components/SideBar';

export default class UserPanelListScreen extends Component{
   
    constructor(props){
        super(props);
        this.state={
            test:1,
        };
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
              title: '태양광 패널',
              src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204135949875.jpg',
              time: "2021-02-04 13:20",
            },
            {
              id: '2',
              title: '태양 전지판',
              src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_202102041475113.jpg',
              time: '2021-02-04 08:20',
            },
            {
              id: '3',
              title: 'KTech',
              src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204135949854.jpg',
              time: '2021-02-03 20:20',
            },
            {
              id: '4',
              title: 'Solar Panel',
              src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_2021020413595046.jpg',
              time: '2021-02-03 20:20',
            },
            {
              id: '5',
              title: '(주)태양광',
              src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_2021020414817490.jpg',
              time: '2021-02-03 20:20',
            },
            {
              id: '6',
              title: 'Lorem ipsum',
              src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_2021020413595044.jpg',
              time: '2021-02-03 20:20',
            },
            {
              id: '7',
              title: 'seven it',
              src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204135950334.jpg',
              time: '2021-02-03 20:20',
            },
            {
              id: '8',
              title: 'eit Item',
              src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_20210204135950310.jpg',
              time: '2021-02-03 20:20',
            },
            {
              id: '9',
              title: 'nin Item',
              src:'https://ieilms.jbnu.ac.kr/data/69825/image/ori_p_2021020414817492.jpg',
              time: '2021-02-03 20:20',
            },
        ];
        return(
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar navigation={navigation} uType={this.state.test}/>}
                onClose={() => this.closeDrawer()}
            >
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.navigate('HomeScreen')}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>조회하기</Text>
                </Header>

                {/* body */}
                <Content
                    stickyHeaderIndices={[0]}
                >
                    {/* 검색창 */}
                    <View>
                    <View style={{flexDirection:'row', backgroundColor:'lightgray', padding:10, height:60}}>
                        <TextInput style={{backgroundColor:'white', borderWidth:2, marginRight:10, flex:9, borderRadius:10, padding:5}} placeholder={'검색어를 입력해주세요.'}></TextInput>
                        <Pressable style={{backgroundColor:'#FFF', borderWidth:2, flex:1, borderRadius:10}}>
                            <Text style={{textAlignVertical:'center', textAlign:'center', flex:1}}>검색</Text>
                        </Pressable>
                    </View>
                    </View>
<Pressable style={{position:'absolute', width:100, height:100, borderWidth:4, alignSelf:'flex-end', zIndex:1}} onPress={()=>this.openDrawer()}>
                        <Icon name={'menu'} size={20}></Icon>
                    </Pressable>
                    <FlatList
                        data={tmpData}
                        keyExtractor={(item)=>item.id}
                        showsVerticalScrollIndicator={false}
                        numColumns={1}
                        renderItem={({item})=>(
                            <View style={{backgroundColor:'white', margin:10}}>
                                
                                <ImageBackground
                                    style={{width:'100%', height:300}}
                                    source={{uri:item.src}}
                                    resizeMode={'cover'}
                                >
                                    <Pressable style={{position:"absolute", left:0, backgroundColor:'gray', borderRadius:180, margin:15, padding:5}}>
                                        <Icon name='person'/>
                                    </Pressable>
                                    <Pressable style={{position:'absolute', right:0, padding:15}}>
                                        <Icon style={{color:'white'}} name='ellipsis-horizontal'/>
                                    </Pressable>
                                </ImageBackground>
                                
                                <View style={{backgroundColor:'white', height:80, padding:10, flexDirection:'row', justifyContent:'space-between'}}>
                                    <View style={{justifyContent:'center'}}>
                                        <Text style={{fontSize:14}}>{item.title}</Text>
                                        <Text style={{fontSize:10, color:'gray'}}>{item.time}</Text>
                                    </View>
                                    <View style={{justifyContent:'center'}}>
                                        <Button
                                            onPress={()=>navigation.navigate({
                                                routeName: 'AddCertScreen',
                                                params:{
                                                    id:item.id,
                                                    product:item.title,
                                                    src:item.src,
                                                    company:item.time,
                                                }
                                            })}
                                            style={{backgroundColor:'#005A96', padding:10, height:30}}>
                                            <Text style={{fontSize:8, color:'white'}}>인증서보기</Text>
                                        </Button>
                                    </View>
                                </View>
                            </View>
                        )}
                    >

                    </FlatList>
                </Content>
            </Container>
            </Drawer>
        );
    }
}

class ContentView extends Component{
    render(){
        let navigation=this.props.navigation;
        const menu = <SideBar navigation={navigation}/>;

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
    },

})