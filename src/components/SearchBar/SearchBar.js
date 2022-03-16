import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.style';

const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ara..."
        onChangeText={props.onSearch}
        style={styles.input}
      />
    </View>
  );
};
export default SearchBar;
