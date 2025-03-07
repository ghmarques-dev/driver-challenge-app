import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 22,
    margin: 22,
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
  },
  image: {
    width: 80,
    height: 40,
    marginRight: 12,
    objectFit: 'cover',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
})
