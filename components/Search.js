import { useState, React } from "react";
import {TextInput, StyleSheet, View} from 'react-native'

export default function Search({executeSearch}) {
    const [search, setSearch] = useState('')

    return (
        <View style = {styles.searchbox}>
            <TextInput
                value = {search}
                onChangeText = {text => setSearch(text)}
                placeholder = "Search..."
                returnKeyType = "search"
                onSubmitEditing={() => executeSearch(search)}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    searchbox: {
        marginBottom: 20,
        borderColor: '#333',
        borderWidth: 1,
        padding: 5,
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    }
})