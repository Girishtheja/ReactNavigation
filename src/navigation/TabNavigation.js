import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../../screens/SearchScreen';
import Home from '../../screens/HomeScreen';
const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='search' component={Search} />
        </Tab.Navigator >
    )
}