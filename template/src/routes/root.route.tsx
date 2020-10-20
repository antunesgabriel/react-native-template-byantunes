import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Hello from 'src/screens/hello/hello.screen';

const Stack = createStackNavigator();

function RootRoute(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Hello" component={Hello} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootRoute;
