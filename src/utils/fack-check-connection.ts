import { NetworkStatus } from '../constants/network-status'

type CheckConnectionProps = {
  mathValue?: number
}

export function checkConnection({ mathValue }: CheckConnectionProps): NetworkStatus {
  const randomValue = mathValue ?? Math.random()

  if (randomValue < 0.33) {
    return NetworkStatus.LOADING
  }

  if (randomValue < 0.66) {
    return NetworkStatus.ONLINE
  }

  return NetworkStatus.OFFLINE
}
