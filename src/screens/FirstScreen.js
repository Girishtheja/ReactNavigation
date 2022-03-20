import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SecondScreen from '../screens/SecondScreen';
const Drawer = createDrawerNavigator();

export default function FirstScreen() {

    function SwitchNext() {
      <Drawer.Navigator>
      <Drawer.Screen name="SecondScreen" component={SecondScreen} />
    </Drawer.Navigator>
    }

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>First Screen</Text>
            <TouchableOpacity style={styles.button} onPress={SwitchNext}>
                <Text style={{color: '#ffffff',fontSize: 18,}}>Next Screen</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainText: {
        color: '#ffffff',
        fontSize: 28,
    },
    button: {
        margin: 20,
        backgroundColor: '#404040',
        padding: 10,
        borderRadius: 5,
    },
})