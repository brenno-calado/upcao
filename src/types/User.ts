import { Mission } from './Mission';

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  coinAmount: number;
  collectArea: string;
  timesCollected: number;
  createdAt: string;
  missions: Mission[];
}
