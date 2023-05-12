import React from 'react';
import Home from './src/screen/home';
import {View} from 'react-native';
const App: () => JSX.Element = () => {
  return (
    <View style={{flex:1}}>
      <Home />
    </View>
  );
};
export default App;
