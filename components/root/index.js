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
    Image
} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';

import Navigator from 'react-native-deprecated-custom-components';



//开始美团项目

//读取外部组件
var Home = require("../home/index.js");
var Mechant = require("../mechant/index.js");
var Mine = require("../mine/index.js");
var More = require("../more/index.js");

var tabBarHeight = 40
var {width} = require("Dimensions").get("window");
var MeiTuan = React.createClass({
    getInitialState:function(){
        return{
            selectedTab:"home",
            components:[
                {selectedTab:"home",title:"首页",renderIcon:"czk",renderSelectedIcon:"czl",Component:Home,statusBarbarStyle : "light-content"},
                {selectedTab:"mechant",title:"商家",renderIcon:"d3x",renderSelectedIcon:"d3y",Component:Mechant,statusBarbarStyle : "light-content"},
                {selectedTab:"mine",title:"我的",renderIcon:"czs",renderSelectedIcon:"czt",Component:Mine,statusBarbarStyle : "light-content"},
                {selectedTab:"more",title:"更多",renderIcon:"d3r",renderSelectedIcon:"d3s",Component:More,statusBarbarStyle : "default"}
            ]
        }
    },
    render:function () {
        var that = this;
        var Tab = this.state.components.map(function (value,index) {
            return that._renderTab(index,value.selectedTab,value.title,value.renderIcon,value.renderSelectedIcon,value.Component)
        })
        return(
            <TabNavigator>
                {Tab}
            </TabNavigator>
        )
    },
    _renderTab:function (index,selectedTab,title,renderIcon,renderSelectedIcon,Component) {

        return <TabNavigator.Item
            key={index}
            selected={this.state.selectedTab === selectedTab}
            title={title}
            titleStyle={tabStyle.tabTitleStyle}
            selectedTitleStyle={tabStyle.selectedTitleStyle}
            renderIcon={() => <Image
                style={tabStyle.tabIcon}
                source={{uri:renderIcon}} />}
            renderSelectedIcon={() => <Image
                style={tabStyle.tabIcon}
                source={{uri:renderSelectedIcon}} />}
            onPress={() => this.setState({ selectedTab: selectedTab })}>
            <Navigator.Navigator
                initialRoute={{name:title,component: Component}}
                configureScene={(route, routeStack) =>
                    Navigator.Navigator.SceneConfigs.FloatFromRight}
                renderScene={(route,navigator)=>{
                    var MyComponent = route.component;
                    return <MyComponent
                               {...route.passProps}
                               navigator={navigator}/>

                }}
            />
        </TabNavigator.Item>
    }
})
var tabStyle = StyleSheet.create({
    tabIcon:{
        width:24,
        height:24
    },
    tabTitleStyle:{
        color:"#999999"
    },
    selectedTitleStyle:{
        color:"#60C6B1"
    }

})

// AppRegistry.registerComponent('MeiTuan', () => MeiTuan);

module.exports = MeiTuan;
