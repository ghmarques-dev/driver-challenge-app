import {
  SafeAreaView, Text, TouchableOpacity, View,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { styles } from './Home.styles'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../types/navigation'

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>()

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <Map /> */}

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Listar OFERTAS</Text>
        </TouchableOpacity>
      </View>

      {/* TODO => Encaminha para a pagina de serviços  */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() =>
          navigation.navigate('Services')
        }>
          <Text style={styles.footerText}>Serviços</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.statusButton}>
          <Text style={styles.statusButtonText}>Você está ONLINE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

