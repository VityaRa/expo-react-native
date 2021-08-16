import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { ListItem } from '../../types/interfaces'
import { Item } from '../item'
import { StyleSheet } from 'react-native';

interface IListProps {
    items: ListItem[],
    setList: React.Dispatch<React.SetStateAction<ListItem[]>>,
}


interface IProps {
    item: ListItem,
}

export const List = ({ items, setList }: IListProps) => {
    const renderItem = ({ item }: IProps) => (
        <Item setList={setList} item={item} />
    );
    return (
        <FlatList style={styles.container} data={items} renderItem={renderItem} />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    }
})