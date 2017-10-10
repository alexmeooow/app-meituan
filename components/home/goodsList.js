
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

var GoodItem = require("./goodItem.js");
var Footer = require("./myFooter.js");

var GoodsList = React.createClass({
    getInitialState:function(){
        var ds = new ListView.DataSource({
            rowHasChanged:function(r1,r2){
                return r1!==r2;
            }
        });
        ds = ds.cloneWithRows(this.props.data);
        return {
            ds:ds
        }
    },
    render:function () {
        return (
            <View>
                <ListView 
                    dataSource={this.state.ds}
                    renderRow={this._renderRow}
                    renderFooter={this._renderFooter}
                />
            </View>
        );
    },
    _renderRow:function(rowData){
        return (
            <GoodItem data={rowData}/>
        );
    },
    _renderFooter:function(){
        return (
            <Footer />
        );
    }
});
module.exports = GoodsList;
