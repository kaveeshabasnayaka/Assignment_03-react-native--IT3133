import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='login' style={styles.container}>
            <Stack.Screen
              name="login"
              component={Login}
              options={{ title: 'UoV Student Care' }}
            />
            <Stack.Screen
              name="home"
              component={Home}
              options={{ title: 'UoV Student Care' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>

    </PaperProvider>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
