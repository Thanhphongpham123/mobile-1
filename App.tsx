import React from 'react';
import { View } from 'react-native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './app/screens/LoginScreen';
import ExploreScreen from './app/screens/ExploreScreen';
import ProfileScreen from './app/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_dW5iaWFzZWQtdGFycG9uLTY4LmNsZXJrLmFjY291bnRzLmRldiQ">
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="auto" />

        <SignedIn>
          <NavigationContainer>
            <MainTabs />
          </NavigationContainer>
        </SignedIn>

        <SignedOut>
          <LoginScreen />
        </SignedOut>

      </GestureHandlerRootView>
    </ClerkProvider>
  );
}
