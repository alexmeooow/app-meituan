
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

var TopMiddle = React.createClass({
    render:function () {
        return (
            <View style={styles.container}>
                <View style={styles.leftViewStyle}>
                    <Text style={{fontSize:26,fontWeight:"bold"}}>{this.props.data.title}</Text>
                    <Text>{this.props.data.subTitle}</Text>
                </View>
                <View style={styles.rightViewStyle}>
                    <Image  style={styles.iconStyle} source={{uri:(this.props.data.image?this.props.data.image:this.props.data.hotImage)}}/>
                </View>
            </View>
        );
    }
});

var {width} = require("Dimensions").get("window");

var styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:width,
        backgroundColor:"#fff",
        marginTop:1
    },
    iconStyle:{
        width:70,
        height:50
    },
    leftViewStyle:{
        marginLeft:30
    },
    rightViewStyle:{
        marginRight:30
    }
});


module.exports = TopMiddle;
