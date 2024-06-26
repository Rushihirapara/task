import React from 'react';
import { StatusBar } from 'react-native';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { COLOR } from './Utils/Theme';

//--- store
import { Provider } from 'react-redux';
import store from './Store';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={COLOR.primary1} translucent barStyle="light-content" />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
