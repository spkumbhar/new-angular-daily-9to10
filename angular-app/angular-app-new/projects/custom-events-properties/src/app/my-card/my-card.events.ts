import { cardInfo } from './config.domain';
export interface CardEvent {
  tmstamp: number;
  parent: string;
  card: cardInfo;
}
