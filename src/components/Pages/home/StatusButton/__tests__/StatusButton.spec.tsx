import { render, screen } from '@testing-library/react-native'
import { StatusButton } from '../StatusButton'
import { NetworkStatus } from '@/constants/network-status'

describe('StatusButton component', () => {
  it('should be able to render ActivityIndicator when status is LOADING', () => {
    render(<StatusButton connectionStatus={NetworkStatus.LOADING} />)

    expect(screen.getByTestId('activity-indicator')).toBeTruthy()

    const button = screen.getByTestId('status-button')
    expect(button).toHaveStyle({ backgroundColor: '#FFA500' })
  })

  it('should be able to ONLINE status text when status is ONLINE', () => {
    render(<StatusButton connectionStatus={NetworkStatus.ONLINE} />)

    expect(screen.getByText('Você está ONLINE')).toBeTruthy()

    const button = screen.getByTestId('status-button')
    expect(button).toHaveStyle({ backgroundColor: '#008000' })
  })

  it('should be able to OFFLINE status text when status is OFFLINE', () => {
    render(<StatusButton connectionStatus={NetworkStatus.OFFLINE} />)

    expect(screen.getByText('Você está OFFLINE')).toBeTruthy()

    const button = screen.getByTestId('status-button')
    expect(button).toHaveStyle({ backgroundColor: '#FF0000' })
  })
})

