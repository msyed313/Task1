import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screen/Signup'
import Login from '../screen/Login'
import Home from '../screen/Home'
import Chat from '../screen/Chat'
import Notification from '../screen/Notification'
import Profile from '../screen/Profile'

const stack = createNativeStackNavigator()
const Navigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{ headerShown: false }} >
        <stack.Screen name='login' component={Login} />
        <stack.Screen name='home' component={Home} />
        <stack.Screen name='signup' component={Signup} />
        <stack.Screen name='chat' component={Chat} />
        <stack.Screen name='notification' component={Notification} />
        <stack.Screen name='profile' component={Profile} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation