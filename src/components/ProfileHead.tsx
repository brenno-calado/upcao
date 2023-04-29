import styles from '@/styles/Profile.module.css';
import { User } from '@/types/User';
import CoinDisplay from './CoinDisplay';
import MenuComponent from './Menu';
import AvatarComponent from './Avatar';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
});

export function ProfileHead(props: { userProps: User }) {
  return (
    <header
      className={`${styles.profileHeader} ${styles.profileTextColor} ${poppins.className}`}
    >
      <div className={`${styles.leftSideHeader}`}>
        <MenuComponent />
        <br />
        <br />
        <h2>
          {props.userProps.firstName} {props.userProps.lastName}
        </h2>
        <div>
          <span>Membro desde </span>
          <time className={`${styles.smallText}`}>
            {props.userProps.createdAt}
          </time>
          <div className={`${styles.statsArea} ${styles.centerText}`}>
            <div className={`${styles.divider} `}>
              <CoinDisplay coinAmount={props.userProps.coinAmount} />
              <span className={`${styles.smallText}`}>Moedas</span>
            </div>
            <div className={`${styles.col}`}>
              <span className={`${styles.data}`}>
                {props.userProps.timesCollected}
              </span>
              <span className={`${styles.smallText}`}>Coletas realizadas</span>
            </div>
          </div>
        </div>
      </div>
      <AvatarComponent large loggedUser={props.userProps} />
    </header>
  );
}
