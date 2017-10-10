
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

var GoodItem = React.createClass({
    render:function () {
        return (
            <View style={styles.container}>
                <View>
                    <Image 
                        style={styles.iconStyle}
                        source={{uri:this.props.data.img}}/>
                </View>
                <View style={{flexDirection:"column",justifyContent:"space-between",flex:1}}>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:16}}>{this.props.data.title}</Text>
                        <Text>{this.props.data.distance}</Text>
                    </View>
                    <View>
                        <Text>{this.props.data.subTitle}</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        <Text style={{color:"red"}}>现价¥{this.props.data.price}</Text>
                        <Text syle={{color:"#aaa"}}>原价¥{this.props.data.prePrice}</Text>
                        <Text>已售:{this.props.data.soldOut}份</Text>
                    </View>
                </View>
            </View>
        );
    }
});

var {width} = require("Dimensions").get("window");
var styles = StyleSheet.create({
    container:{
        width:width,
        flexDirection:"row",
        backgroundColor:"#fff",
        marginTop:1,
        padding:10,
        flex:1
    },
    iconStyle:{
        width:80,
        height:80,
        marginRight:10
    }
});

module.exports = GoodItem;
