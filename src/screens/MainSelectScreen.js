import React, {Component} from 'react';
import {Pressable, StyleSheet, View, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class MainSelectScreen extends Component{
    componentDidMount(){
        setTimeout(()=>{
            SplashScreen.hide();
        }, 500);
    }

    render(){
        let navigation=this.props.navigation;

        return(
            <View style={styles.bg}>
                <Pressable 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('SignInScreen')}
                >
                    <Text style={styles.label}>판매자</Text>
                </Pressable>
                <Pressable 
                    style={styles.btn}
                    onPress={()=>navigation.navigate('UserPanelListScreen')}
                >
                    <Text style={styles.label}>구매자</Text>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'#005A96',
        width:'100%',
        height:'100%',
        justifyContent:'center',
        flexDirection:'row',
    },
    btn:{
        backgroundColor:'blue',
        borderRadius:180,
        width:100,
        height:100,
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        marginHorizontal:30,
    },
    label:{
        color:'white',
    }
});