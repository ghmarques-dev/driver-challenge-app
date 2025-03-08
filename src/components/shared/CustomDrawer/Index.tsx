import { Image, Text, View } from 'react-native'

import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { DrawerItemList } from '@react-navigation/drawer'

import { styles } from './CustomDrawer.styles'

type CustomDrawerProps = DrawerContentComponentProps

export function CustomDrawer ({ ...rest }: CustomDrawerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={styles.avatar}
        />

        <View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.car}>Onix Sedan Branco</Text>
          <Text style={styles.points}>0 pontos</Text>
        </View>
      </View>

      <DrawerItemList {...rest} />
    </View>
  )
}
