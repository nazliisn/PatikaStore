import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native';
import store_data from './store_data.json';
import Card from './components/Card';
import SearchBar from './components/SearchBar';

function App() {
  const renderSeperater = () => <View style={styles.seperator}></View>;

  const [list, setList] = useState(store_data);

  const renderItem = ({item}) => <Card product={item}></Card>;

  const onChange = text => {
    const filterList = store_data.filter(storeFilter => {
      const searchText = text.toLowerCase();
      const filtText = storeFilter.title.toLowerCase();

      return filtText.indexOf(searchText) > -1;
    });

    setList(filterList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATİKA STORE</Text>
      <View>
        <SearchBar onSearch={onChange} />
        <FlatList data={list} renderItem={renderItem} numColumns={2}></FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
  },
  header: {
    margin: 10,
    fontSize: 50,
    color: 'purple',
    fontWeight: 'bold',
  },
  input: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
  },
});

export default App;
