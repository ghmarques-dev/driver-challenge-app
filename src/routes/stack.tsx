import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ServicesScreen } from '../screens/Services'

const Stack = createNativeStackNavigator()

export function StackNavigatorApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          headerBackTitle: 'Voltar',
          headerBackImageSource: require('../assets/chevron-left.png'),
        }}
      />
    </Stack.Navigator>
  )
}
