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

var OrderItem = React.createClass({
    render:function () {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.iconStyle}
                    source={{uri:this.props.data.imgSrc}}/>
                <Text style={styles.titleStyle}>{this.props.data.title}</Text>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
    },
    iconStyle:{
        width:20,
        height:20,
        marginBottom:3
    },
    titleStyle:{
        fontSize:12
    }
});

module.exports = OrderItem;
