// Components/Search.js
import React from 'react'
import { View, TextInput, Button } from 'react-native'

class Search extends React.Component {
    render () {
        return (
            <View style={{ marginTop: 50, backgroundColor: 'green' }}>
                <TextInput style={styles.textinput1} placeholder='REDDITECH'/>
                <Button title='Rechercher' onPress={() => {}}/>
            </View>
        )
    }
  
}

// just for styles components

const styles = {
  textinput1: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 5,
    paddingLeft: 165
  }
}

export default Search