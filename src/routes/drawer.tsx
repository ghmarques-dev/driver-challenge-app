import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer'

import { StackNavigatorApp } from './stack'
import { HomeScreen } from '../screens/Home/Index'
import { CustomDrawer } from '../components/CustomDrawer/Index'
import { Image } from 'react-native'

const Drawer = createDrawerNavigator()

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
        name="Início"
        component={HomeScreen}
        options={{
          drawerIcon: ({ size }) =>
            <Image width={size} height={size} source={require('../assets/house.png')} />,
        }}
      />

      <Drawer.Screen
        name="Serviços"
        options={{
          headerShown: false,
          drawerIcon: ({ size }) =>
            <Image width={size} height={size} source={require('../assets/services-white.png')} />,
         }}
        component={StackNavigatorApp}
      />
    </Drawer.Navigator>
  )
}
