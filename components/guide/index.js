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
    Button,
    Navigator,
    AsyncStorage
} from 'react-native';

var {width,height} = require("Dimensions").get("window");

var MeiTuan = require("../root/index.js");

var key = "isFirstOpen";

var Guide = React.createClass({
    getInitialState:function(){
        return {
            guideData:["guide1","guide2","guide3"],
            isShowGuide:-1
        };
    },
    componentWillMount:function(){
        AsyncStorage.getItem(key,(error,result)=>{
            if(result=="false"){
                this.setState({
                    isShowGuide:0
                });
                this.props.navigator.replace({
                    component:MeiTuan
                });
            }else{
                this.setState({
                    isShowGuide:1
                });
            }
        });
    },
    render:function () {
        var that = this;
        var guide = this.state.guideData.map(function(value,index){
            return (
                <TouchableOpacity
                    onPress={that._press(index)}
                    key={index}
                    activeOpacity={1}>
                    <View>
                        <Image
                            style={styles.iconStyle}
                            source={{uri:value}}/>
                    </View>
                </TouchableOpacity>
            );
        });
        console.log(this.state.isShowGuide);
        var content = this.state.isShowGuide==1
            ?<ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            >
                {guide}
            </ScrollView>
            :<View>
                <Image
                    style={{width:width,height:height}}
                    source={{uri:"login"}}/>
            </View>
        return (
            <View>
                {content}
            </View>
        );
    },
    _press:function(index){
        var that = this;
        return function(){
            if(index==(that.state.guideData.length-1)){
                // 跳转发生时，将标明是否是第一次打开的参数保存起来
                AsyncStorage.setItem(key,"false",()=>{
                    console.log("保存成功了");
                });
                that.props.navigator.replace({
                    component:MeiTuan
                });
            }
        }
    }
});


var styles = StyleSheet.create({
    iconStyle:{
        width:width,
        height:height
    }
});

module.exports = Guide;