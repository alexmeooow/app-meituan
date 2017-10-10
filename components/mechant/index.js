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
    Button,
    ListView,
    WebView,
    StatusBar
} from 'react-native';


var Mechant = React.createClass({
    getInitialState:function () {
        return{
            // url:"http://i.meituan.com/awp/h5/hotel/search/search.html"
            url:"https://meishi.meituan.com/i/?ci=62&stid_b=1&cevent=imt%2Fhomepage%2Fcategory1%2F1"

        }

    },
    render:function () {
        return(
              <WebView
                  automaticallyAdjustContentInsets={false}
                  style={styles.webView}
                  source={{uri: this.state.url}}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  startInLoadingState={true}
              />
        )
    }
})

var styles = StyleSheet.create({
    webView:{
        marginTop:0
    }
})
module.exports = Mechant;
