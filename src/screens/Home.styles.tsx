import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 80,
    backgroundColor: '#DDDDDD',
  },
  primaryButton: {
    backgroundColor: '#00496F',
    borderRadius: 10,
    paddingVertical: 18,
    width: '90%',
    marginBottom: 30,
    alignSelf: 'center',
  },
  primaryButtonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFEFF',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: '#DDDDDD',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 28,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusButton: {
    backgroundColor: '#279700',
    color: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 70,
  },
  statusButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
})
