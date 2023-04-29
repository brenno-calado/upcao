import styles from '@/styles/Home.module.css';
import CoinDisplay from './CoinDisplay';
import Link from 'next/link';
import { User } from '@/types/User';
import MenuComponent from './Menu';
import AvatarComponent from './Avatar';

export interface HeaderProps {
  loggedUser: User | undefined;
}

export default function HeaderComponent(props: HeaderProps) {
  return (
    <nav className={`${styles.nav}`}>
      <MenuComponent />
      <div className={`${styles.rightNav}`}>
        {props.loggedUser ? (
          <>
            <CoinDisplay coinAmount={props.loggedUser.coinAmount} />
            <AvatarComponent loggedUser={props.loggedUser} />
          </>
        ) : (
          <>
            <Link href={'/login'}>Login</Link>
            <Link href={'/cadastro'}>Cadastre-se</Link>
          </>
        )}
      </div>
    </nav>
  );
}
