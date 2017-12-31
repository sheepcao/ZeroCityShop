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
    ListView,
    Image,
    Dimensions

} from 'react-native';

const {width} = Dimensions.get('window');
export default class ZeroMine extends Component {

    constructor(props){
        super(props);
        this.state={
            //cell的数据
            dataSource:new ListView.DataSource({
                rowHasChanged:(r1,r2) => r1!==r2
            })
        }
    }


    render() {
        return (
            <ListView     //创建ListView
                dataSource={this.state.dataSource} //设置数据源
                renderRow={this.renderRow} //设置cell
                contentContainerStyle={styles.listViewStyle}//设置cell的
            />
        );
    }

    renderRow(rowData,sectionID,rowID,highlightRow){
        return(
            <View style={styles.bgStyle}>
                <Image style={styles.imageStyle}/>
                <Text style={{fontSize:20,marginBottom:0}}>
                    {rowData.price}
                </Text>
            </View>
        );

    }

    //发送网络请求
    componentDidMount(){

    }
    componentWillMount(){
        //加载本地数据
        this.getRows();
    }
    //制作假数据
    getRows(){
        var Arr = [];
        for(var i = 0; i<20; i++){
            Arr.push({
                    image: '111',
                    price:'222'
                })
        }
        //更新数据
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(Arr)
        })
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
    listViewStyle:{
        flexDirection:'row', //设置横向布局
        flexWrap:'wrap'    //设置换行显示
    },
    bgStyle:{
        backgroundColor:'orange',
        width:(width-30)/2, //cell的宽度
        height:250,
        marginLeft:10,
        marginTop:10
    },
    imageStyle:{
        width:(width-30)/2,
        height:230,
        backgroundColor:'red',
        marginBottom:0,
    }
});


