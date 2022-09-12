import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Vibration, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: 'tomato', margin: 20 }}></View>
        <View style={{ flex: 1, backgroundColor: 'teal', margin: 12 }}></View>
        <View style={{ flex: 1, backgroundColor: 'orange' }}></View>
      </View>
      <View style={{ flex: 1.2 }}>
        <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
        <View style={{ flex: 1, backgroundColor: 'skyblue' }}></View>
        <View style={{ flex: 1, backgroundColor: 'purple' }}></View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({

});