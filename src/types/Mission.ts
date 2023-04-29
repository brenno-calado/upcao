export interface Mission {
  goal: string;
  reward: string;
  hasWon: boolean;
  isLocked: boolean;
  orderNumber: number;
  expiresAt: string;
  hasExpired: boolean;
}
