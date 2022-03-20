import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SecondScreen from '../screens/SecondScreen';
const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='second' component={SecondScreen} />
        </Drawer.Navigator>
    )
}