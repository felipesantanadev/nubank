/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { StatusBar, SafeAreaView } from 'react-native';
import Main from './src/pages/Main';


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
      <SafeAreaView style={{flex: 1, backgroundColor: "#8B10AE"}}>
        <Main />
      </SafeAreaView>
    </>
  );
};

export default App;
