import React, { useRef, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '../store/actions/Settings';
import BottomSheet from 'reanimated-bottom-sheet';
import { setUser } from '../store/actions/User';
import { deleteKey } from '../lib/secure-storage';
import Login from './login';
import Home from './home';
import TabBar from '../components/Tab';
import Settings from '../components/Settings';

const Navigation = ({ navigation }: any): React.ReactElement => {
  const sheetRef: any = useRef(null);
  const dispatch = useDispatch();
  const Tab = createBottomTabNavigator();
  const { user: { auth }, settings: { open } } = useSelector((state: any) => state);

  useEffect(() => {
    open && sheetRef.current.snapTo(0);
    !open && sheetRef.current.snapTo(1);
  }, [open]);

  const onSignOut = async () => {
    await deleteKey('user');

    dispatch(setUser({ auth: false }));
    dispatch(setOpen({ open: false }));
    
    navigation.navigate('Login');
  };

  const onSettingsClose = () => {
    dispatch(setOpen({ open: false }));
  }

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

      <BottomSheet
        ref={sheetRef}
        snapPoints={['94%', '0%']}
        borderRadius={5}
        renderContent={() => <Settings onSettingsClose={onSettingsClose} onSignOut={onSignOut} />}
        initialSnap={1}
        onCloseEnd={onSettingsClose}
      />
    </NavigationContainer>
  )
};

export default Navigation;