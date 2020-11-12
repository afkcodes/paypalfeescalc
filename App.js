/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

const HomeScreen = () => {
  return (
    <Layout style={{flex: 1}}>
      <Text>Paypal Fees Calculator</Text>
    </Layout>
  );
};
const App = () => {
  return (
    <>
      <StatusBar backgroundColor="red" barStyle="light-content" />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <HomeScreen />
      </ApplicationProvider>
    </>
  );
};

export default App;
