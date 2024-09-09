import { View, Text, StatusBar, StyleSheet, Image, Dimensions, TextInput, Pressable, ImageBackground } from 'react-native'
import React, { useState } from 'react'
const { width, height } = Dimensions.get('window')
const Signup = ({navigation}) => {
    const [passView, setPassView] = useState(false);
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState({});

    const validate = () => {
        let valid = true;
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (name.trim() === '') {
            tempErrors.name = 'Name field is required';
            valid = false;
        }

        if (email.trim() === '') {
            tempErrors.email = 'Email field is required';
            valid = false;
        } else if (!emailRegex.test(email)) {
            tempErrors.email = 'Enter a valid email address';
            valid = false;
        }

        if (password.trim() === '') {
            tempErrors.password = 'Password field is required';
            valid = false;
        }

        setError(tempErrors);
        return valid;
    }
    const signup = () => {
        if (validate()) {
            console.log("signed up");
            setError({})
        }
    }
    return (
        <ImageBackground source={require('../assets/CloudsBackground.png')} style={styles.mainView} >
            <StatusBar backgroundColor='skyblue' barStyle='dark-content' />
            <Text style={styles.text}>Sign in to your Account</Text>

            <View style={styles.inputView}>
                <Text style={styles.inputText}>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                    placeholder="Enter your name"
                />
            </View>
            {error.name && <Text style={styles.errorText}>{error.name}</Text>}

            <View style={styles.inputView}>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    keyboardType="email-address"
                />
            </View>
            {error.email && <Text style={styles.errorText}>{error.email}</Text>}

            <View style={styles.inputView}>
                <Text style={styles.inputText}>Password</Text>
                <View style={{ position: 'relative', width: '100%' }}>
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Enter your password"
                        secureTextEntry={!passView}
                    />
                    <Pressable
                        style={styles.iconContainer}
                        onPress={() => setPassView(!passView)}
                    >
                        <Image
                            source={passView ? require('../assets/hide.png') : require('../assets/view.png')}
                            style={styles.icon}
                        />
                    </Pressable>
                </View>
            </View>
            {error.password && <Text style={styles.errorText}>{error.password}</Text>}



            <Pressable style={styles.loginButton} onPress={signup}>
                <Text style={styles.loginButtonText}>Signup</Text>
            </Pressable>

            <View style={styles.requestView}>
                <Text style={styles.request}>Already have an account?</Text>
                <Pressable onPress={()=>navigation.navigate('login')}>
                    <Text style={styles.signup}>Login</Text>
                </Pressable>
            </View>
        </ImageBackground>
    )
}
styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: width * 0.06,
        color: 'black',
        fontWeight: '600',
        marginVertical: height * 0.03,
    },
    inputView: {
        width: '80%',
        alignSelf: 'center',
        marginVertical: height * 0.01,
        gap: width * 0.02
    },
    inputText: {
        fontSize: width * 0.05,
        color: 'black',
    },
    iconContainer: {
        position: 'absolute',
        right: width * 0.05, // Adjust the right padding if necessary
        top: '25%',
    },
    icon: {
        width: width * 0.07,
        height: width * 0.07,
    },
    input: {
        borderRadius: 2,
        backgroundColor: 'lightgrey',
        width: '100%',
        borderRadius: 20,
        padding: width * 0.03,
        fontSize: width * 0.05,
    },
    errorText: {
        color: 'red',
        fontSize: width * 0.04,
    },
    loginButton: {
        width: '50%',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: width * 0.01,
        borderRadius: 20,
        marginVertical: height * 0.02
    },
    loginButtonText: {
        fontSize: width * 0.06,
        color: 'white',
        fontWeight: '500',
    },
    requestView: {
        flexDirection: 'row',
        gap: width * 0.01
    },
    request: {
        fontSize: width * 0.045,
        color: 'black',
        fontWeight: '500',
    },
    signup: {
        color: 'red',
        fontSize: width * 0.045,
        fontWeight: '500',
    }
})
export default Signup