import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import Routes from './screens/navigation/Routes.js';
import Tabs from './screens/navigation/Tabs.js';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <StatusBar style="auto" backgroundColor={'#00b8dc'} />
      <Routes />
    </>
  );
};

export default App;
