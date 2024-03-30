import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import Home from '../screens/home';
import SingleTask from '../screens/singletask';
import SignUp from '../screens/signup';
import Task from '../screens/task';
import CreateTask from '../screens/createTask';
import CreateTeam from '../screens/createTeam';
import Profile from '../screens/profile';
import Team from '../screens/team';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="CreateTask" component={CreateTask} />
        <Stack.Screen name="SingleTask" component={SingleTask} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Team" component={Team} />
        <Stack.Screen name="CreateTeam" component={CreateTeam} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
