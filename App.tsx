import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, SafeAreaViewBase, StyleSheet, Text, TextInput, View } from 'react-native';
import { AddButton } from './components/button';
import { List } from './components/list';
import { dataList } from './types/data';

export default function App() {
  const [title, setTitle] = useState('ToDoList');
  const [list, setList] = useState(dataList)
    
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput style={styles.title} onChangeText={setTitle} >
          {title}
        </TextInput>
      </View>
      <View style={styles.addButton}>
        <AddButton setList={setList} />
      </View>
      <View style={styles.listContainer}>
        <List setList={setList} items={list.sort((a, b) => +a.isDone - +b.isDone)} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#433F40',
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff',

    marginLeft: 50,
    marginRight: 50,
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 10,
    
    backgroundColor: "#6fc2d1",
    borderRadius: 50,
  },
  addButton: {
    marginBottom: 20,
    marginTop: 20,
  },
  listContainer: {
  }
});
