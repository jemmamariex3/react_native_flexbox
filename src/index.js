import React, { Component } from 'react';
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export default class FlexBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style = {[styles.boxContainer,styles.bugContainer]}>
                    <Icon name="ios-bug" color="black" size={100}/>
                </View>
                <View style = {[styles.boxContainer,styles.wineContainer]}>
                    <Icon name="md-wine" color="black" size={100}/>
                </View>
                <View style = {[styles.boxContainer,styles.mailContainer]}>
                    <Icon name="ios-mail" color="black" size={100}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:'center',
        justifyContent:'space-between'
    },
    boxContainer:{
        flex:1
    },
    bugContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'orange'
    },
    wineContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'pink'

    },
    mailContainer:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'brown'

    }
})