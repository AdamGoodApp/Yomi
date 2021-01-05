import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Login from './login';
import Home from './home';
import TabBar from '../components/Tab';

const Navigation = (): React.ReactElement => {
  const Tab = createBottomTabNavigator();
  const { user: { auth } } = useSelector((state: any) => state);

  return ( 
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar {...props} login={auth ? false : true} />}>
        {
          !auth ? <Tab.Screen name="Login" component={Login}  options={{tabBarVisible: false}}/>
          :
          (<>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Library" component={Home} />
            <Tab.Screen name="Search" component={Home} />
            </>
          )
        }
      </Tab.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;