import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import EditScreen from './src/navigat/EditScreen';
import PostsScreen from './src/view/PostScreen';
import OnePost from './src/view/OnePostScreen';

const App = () => {
  const Stack = createStackNavigator();

  const StackNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="posts" component={PostsScreen} />
      <Stack.Screen name="edit" component={EditScreen} />
      <Stack.Screen name="OnePost" component={OnePost} />
    </Stack.Navigator>
  );
  return (
    // <OnePost />
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
