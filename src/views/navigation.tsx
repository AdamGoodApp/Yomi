import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Login from './login';
import Home from './home';

const Navigation = (): React.ReactElement => {
  const Stack = createStackNavigator();
  const { user: { auth } } = useSelector((state: any) => state);

  return ( 
    <NavigationContainer>
      <Stack.Navigator>
        {
          !auth ? 
          (
            <Stack.Screen 
              name="Login" 
              component={Login} 
              options={{
                headerShown: false,
                animationTypeForReplace: !auth ? 'pop' : 'push',
              }} 
            />
          ) :
          ( <Stack.Screen name='Home' component={Home} /> )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;