import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from "../../screens/Main";
import PatchPage from "../../screens/Patch";
import SearchPage from "../../screens/Search";
import DataPage from '../../screens/Data';
import InputPage from "../../screens/Input";

const Stack = createStackNavigator();

const MainScreen = () => {
  
    return (
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
            <Stack.Screen name="PatchPage" component={PatchPage} options={{ headerShown: false }} />
            <Stack.Screen name="SearchPage" component={SearchPage} options={{ headerShown: false }} />
            <Stack.Screen name="DataPage" component={DataPage} options={{ headerShown: false }} />
            <Stack.Screen name='InputPage' component={InputPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default MainScreen;