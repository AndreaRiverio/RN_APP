import React from 'react'
import { StyleSheet, View } from 'react-native';

const App: React.FC = () => {
    return <View style={style.App}>;
};

export default App;

const style =  StyleSheet.create({
  App: {
    flex: 1,
    backgroundColor: 'black',
  },
});
