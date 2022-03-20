import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from '../screens/FirstScreen';
const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name='FirstScreen' component={FirstScreen} />
        </Stack.Navigator>
    )
}