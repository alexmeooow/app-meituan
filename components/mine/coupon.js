import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Coupon = React.createClass({
    render:function () {
        console.log(this.props.data)
        return(
            <View style={[styles.container,{borderRightWidth:this.props.index==0?1:0}]}>
                <Image
                    style={styles.iconStyle}
                    source={{uri:this.props.data.imgSrc}}
                />
                <Text
                    style={styles.txtStyle}
                >{this.props.data.title}</Text>
            </View>
        )
    }
})
var styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        height:20,
        borderRightColor:"#fff",
        marginTop:10,
        marginBottom:10
    },
    iconStyle:{
        width:20,
        height:20,
        marginRight:10
    },
    txtStyle:{
        color:"#fff"
    }
});
module.exports = Coupon;