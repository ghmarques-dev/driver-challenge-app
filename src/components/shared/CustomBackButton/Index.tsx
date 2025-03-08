import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Image, TouchableOpacity } from 'react-native'
import { styles } from './CustomBackButton.style'

import { RootStackParamList } from '../../../types/navigation'

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Services'>

export function CustomBackButton() {
  const navigation = useNavigation<NavigationProp>()

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <Image
        source={require('../../../assets/images/chevron-left.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  )
}
