import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StatusBar} from 'react-native';
import Routes from './screens/navigation/Routes.js';
import Tabs from './screens/navigation/Tabs.js';

const App = () => {
  return (
    <>
      <StatusBar style="auto" backgroundColor={'#00b8dc'} />
      <Routes />
    </>
  );
};

export default App;
