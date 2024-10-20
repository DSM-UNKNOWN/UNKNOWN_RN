import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginPage from "../../screens/Auth";
import SignupPage from "../../screens/User";
import MainScreen from "../MainScreen";

const Stack = createStackNavigator();

const UserScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="LoginPage">
            <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="SignupPage" component={SignupPage} options={{ headerShown: false }} />
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default UserScreen;