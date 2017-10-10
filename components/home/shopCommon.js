import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

//获取屏幕宽度
var {width} = require("Dimensions").get("window");

var ShopCommon = React.createClass({
    render:function () {
        return(
            <View style={styles.container}>
                <View style={styles.leftViewStyle}>
                    <Text style={{color:this.props.data.titleColor
                        ?this.props.data.titleColor
                        :"gray",fontSize:20,fontWeight:"bold"}}>{this.props.data.title}</Text>
                    <Text>{this.props.data.subTitle}</Text>
                </View>
                <View>
                    <Image
                        style={styles.iconStyle}
                        source={{uri:this.props.data.rightImage
                            ?this.props.data.rightImage
                            :this.props.data.hotImage}}/>
                </View>
            </View>
        )
    }
});

var {width} = require("Dimensions").get("window");

var styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        padding:10,
        paddingLeft:20,
        paddingRight:20,
        marginRight:1,
        backgroundColor:"#fff",
        width:width/2-2
    },
    iconStyle:{
        width:70,
        height:50
    },
    leftViewStyle:{
        marginRight:20
    }
});


module.exports = ShopCommon;


