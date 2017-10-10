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
//设置margin
var itemMargin = 20;
var rowNum = 5;
//var itemWAndH = (width-(rowNum+1)*itemMargin)/rowNum;

//指示器宽度
var indicatorSize = 5;
var TopScroll = React.createClass({
    getInitialState:function () {
        //设置当前下标,用来绑定scrollview的下标
        return{
            currentIndex:0
        }
    },

    render:function(){
        //组件嵌套组件,外层map是两个scrollview的data
        var content = this.props.data.map(function (value,index) {
            //组件嵌套组件,里层map是scrollview的data里面的data--image和title
            var items = value.map(function (item,index) {
                return (
                    <View
                        key={index}
                        style={styles.items}
                    >
                        <Image
                            style={styles.icon}
                            source={{uri:item.image}}/>
                        <Text
                            style={styles.txt}
                        >{item.title}</Text>
                    </View>
                )
            });
            return (
                <View
                    style={styles.container}
                    key={index}>
                    {items}
                </View>
            )

        });
        //再来创建指示器
        var that = this;
        var indicators = this.props.data.map(function (value,index) {
            return (
                <View
                    key={index}
                    style={[styles.indicator,
                        {backgroundColor:that.state.currentIndex==index
                            ? that.props.activeColor
                            : that.props.color}
                    ]}
                >

                </View>
            )
        })
        return(
            <View>
                <ScrollView
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                onMomentumScrollEnd={this._scrollEnd}
                >
                    {content}
                </ScrollView>
                <View style={styles.indicatorWrap}>
                    {indicators}
                </View>

            </View>
        );

    },
    _scrollEnd:function (e) {
        var index = e.nativeEvent.contentOffset.x/width;
        this.setState({
            currentIndex:index
        })
    }

})

var styles = StyleSheet.create({
    container:{
        width:width,
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"space-around",
        paddingTop:20,
        backgroundColor:"#fff"

    },
    items:{
        width:width/5,
        height:width/5,
        justifyContent:"space-around",
        alignItems:"center"

    },
    icon:{
        width:width/9,
        height:width/9,
        alignItems:"center"

    },
    txt:{
        textAlign:"center",
        fontSize:14
    },
    indicatorWrap:{
        width:width,
        flexDirection:"row",
        justifyContent:"center",
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"#fff"
    },
    indicator:{
        width:indicatorSize,
        height:indicatorSize,
        borderRadius:indicatorSize/2,
        marginLeft:4,
        marginRight:4
    }

})
module.exports = TopScroll;