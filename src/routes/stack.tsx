import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ServicesScreen } from '../screens/Services/Index'
import { CustomBackButton } from '../components/shared/CustomBackButton/Index'

type StackList = {
  toServices: undefined
}

const Stack = createNativeStackNavigator<StackList>()

export function StackNavigatorApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="toServices"
        component={ServicesScreen}
        options={{
          headerTitle: 'Voltar',
          headerLeft: CustomBackButton,
        }}
      />
    </Stack.Navigator>
  )
}
