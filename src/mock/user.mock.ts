import { User } from '@/types/User';

export const userMock: User = {
  firstName: 'Débora',
  lastName: 'Araí',
  username: 'debora.arai',
  coinAmount: 3000,
  collectArea: 'SCR-1203',
  timesCollected: 4,
  createdAt: new Date('2023-04-01').toLocaleString('pt-br', {
    month: '2-digit',
    year: 'numeric',
  }),
  missions: [
    {
      expiresAt: new Date('2023-05-01').toISOString(),
      goal: 'Crie sua própria composteira',
      hasExpired: false,
      hasWon: true,
      isLocked: false,
      orderNumber: 1,
      reward: 'Ganhe 30 moedas',
    },
    {
      expiresAt: new Date('2023-05-01').toISOString(),
      goal: 'Colete 20 latinhas de alumínio',
      hasExpired: false,
      hasWon: false,
      isLocked: false,
      orderNumber: 1,
      reward: 'Ganhe 20 moedas',
    },
  ],
};
