import { useEffect, useState } from 'react'
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { NetworkStatus } from '../../constants/network-status'

import { RootStackParamList } from '../../types/navigation'
import { styles } from './Home.styles'
import { checkConnection } from '../../utils/fack-check-connection'
import { StatusButton } from '../../components/pages/home/StatusButton/StatusButton'

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const [connectionStatus, setConnectionStatus] =
    useState<NetworkStatus>(NetworkStatus.LOADING)

  useEffect(() => {
    const status = checkConnection({ mathValue: 0.50 })

    setConnectionStatus(status)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* <Map /> */}

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Listar OFERTAS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.servicesButton}
          onPress={() => navigation.navigate('Services')}
        >
          <Image source={require('../../assets/images/services-black.png')} />
          <Text style={styles.footerText}>Serviços</Text>
        </TouchableOpacity>

        <StatusButton connectionStatus={connectionStatus} />
      </View>
    </SafeAreaView>
  )
}

