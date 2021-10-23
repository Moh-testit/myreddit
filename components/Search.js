import React from 'react'
import { View, TextInput, Button } from 'react-native'

export default function Search() {
    return (
        <View style={{ marginTop: 0, backgroundColor: 'green' }}>
            <TextInput style={styles.textinput} placeholder='MyReddit'/>
            <Button style={styles.textinput} title='Rechercher' onPress={() => {}}/>
        </View>
    )
}

const styles = {
    textinput: {
      marginTop: 100,
      marginLeft: 10,
      marginRight: 10,
      height: 50,
      borderColor: '#000000',
      borderWidth: 3,
      paddingLeft: 10
    }
  }