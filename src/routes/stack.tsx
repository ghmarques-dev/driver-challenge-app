import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { ServicesScreen } from '../screens/Services/Index'
import { CustomBackButton } from '../components/CustomBackButton/Index'

export type StackParamList = {
  Serviços: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

export function StackNavigatorApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Serviços"
        component={ServicesScreen}
        options={{
          headerTitle: 'Voltar',
          headerLeft: CustomBackButton,
        }}
      />
    </Stack.Navigator>
  )
}
