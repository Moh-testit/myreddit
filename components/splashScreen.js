import React from "react";
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert
} from 'react-native';

export default function MyReddit() {
    return (
        <View style={styles.MainContainer}>
            <View style={styles.SplashScreen_ChildView}>
                <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/4344/premium/4344782.png?token=exp=1635012301~hmac=c055bdac8c6d175b4435b0d1dd476494' }}
                    style={{ width: 75, height: 75 }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f67828',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    }
});
