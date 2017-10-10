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
    ScrollView,
    Platform,
    Image,
    TextInput,
    StatusBar
} from 'react-native';

import Navigator from 'react-native-deprecated-custom-components';

//Home的头部scrollview


//数据外部获取,可以的话要改成网络数据,传到网站上去
var topData = require("./TopMenu.json");
var shopData = require("./HomeTopMiddleLeft.json");
var WellKnowShopData=shopData.dataLeft[0];
var topMiddle = require('../../localDatas/HomeTopMiddle.json');
var hotData = require('../../localDatas/HomeHotData.json');
var goodsData = require('../../localDatas/Goods.json');
//获取外部组件
var TopScroll = require("./topscroll.js");
var WellKnowShop = require("./wellKonwShop.js");
var ShopCommon = require("./shopCommon.js");
var TopMiddle = require("./myTopMiddle.js");
var GoodsList = require("./goodsList.js");

//获取宽度
var {width} = require("Dimensions").get("window");
var Home = React.createClass({
    // getInitialState:function () {
    //     return{
    //         scrollData:topData
    //     }
    // },
    componentWillMount:function () {
    },
    render:function () {
        return(
            <View style={styles.container}>
                {/* <View>
                  <StatusBar
                    // backgroundColor="blue"
                    // barStyle="light-content"
                  />
                </View> */}
                {/*搜索框*/}
                <View>
                    {this._topSearch()}
                </View>
                <ScrollView showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.contentContainer}>
                    {/*轮播图*/}
                    <View>
                        <TopScroll
                            data={topData.data}
                            activeColor="#60C6B1"
                            color="gray"
                        />
                    </View>
                    {/*轮播图下面的模块*/}
                    <View style={styles.mdqgWrap}>
                        {/*名店抢购模块*/}
                        <View style={[styles.common,styles.left]}>
                            <WellKnowShop
                                data={WellKnowShopData}
                            />
                        </View>
                        {/*右边的店铺*/}
                        <View style={{flex:1,height:200,marginLeft:2}}>
                            {this._shopRight()}
                        </View>
                    </View>
                    {/*美团年终奖*/}
                    <View style={styles.topMiddleStyle}>
                        {this._topMiddle()}
                    </View>
                    {/*热门旅游*/}
                    <View style={styles.hotStyle}>
                        <View style={styles.hotTopStyle}>
                            {this._hotTop()}
                        </View>
                        <View style={styles.hotBottomStyle}>
                            {this._hotBottom()}
                        </View>
                    </View>
                    {/*商品列表*/}
                    <View style={{marginTop:10}}>
                        {this._goodsList()}
                    </View>
                </ScrollView>
            </View>



        )
    },
    _topSearch:function () {
        return (
            <View style={styles.topSearch}>
                <Text style={{color:"#fff"}}>厦门</Text>
                <TextInput
                    style={styles.input}

                />
                <Image
                    source={{uri:"icon_homepage_message"}}
                    style={{width:20,height:20}}/>
            </View>
        )
    },
    _shopRight:function () {
        var data = shopData.dataRight;
        return data.map(function (value,index) {
            return(
                <View
                    key={index} style={[
                    styles.mdqgRightStyle,{marginTop:index==1?1:0}
                    ]}
                >
                    <ShopCommon data = {value}/>

                </View>
            )

        })
    },
    _topMiddle:function () {
        var data  = topMiddle.data;
        return data.map(function(value,index){
            return (
                <TopMiddle
                    key = {index}
                    data = {value}
                />
            );
        });
    },
    _hotTop:function(){
        var topData = hotData.topData;
        return topData.map(function(value,index){
            return (
                <ShopCommon key={index} data={value}/>
            );
        });
    },
    _hotBottom:function(){
        var bottomData = hotData.bottomData;
        return bottomData.map(function(value,index){
            return (
                <ShopCommon key={index} data={value}/>
            );
        });
    },
    _goodsList:function(){

        return (
            <GoodsList data={goodsData}/>
        );
    }
})

var styles = StyleSheet.create({
    container:{
        backgroundColor:"#eee"
    },
    topSearch:{
        width:width,
        height:Platform.OS=="ios"?64:44,
        backgroundColor:"#60C6B1",
        paddingTop:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingRight:20
    },
    input:{
        width:width*0.6,
        height: 30,
        backgroundColor:"#fff",
        borderRadius:20
    },
    contentContainer:{
        paddingBottom:44
    },
    mdqgWrap:{
        flexDirection:"row",
        marginTop:6
    },rightTop:{
        flex:1,
        backgroundColor:"gray"
    },
    rightBottom:{
        flex:1,
        backgroundColor:"pink"
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
    mdqgRightStyle:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fff"
    },
    hotStyle:{
        marginTop:1
    },
    hotTopStyle:{
        flexDirection:"row",marginBottom:1
    },
    hotBottomStyle:{
        flexDirection:"row",
        flexWrap:"wrap"
    }
})
module.exports = Home;
