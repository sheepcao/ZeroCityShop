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

} from 'react-native';

export default class ZeroSales extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: '特卖',
        headerStyle: { backgroundColor: 'white' },
    })

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    购物车页面
                </Text>
            </View>
        );
    }
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


