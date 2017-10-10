import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    ListView,
    Button
} from 'react-native';

var UserInfoCommon = React.createClass({
    render:function () {
        return (
            <View style={[
                styles.container,{
                    marginTop:this.props.data.margin?this.props.data.margin:1,
                    marginBottom:this.props.data.margin?this.props.data.margin:0
                }
            ]}>
                <View style={styles.leftRightView}>
                    <Image
                        style={styles.iconStyle}
                        source={{uri:this.props.data.imgSrc}}/>
                    <Text style={styles.nameStyle}>{this.props.data.name}</Text>
                </View>
                <View style={styles.leftRightView}>
                    <Text style={styles.detailStyle}>{this.props.data.detail}</Text>
                    <Text></Text>
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding:10,
        justifyContent:"space-between",
        alignItems:"center",

        backgroundColor:"#fff"
    },
    leftRightView:{
        flexDirection:"row",
        alignItems:"center"
    },
    iconStyle:{
        width:20,
        height:20,
        marginRight:10
    },
    nameStyle:{
        fontWeight:"bold"
    },
    detailStyle:{
        fontSize:12,
        marginRight:3
    }
});

module.exports = UserInfoCommon;
