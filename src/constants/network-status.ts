export enum NetworkStatus {
  LOADING = 'Verificando conexão',
  ONLINE = 'Você está ONLINE',
  OFFLINE = 'Você está OFFLINE',
}

export const STATUS_COLORS = {
  [NetworkStatus.LOADING]: '#FFA500',
  [NetworkStatus.ONLINE]: '#008000',
  [NetworkStatus.OFFLINE]: '#FF0000',
}
