/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    AlertIOS,
    ListView,
    Image,
    TouchableOpacity,
    Dimensions,

} from 'react-native';




import ZeroBanner from './ZeroBanner'
import ZeroConfig from '../ZeroTool/ZeroConfig';
export default class ZeroHome extends Component {


    constructor(props){
        super(props);
        this.pushViewController= this.pushViewController.bind(this);
        // this.state={
        //     base_Url:'https://portal-web.cjwsc.com/home/topBanner.action'
        // }

    }




    render() {
        return (
           <View style={styles.container}>
               <Text style={styles.welcome}
                     onPress = {this.pushViewController}
               >
                   首页
               </Text>
           </View>
        );
    }




    /*
     <Text style={styles.welcome}
     onPress = {this.pushViewController}
     >
     首页
     </Text>
     */

    pushViewController(){
        let params =  {
                title:'第一个试图',
                user:"豆芽菜",
                day:'20170-12-21',
                week:'thursday'
        }
        this.props.navigation.navigate('ZeroBanner',{params:params})
    }

}



//调用点击事件
const pushViewController = ()=>{
   //AlertIOS.alert('哈哈哈');
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});


