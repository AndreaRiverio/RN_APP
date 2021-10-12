import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App: React.FC = () => {
    return (
    <View style={style.App}>
<Text>Welcome </Text>
    </View>
    )
};

export default App;

const style = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'black',
    },
});
