import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashMessage from "react-native-flash-message";
import login from './Login/login';
import Sign from './Sign/Sign';
import Messages from './Messages/Messages';
import auth from '@react-native-firebase/auth'

const Stack = createStackNavigator();

export default () => {

  

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name='LoginPage' component={login} />
        <Stack.Screen name='SignPage' component={Sign} />
        
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='AuthStack' component={AuthStack} />
        <Stack.Screen name='MessagesPage' component={Messages} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )
}
