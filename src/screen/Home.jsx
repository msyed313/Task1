import { View, Text, ImageBackground, StyleSheet, Image, Dimensions, Pressable, Animated } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const { width, height } = Dimensions.get('window');
import Header from './Header';
import Footer from './Footer';

const Home = ({ navigation }) => {

    return (
        <ImageBackground source={require('../assets/CloudsBackground.png')} style={styles.main}>
            <Header navigation={navigation} name="home"/>
            <Footer navigation={navigation} name="home" />
        </ImageBackground>

    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
   
});
export default Home