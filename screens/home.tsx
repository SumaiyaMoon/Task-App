import React, {useState, useEffect} from 'react';
import {View, Text, Button, TouchableOpacity, Image} from 'react-native';
import rncStyles from 'rncstyles';
import SMButton from '../components/SMButton';

export default function Home({navigation}: any) {
  return (
    <View style={[rncStyles.p2, rncStyles.h100]}>
      <Text>MoonTaskApp</Text>
      <SMButton
        onPress={() => {
          navigation.navigate('CreateTask');
        }}
        label="Add Task"
      />
      <SMButton
        onPress={() => {
          navigation.navigate('Task');
        }}
        label="My Tasks"
      />
    </View>
  );
}
