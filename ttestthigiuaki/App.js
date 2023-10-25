import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Screen1'>
      <Stack.Screen name="Screen1" component={Screen1} options={{headerShown:false}}/>
      <Stack.Screen name="Screen2" component={Screen2} options={{title:'List Bike'}}/>
      <Stack.Screen name="Screen3" component={Screen3} options={{title:'Detail Bike'}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});

