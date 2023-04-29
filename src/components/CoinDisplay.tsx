import styles from '@/styles/CoinDisplay.module.css';

export interface CoinProps {
  coinAmount: number;
}

export default function CoinDisplay(props: CoinProps) {
  return (
    <div className={`${styles.coinDisplay}`}>
      <img src='/coin.svg' height={32} width={32} />
      <span className={`${styles.data}`}>{props.coinAmount}</span>
    </div>
  );
}
