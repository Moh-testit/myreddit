import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function Login() {
    state = {
        email: "",
        password: ""
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={{ uri: 'https://cdn-icons.flaticon.com/png/512/4344/premium/4344782.png?token=exp=1635012301~hmac=c055bdac8c6d175b4435b0d1dd476494' }}
                    style={{ width: 100, height: 100 }} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    style={styles.inputText}
                    placeholder="Enter a username"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({ email: text })} />
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Enter your password"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({ password: text })} />
            </View>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>CLICK HERE TO LOGIN</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f67828',
    alignItems: 'center',
    justifyContent: 'center',
},
logo: {
    fontSize: 50,
    marginBottom: 80
},
inputView: {
    width: "80%",
    backgroundColor: "#F6F7EE",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
},
inputText: {
    height: 50,
    width: 300,
    color: "white"
},
loginBtn: {
    width: 150,
    backgroundColor: "#E5E5E5",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
},
loginText: {
    color: "black",
    fontWeight: "bold"
}
});