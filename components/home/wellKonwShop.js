import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    Button
} from 'react-native';

//获取屏幕宽度
var {width} = require("Dimensions").get("window");



var WellKnowShop = React.createClass({
    getInitialState:function(){
        return{
            leftTime:1000
        }
    },
    render:function () {

        return(
                <View

                >
                    <Image
                        style={styles.iconStyle}
                        source={{uri:this.props.data.img1}}
                    />
                    <View style={styles.leftTime}>
                        <Text style={styles.overSize}>距离结束</Text>
                        <Text style={styles.lastTime}>
                            {this._timeMode(this.state.leftTime)}
                        </Text>
                    </View>
                    <Image
                        style={styles.icon}
                        source={{uri:this.props.data.img2}}
                    />
                    <Text>{this.props.data.title}</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={styles.priceStyle}>{this.props.data.price}</Text>
                        <Text style={styles.saleStyle}>{this.props.data.sale}</Text>
                    </View>
                </View>
        )
    },
    _timeMode:function(time){
        var hour = parseInt(time/3600);
        var min = parseInt((time-hour*3600)/60);
        var sec = parseInt((time-hour*3600)%60);
        var str = "";
        if(hour<10){
          hour = "0"+ hour;
        }
        if(min<10){
          min="0"+min;
        }
        if(sec<10){
          sec="0"+sec;
        }
        str = hour + ":" + min + ":" + sec;
        return str;

    },
    componentDidMount:function(){
        var that = this;
        var timer = setInterval(function(){
          that.setState({
              leftTime:parseInt(that.state.leftTime)-1
          });
        },1000);
        if(this.state.leftTime==0){
            clearInterval(timer);
            this.setState({
                leftTime:0
            })
        }
    }
});

var styles = StyleSheet.create({
    mdqgWrap:{
        flexDirection:"row",
        marginTop:6
    },
    common:{
        flex:1,
        height:200
    },
    left:{
        backgroundColor:"#fff",
        alignItems:"center",
        paddingTop:12
    },
    right:{
        backgroundColor:"cyan",
        flexDirection:"column"
    },

    iconStyle:{
        width:width/3,
        height:44,
        resizeMode:"stretch"
    },
    icon:{
        width:width/3,
        height:60,
        resizeMode:"stretch"
    },
    leftTime:{
        flexDirection:"row",
        borderWidth:1,
        borderColor:"gray",
        padding:3
    },
    overSize:{
        fontSize:12,
        marginRight:5
    },
    lastTime:{
        fontSize:12,
        color:"red"
    },
    priceStyle:{
        color:"blue",
        marginRight:10,
        paddingTop:2,
        marginTop:4
    },
    saleStyle:{
        backgroundColor:"orange",
        color:"red",
        fontSize:12,
        paddingLeft:5,
        paddingRight:5,
        paddingTop:3,
        paddingBottom:3,
        marginTop:4

    }
});

module.exports = WellKnowShop;
