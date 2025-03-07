import { NavigationContainer } from '@react-navigation/native'
import { DrawerNavigatorApp } from './drawer'

export function RoutesContainer() {
  return (
    <NavigationContainer>
      <DrawerNavigatorApp />
    </NavigationContainer>
  )
}
