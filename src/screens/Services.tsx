import {
  StatusBar,
  Text,
  View,
} from 'react-native'

import { styles } from './Services.styles'

export function ServicesScreen(): React.JSX.Element {
  return (
    <View style={[{ marginTop: StatusBar.currentHeight || 0 }, styles.container]}>
      <Text>Services Screen</Text>
    </View>
  )
}

