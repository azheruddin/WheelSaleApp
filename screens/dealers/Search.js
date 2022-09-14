import {SearchBar} from 'react-native-elements';
import React, {useState} from 'react';
import {View, Text} from 'react-native';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <>
      <View style={{backgroundColor: '#00b8dc'}}>
        <SearchBar
          searchIcon={{size: 24, color: 'black'}}
          onChangeText={e => onChangeSearch(e)}
          onClear={onChangeSearch}
          placeholder="search here..."
          value={searchQuery}
          containerStyle={{
            backgroundColor: 'green',
            justifyContent: 'center',
            padding: 0,
            margin: 15,
            height: 40,
          }}
          style={{color: 'black'}}
          inputContainerStyle={{backgroundColor: '#fff'}}
          clearIcon={{color: 'gray'}}
          placeholderTextColor="gray"
        />
      </View>
      <Text>{searchQuery}</Text>
    </>
  );
};

export default Search;
