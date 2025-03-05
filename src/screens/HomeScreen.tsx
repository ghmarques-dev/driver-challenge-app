import React from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'

// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'


export function HomeScreen(): React.JSX.Element {
  return (
    <View style={[{ marginTop: StatusBar.currentHeight || 0 }, styles.container]}>
      <StatusBar
        barStyle={'dark-content'}
      />

      {/* <MapView style={styles.map} /> */}

      <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
