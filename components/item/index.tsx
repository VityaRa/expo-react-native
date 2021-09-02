import { View, Text, TouchableOpacity, Alert } from "react-native"
import { ListItem } from "../../types/interfaces"
import React from 'react';
import { StyleSheet } from 'react-native';
import { DoneIcon } from "../../assets/DoneIcon";
import { useDispatch } from "react-redux";
import { removeItem, toggleItem } from "../../store/actions/listActions";
import { AddIcon } from "../../assets/AddIcon";

interface IProps {
    item: ListItem,
}

export const Item = ({ item }: IProps) => {
    const dispatch = useDispatch();
    return (
        <View style={[styles.container, item.isDone ? styles.completeContainer : {}]} key={item.id}>
            <View>
                <TouchableOpacity
                    style={[styles.icon, item.isDone ? styles.doneIcon : {}]}
                    onPress={() => {
                        dispatch(toggleItem(item.id))
                    }}
                    onBlur={() => console.log('ey')}
                    >
                    <View style={styles.iconWrapper}>
                        <DoneIcon color={item.isDone ? "#000" : "#fff"} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.textWrapper}>
                <Text style={styles.text}>{item.text}</Text>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.delete}
                    onPress={() => {
                        dispatch(removeItem(item.id))
                    }}>
                    <View>
                        <AddIcon />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#B2ADAA',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 15,
        borderRadius: 40,
        height: 60,
    },
    completeContainer: {
        opacity: 0.5,
    },
    textWrapper: {
        marginLeft: 10,
        flex: 1,
    },
    text: {
        color: '#ffffff',
        fontSize: 14,
        height: 50,
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: 'center',
        backgroundColor: '#483D41',
        alignItems: 'center',
    },
    delete: {
        marginRight: 10,
        backgroundColor: '#7F3F41',
        width: 50,
        height: 50,
        borderRadius: 50,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            { rotate: "45deg" }
        ]
    },
    doneIcon: {
        backgroundColor: '#586261',
    },
    iconWrapper: {
        right: 4,
    },
})