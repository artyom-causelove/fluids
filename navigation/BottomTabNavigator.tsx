import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AuthorScreen from '../screens/AuthorScreen';
import HandbookScreen from '../screens/HandbookScreen';
import { BottomTabParamList, HandbookParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Author"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint, }}>
      <BottomTab.Screen
        name="Author"
        component={AuthorScreen}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="person-circle" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Handbook"
        component={HandbookNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="list-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab

const HandbookStack = createStackNavigator<HandbookParamList>();

function HandbookNavigator() {
  return (
    <HandbookStack.Navigator>
      <HandbookStack.Screen
        name="HandbookScreen"
        component={HandbookScreen}
        options={{ headerTitle: 'Handbook' }}
      />
    </HandbookStack.Navigator>
  );
}
