import { render, screen } from '@testing-library/react-native'
import { StatusButton } from '../StatusButton'
import { NetworkStatus } from '@/constants/network-status'

jest.mock('@/constants/network-status', () => ({
  ...jest.requireActual('@/constants/network-status'),
  STATUS_COLORS: {
    'loading': 'gray',
    'online': 'green',
    'offline': 'red',
  },
  NetworkStatus: {
    LOADING: 'loading',
    ONLINE: 'online',
    OFFLINE: 'offline',
  },
}))

describe('StatusButton component', () => {
  it('should be able to render ActivityIndicator when status is LOADING', () => {
    render(<StatusButton connectionStatus={NetworkStatus.LOADING} />)

    expect(screen.getByTestId('activity-indicator')).toBeTruthy()

    const button = screen.getByTestId('status-button')
    expect(button).toHaveStyle({ backgroundColor: 'gray' })
  })

  it('should be able to ONLINE status text when status is ONLINE', () => {
    render(<StatusButton connectionStatus={NetworkStatus.ONLINE} />)

    expect(screen.getByText('online')).toBeTruthy()

    const button = screen.getByTestId('status-button')
    expect(button).toHaveStyle({ backgroundColor: 'green' })
  })

  it('should be able to OFFLINE status text when status is OFFLINE', () => {
    render(<StatusButton connectionStatus={NetworkStatus.OFFLINE} />)

    expect(screen.getByText('offline')).toBeTruthy()

    const button = screen.getByTestId('status-button')
    expect(button).toHaveStyle({ backgroundColor: 'red' })
  })
})

