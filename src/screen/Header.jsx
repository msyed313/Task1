import { BackHandler, View, Text, Image, Dimensions, Pressable, Animated, StyleSheet } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const { width, height } = Dimensions.get('window');

const Header = ({ navigation,name }) => {
    const [currentName, setCurrentName] = useState('home page');
    const [menu, setMenu] = useState(false);
    const slideAnim = useRef(new Animated.Value(-width * 0.7)).current;
    //const name = route?.params?.name || 'Default Name'
    const toggleMenu = (item) => {
        if (item) {
            setCurrentName(item);  // Set the current name immediately
        }
        setMenu(!menu);  // Toggle menu afterwards
        if (item) {
            navigation.navigate(item);  // Navigate to the new screen
        }
    };

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: menu ? 0 : -width * 0.7,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [menu]);

    return (
        <View style={styles.headerContainer}>
            {/* Header Section */}
            <View style={styles.header}>
                <Pressable onPress={() => toggleMenu()}>
                    <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
                </Pressable>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>{name}</Text>
                </View>
            </View>

            {/* Menu Section */}
            <Animated.View style={[styles.menuView, { transform: [{ translateX: slideAnim }] }]}>
                <Pressable onPress={() => toggleMenu('home')}>
                    <Text style={styles.menuText}>Home</Text>
                </Pressable>
                <Pressable onPress={() => toggleMenu('chat')}>
                    <Text style={styles.menuText}>Chat</Text>
                </Pressable>
                <Pressable onPress={() => toggleMenu('notification')}>
                    <Text style={styles.menuText}>Notifications</Text>
                </Pressable>
                <Pressable onPress={() => toggleMenu('profile')}>
                    <Text style={styles.menuText}>Profile</Text>
                </Pressable>
                <Pressable onPress={() => {
                    setMenu(!menu);  // First, toggle the menu state
                    BackHandler.exitApp();  // Then, exit the app
                }}>
                    <Text style={styles.menuText}>Exit</Text>
                </Pressable>
            </Animated.View>
            
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        position: 'relative', 
        //flex:1 // Ensures proper positioning of the menu
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: 50,
    },
    headerTextContainer: {
        marginLeft: 10,
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    headerText: {
        fontSize:width * 0.07,
        fontWeight: 'bold',
        color: '#000',
    },
    headerSubText: {
        fontSize: 14,
        color: '#333',
    },
    menuView: {
        backgroundColor: 'skyblue',
        height: height * 0.8,
        width: width * 0.7,
        position: 'absolute',
        top: 60,   // Ensures the menu slides in from the top
        left: 0,  // Ensures the menu starts off-screen
        zIndex: 10,  // Keeps the menu on top of other components
        padding: width * 0.07,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    menuText: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600',
        marginVertical: height * 0.01,
    },
    bottomNavigationView:{
        position: 'absolute',
        width: '90%',   // Set to 100% of the screen width
        height: '6%',   // Adjust the height to 10% or any preferred value
        bottom: 15,       // Align it at the bottom of the screen
        flexDirection: 'row',
        justifyContent: 'space-around', // Space the buttons evenly
        alignItems: 'center',           // Align the buttons vertically
        backgroundColor: 'white',
        elevation:15,
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
        tintColor:'green',
        
    }
});
