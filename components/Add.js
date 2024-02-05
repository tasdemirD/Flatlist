import { useState, React } from "react"
import { Button, TextInput, View, StyleSheet } from "react-native"

export default function Add({items, setItems}){
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastname] = useState('')

    const save = () => {
        const newPerson = {
            id: items.length + 1,
            firstname: firstName,
            lastname: lastName
        }
        const tempItems = [...items, newPerson]
        setItems(tempItems)
        setFirstname('')
        setLastname('')
    }

    return(
        <View style={StyleSheet.container}>
            <TextInput
                value = {firstName}
                onChangeText={text => setFirstname(text)}
                placeholder="Firstname..."
            />
            <TextInput
                value = {lastName}
                onChangeText={text => setLastname(text)}
                placeholder="Lastname..."
            />
            <Button title='Save' onPress={save}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
  });