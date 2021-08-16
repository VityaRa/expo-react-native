import React, { useRef, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, TextInput, TextInputComponent } from 'react-native'
import { AddIcon } from '../../assets/AddIcon'
import { ListItem } from '../../types/interfaces'

interface IProps {
    setList: React.Dispatch<React.SetStateAction<ListItem[]>>,
}

export const AddButton = ({ setList }: IProps) => {
    const [text, setText] = useState('')

    const addTask = () => {
        setList(prev => {
            prev.push({
                text: text,
                id: prev.length.toString(),
                isDone: false,
            })
            setText('')
            return prev
        })
    }

    return (
        <View style={styles.button}>
            <TextInput defaultValue={text} onChangeText={text => setText(text)} style={styles.input} />
            <View style={styles.iconWrapper}>
                <TouchableOpacity onPress={addTask}>
                    <AddIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6fc2d1',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 50,
        marginRight: 50,
    },
    input: {
        backgroundColor: '#fff',
        marginLeft: 20,
        flex: 1,
        borderRadius: 50,
        fontSize: 16,
        paddingLeft: 10,
    },
    iconWrapper: {
        padding: 5,
        marginRight: 5,
        marginLeft: 5,
    }
})