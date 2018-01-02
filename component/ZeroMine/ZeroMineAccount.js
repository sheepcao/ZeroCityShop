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
    View
} from 'react-native';

export default class ZeroMineAccount extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    我的账户
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: 200,
    },
    welcome: {
        textAlign: 'center',
        margin: 10,
    },
});


