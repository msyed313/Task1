import { BackHandler, View, Text, Image, Dimensions, Pressable, Animated, StyleSheet } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const { width, height } = Dimensions.get('window');
const Footer = ({navigation,name}) => {
    const sname=name
    return (
        <View style={styles.bottomNavigationView}>
            <Pressable style={sname == 'chat' ? [styles.bottomNavigationButton,{backgroundColor:'lightgreen'}]:styles.bottomNavigationButton} onPress={()=>{navigation.navigate('chat')}}>
                <Image source={require('../assets/chat.png')} style={sname == 'chat' ? [styles.bottomNavigationImage,{tintColor:'green'}]:styles.bottomNavigationImage} />
            </Pressable>
            <Pressable style={sname == 'notification' ? [styles.bottomNavigationButton,{backgroundColor:'lightgreen'}]:styles.bottomNavigationButton}  onPress={()=>{navigation.navigate('notification')}}>
                <Image source={require('../assets/bell.png')} style={sname == 'notification' ? [styles.bottomNavigationImage,{tintColor:'green'}]:styles.bottomNavigationImage} />
            </Pressable>
            <Pressable style={sname == 'profile' ? [styles.bottomNavigationButton,{backgroundColor:'lightgreen'}]:styles.bottomNavigationButton}  onPress={()=>{navigation.navigate('profile')}}>
                <Image source={require('../assets/user.png')} style={sname == 'profile' ? [styles.bottomNavigationImage,{tintColor:'green'}]:styles.bottomNavigationImage} />
            </Pressable>
        </View>
    )
}
const styles=StyleSheet.create({
    bottomNavigationView:{
        position: 'absolute',
        width: '90%',   // Set to 100% of the screen width
        height: '6%',   // Adjust the height to 10% or any preferred value
        bottom: 15,       // Align it at the bottom of the screen
        flexDirection: 'row',
        justifyContent: 'space-around', // Space the buttons evenly
        alignItems: 'center',           // Align the buttons vertically
       // backgroundColor: 'white',
       // elevation:15,
        alignSelf:'center',
    },
    bottomNavigationButton:{
       width:'33%',
      // backgroundColor:'red',
       alignItems:'center',
       height:'90%',
       justifyContent:'center'
    },
    bottomNavigationImage:{
        width:width*0.08,
        height:width*0.08,
        //tintColor:'green',
        
    }
})
export default Footer