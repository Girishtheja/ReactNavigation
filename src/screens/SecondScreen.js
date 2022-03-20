import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function SecondScreen() {
    return (
        <View style={styles.container}>
            <Text style={{color: '#ffffff',fontSize: 28,}}>Second Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020',
        justifyContent: 'center',
        alignItems: 'center',
    },
})
