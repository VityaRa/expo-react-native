import React, { useRef, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, TextInput, TextInputComponent, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { AddIcon } from '../../assets/AddIcon'
import { RootState } from '../../store'
import { addItem } from '../../store/actions/listActions'
import { ListItem } from '../../types/interfaces'
import { getRandomId } from '../../utils/getRandomId'


export const AddButton = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch();

    const addItemHandler = (item: ListItem) => {
        dispatch(addItem(item))
    }

    return (
        <View style={styles.button}>
            <TextInput defaultValue={text} onChangeText={text => setText(text)} style={styles.input} />
            <View style={styles.iconWrapper}>
                <TouchableOpacity onPress={() => {
                    const item: ListItem = {
                        text,
                        isDone: false,
                        id: getRandomId(),
                    }
                    addItemHandler(item)
                }}>
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