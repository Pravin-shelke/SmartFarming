import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from './Screens/OnboardingScreen';
import Home from './Screens/Home';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen name="onboarding" component={OnboardingScreen} options={{headerShown: false}}/>
  
    <Stack.Screen name="HomeScreen" component={Home} />
   
    </Stack.Navigator>
  </NavigationContainer>
  );
}
export default App;
