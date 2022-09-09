import {Searchbar} from 'react-native-paper';

import {View, Text} from 'react-native';
import React from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{borderRadius: 6, margin: 10}}
    />
    </View>
  );
};

export default Search;
