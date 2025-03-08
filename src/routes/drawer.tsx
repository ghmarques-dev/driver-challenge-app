import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer'

import { StackNavigatorApp } from './stack'
import { HomeScreen } from '../screens/Home/Index'
import { CustomDrawer } from '../components/shared/CustomDrawer/Index'
import { Image } from 'react-native'

import { RootStackParamList } from '../types/navigation'

const Drawer = createDrawerNavigator<RootStackParamList>()

const screenOptionsStyles: DrawerNavigationOptions  = {
  drawerStyle: { backgroundColor: 'black', width: '80%' },
  drawerLabelStyle: { color: 'white' },
  headerStyle: { backgroundColor: 'black' },
  headerTintColor: 'white',
  drawerActiveTintColor: 'white',
  drawerActiveBackgroundColor: '#363636',
  drawerInactiveTintColor: 'white',
  drawerInactiveBackgroundColor: 'transparent',
  drawerItemStyle: {
    borderRadius: 10,
    margin: 10,
  },
}

export function DrawerNavigatorApp() {
  return (
    <Drawer.Navigator
      screenOptions={screenOptionsStyles}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Início',
          drawerIcon: ({ size }) =>
            <Image width={size} height={size} source={require('../assets/images/house.png')} />,
        }}
      />

      <Drawer.Screen
        name="Services"
        options={{
          headerShown: false,
          drawerIcon: ({ size }) =>
            <Image width={size} height={size} source={require('../assets/images/services-white.png')} />,
         }}
        component={StackNavigatorApp}
      />
    </Drawer.Navigator>
  )
}
