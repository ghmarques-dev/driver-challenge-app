import { Image, Text, View } from 'react-native'

import { ServicesProvided } from '../../../../constants/services'

import { styles } from './ServiceItem.style'

type ServiceItemProps = Omit<ServicesProvided, 'id'>

export function ServiceItem({ title, description }: ServiceItemProps) {
  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/car.png')} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

