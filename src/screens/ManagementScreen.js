import React, {Component} from 'react';
import {Text,StyleSheet, Pressable} from 'react-native';
import { Container, Icon,Header, Tabs, Tab, TabHeading } from "native-base";
import ManagementWaitingScreen from './ManagementWaitingScreen';
import ManagementDoneScreen from './ManagementDoneScreen';

export default class ManagementScreen extends Component{
   
    render(){
        let navigation=this.props.navigation;
        return(
            <Container style={{backgroundColor:'#F0F2FA'}}>
                <Header style={styles.header}>
                    <Pressable style={{position:'absolute', left:5}} onPress={()=>navigation.goBack()}>
                        <Icon style={{color:'white'}} name={'chevron-back'}/>
                    </Pressable>
                    <Text style={{fontSize:15, color:'white', textAlignVertical:'center'}}>인증현황</Text>
                </Header>

                {/* body */}
                <Tabs
                    style={{backgroundColor:'#005A96'}}
                    tabBarUnderlineStyle={{backgroundColor:'black'}}
                    
                    locked
                >
                    {/* 인증대기 탭 */}
                    <Tab 
                        style={{backgroundColor:'#005A96'}} 
                        heading={
                            <TabHeading style={{backgroundColor:'#FFF'}}>
                                <Text style={{color:'gray'}}>인증 대기</Text>
                            </TabHeading>
                        }
                    >
                        <ManagementWaitingScreen navigation={navigation}/>
                    </Tab>
                    {/* 인증완료 탭 */}
                    <Tab 
                        heading={
                            <TabHeading style={{backgroundColor:'#FFF'}}>
                                <Text style={{color:'gray'}}>인증 완료</Text>
                                </TabHeading>
                        }
                    >
                        <ManagementDoneScreen navigation={navigation}/>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#005A96',
        alignItems:'center',
    },

})