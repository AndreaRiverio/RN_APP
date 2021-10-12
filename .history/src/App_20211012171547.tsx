import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const App: React.FC = () => {
    return (
    <SafeAreaView   style={style.App}>
            <Text style={style.Title}>Welcome to Sthima Academy</Text>
        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    Title: {
        color: 'white',
        fontSize: 30,
    },
});
