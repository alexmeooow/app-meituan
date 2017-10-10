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
    Image,
    TouchableOpacity,
    ListView,
    Button

} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

import Navigator from 'react-native-deprecated-custom-components';

var Guide = require("./components/guide/index.js");

var Root = React.createClass({
    render:function(){

        return (
            <Navigator.Navigator
                initialRoute={{name:"ad",component: Guide}}
                configureScene={(route, routeStack) =>
                    Navigator.Navigator.SceneConfigs.FloatFromBottom}
                renderScene={(route,navigator)=>{
                    var Component = route.component;
                    return <Component
                        {...route.passProps}
                        navigator={navigator}/>
                }}
            />
        );
    }
});

AppRegistry.registerComponent('MeiTuan', () => Root);