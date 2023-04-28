import { UserProps } from '@/pages';
import styles from '@/styles/Home.module.css';
import { Menu, Person } from '@mui/icons-material';
import CoinDisplay from './CoinDisplay';
import Link from 'next/link';
import Image from 'next/image';

export interface HeaderProps {
  loggedUser: UserProps | undefined;
}

export default function HeaderComponent(props: HeaderProps) {
  return (
    <nav className={`${styles.nav}`}>
      <button className={`${styles.menuButton}`}>
        <Menu width='100%' height='80%' htmlColor='#343A40' />
      </button>
      <div className={`${styles.rightNav}`}>
        {props.loggedUser ? (
          <>
            <CoinDisplay coinAmount={props.loggedUser.coinAmount} />
            <Link
              href={`/perfil/${props.loggedUser.username}`}
              className={`${styles.avatarLink}`}
            >
              <div className={`${styles.avatar}`}>
                <Image src={'/avatar.png'} alt='an avatar' fill />
              </div>
            </Link>
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
