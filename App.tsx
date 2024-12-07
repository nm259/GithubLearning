import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from './screens/addedittask';
import AddEditTask from './screens/addedittask';
import TaskDetails from './screens/taskdetails';
import { View,Text } from 'react-native';
const PlaceholderScreen = ({ route }) => (
  <View>
    <Text>{route.name} Screen</Text>
  </View>
);



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen name="TaskList" component={PlaceholderScreen} />
        <Stack.Screen name="AddEditTask" component={PlaceholderScreen} />
        <Stack.Screen name="TaskDetails" component={PlaceholderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}