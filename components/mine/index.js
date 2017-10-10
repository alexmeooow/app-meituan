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
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

//获取美团券组件
var Coupon = require("./coupon.js")
var UserInfoCommon = require("./userInfoCommon.js");
var OrderItem = require("./orderItem.js");

//屏幕宽度
var {width} = require("Dimensions").get("window");
var Mine = React.createClass({
    render:function () {
        //为什么要声明一个变量来保存
        // var coupons = this._coupon();
        return(
            <View style={{backgroundColor:"#F1EBEB"}}>
                <View
                    style={styles.topStyle}
                >
                    {/*顶部图标*/}
                    <View>
                        {this._topIcon()}
                    </View>
                    {/*用户个人信息*/}
                    <View>
                        {this._userInfo()}
                    </View>
                    {/*美团券*/}
                    <View style={{flexDirection:"row"}}>
                        {this._coupon()}
                    </View>
                </View>
                {/*我的订单*/}
                <View>
                    {this._myOrder()}
                </View>
                {/*订单细节*/}

                <View style={styles.orderDetailStyle}>
                    {this._orderDetail()}
                </View>
                {/*用户具体信息*/}
                <View>
                    {this._moreUserInfo()}
                </View>

            </View>
        )
    },
    _topIcon:function () {
        return(
            <View style={styles.setting}>
                <Image
                    style={styles.settingIcon}
                    source={{uri:"icon_homepage_message"}}/>
                <Image
                    style={styles.settingIcon}
                    source={{uri:"icon_homepage_scan"}}/>
            </View>
        )
    },
    _userInfo:function () {
        return(
            <View style={styles.userInfoContainer}>
                {/*头像*/}
                <View style={styles.userInfoHeadStyle}>
                    <Image
                        style={styles.userInfoIconStyle}
                        source={{uri:"icon"}}/>
                </View>
                {/*用户名信息*/}
                <View>
                    <View style={{flexDirection:"row"}}>
                        <Text style={[styles.txt,{fontWeight:"bold"}]}>AlexMeow</Text>
                        <Image
                            style={{width:20,height:20}}
                            source={{uri:"avatar_vip"}}/>
                    </View>
                    <View>
                        <Text style={styles.txt}>个人信息</Text>
                    </View>
                </View>
            </View>

        )
    },
    _coupon:function () {
        //美团券左右两个一样,准备一个数组,来存放数据
        var couponArr = [
            {imgSrc:"ew0",title:"美团券"},
            {imgSrc:"evu",title:"收藏"}
        ]
        //直接return 不用再创建一个变量了,因为外面直接是调用方法
        return couponArr.map(function (value,index) {
            return(

                <Coupon
                    key={index}
                    index={index}
                    data={value}
                />

            )
        })
    },
    _myOrder:function(){
        return (
                <UserInfoCommon
                    data={{
                        imgSrc:"d3z",
                        name:"我的订单",
                        detail:"全部订单>",
                        margin:4
                    }}
                />
        );
    },
    _orderDetail:function(){
        var orderDetails = [
            {imgSrc:"order1",title:"代付款"},
            {imgSrc:"order2",title:"代使用"},
            {imgSrc:"order3",title:"代评价"},
            {imgSrc:"order4",title:"退款/售后"}
        ];
        return orderDetails.map(function(value,index){
            return (
                <OrderItem
                    key={index}
                    data={value}
                />
            );
        });
    },
    _moreUserInfo:function(){
        var moreUserInfo = [
            {imgSrc:"ew2",name:"我的钱包",detail:"手机充值"},
            {imgSrc:"evt",name:"余额",detail:"¥0.12"},
            {imgSrc:"evw",name:"抵用券",detail:"0张"},
            {imgSrc:"evz",name:"会员中心",detail:""},
            {imgSrc:"evx",name:"好友去哪",detail:""},
            {imgSrc:"dgj",name:"办信用卡",detail:""},
            {imgSrc:"ew1",name:"客服中心",detail:""},

        ];
        return moreUserInfo.map(function(value,index){
            return (
                <TouchableOpacity key={index} activeOpacity={0.9}>
                    <UserInfoCommon
                        data={value}
                    />
                </TouchableOpacity>
            );
        });
    }
})

var styles = StyleSheet.create({
    container:{
        paddingLeft:4,
        paddingRight:4
    },
    topStyle:{
        backgroundColor:"#07C2AF"
    },
    setting:{
        paddingLeft:6,
        paddingRight:6,
        paddingTop:8,
        width:width,
        height:40,
        flexDirection:"row",
        justifyContent:"flex-end",
        marginTop:Platform.OS=="ios"?20:0
    },
    settingIcon:{
        width:20,
        height:20,
        marginLeft:20
    },
    userInfo:{

    },
    userInfoContainer:{
        flexDirection:"row",
        alignItems:"center",
        borderBottomWidth:1,
        borderBottomColor:"#ddd"
    },
    userInfoHeadStyle:{
        width:100,
        alignItems:"center",
        padding:20
    },
    userInfoIconStyle:{
        width:60,
        height:60,
        borderRadius:30
    },
    orderDetailStyle:{
        flexDirection:"row",
        backgroundColor:"#fff",
        paddingTop:10,
        paddingBottom:10
    },
    txt:{
        color:"#fff"
    }
})
module.exports = Mine;
