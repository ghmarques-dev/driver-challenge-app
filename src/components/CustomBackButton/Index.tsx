import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { StackParamList } from '../../routes/stack'
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './CustomBackButton.style';

type NavigationProp = NativeStackNavigationProp<StackParamList, 'Serviços'>

export function CustomBackButton() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.container}
    >
      <Image
        source={require('../../assets/chevron-left.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
}
