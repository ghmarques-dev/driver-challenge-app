import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    paddingVertical: 35,
    paddingHorizontal: 26,
    paddingLeft: 8,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 122,
    height: 122,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'right',
  },
  car: {
    color: '#6E6E6E',
    fontSize: 16,
    textAlign: 'right',
  },
  points: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'right',
  },
})
