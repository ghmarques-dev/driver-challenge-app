import {
  FlatList,
  StatusBar,
  View,
} from 'react-native'

import { servicesProvided } from '../../constants/services'
import { ServiceItem } from '../../components/Pages/Services/ServiceItem/Index'

import { styles } from './Services.styles'

export function ServicesScreen(): React.JSX.Element {
  return (
    <View style={[{ marginTop: StatusBar.currentHeight || 0 }, styles.container]}>
        <FlatList
          data={servicesProvided}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ServiceItem
              title={item.title}
              description={item.description}
            />
          )}
        />
    </View>
  )
}

