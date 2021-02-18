import React, { Component } from 'react';
import {Text,View} from 'react-native';
import { Drawer, Header,Left,Button,Icon,Right,Body,Title } from 'native-base';
import SideBar from '../components/SideBar';

export default class NativeBaseDrawer extends Component {

    closeDrawer = () => {
        this.drawer._root.close()
    };
    openDrawer = () => {
        this.drawer._root.open()
    };

    render() {

        return (
                <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<SideBar/>}
                onClose={() => this.closeDrawer()} >

                <Header>
                    <Left>
                    <Button transparent
                            onPress={()=>this.openDrawer()}
                    >
                        <Icon name='menu' />
                    </Button>
                    </Left>
                    <Body>
                        <Title>SDCC Wallet</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Icon name='bulb' />
                        </Button>
                    </Right>
                    </Header>
                    <View>
                        <Text>
                            바디
                        </Text>
                    </View>
                </Drawer>
        );
    }
}