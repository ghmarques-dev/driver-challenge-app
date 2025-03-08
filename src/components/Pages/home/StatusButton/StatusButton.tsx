import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { NetworkStatus, STATUS_COLORS } from '../../../../constants/network-status'

import { styles } from './StatusButton.styles'

type StatusButton = {
  connectionStatus: NetworkStatus
}

export function StatusButton({ connectionStatus }: StatusButton) {
  return (
    <TouchableOpacity
      style={[styles.statusButton, { backgroundColor: STATUS_COLORS[connectionStatus] }]}
      testID="status-button"
    >
      <Text style={styles.statusButtonText}>
        {connectionStatus === NetworkStatus.LOADING ? (
          <ActivityIndicator color="white" testID="activity-indicator" />
        ) : (
          connectionStatus
        )}
      </Text>
    </TouchableOpacity>
  )
}
