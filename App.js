import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigation from './src/navigation/StackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )
}