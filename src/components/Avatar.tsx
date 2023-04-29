import styles from '@/styles/Home.module.css';
import { User } from '@/types/User';
import Image from 'next/image';
import Link from 'next/link';

export interface AvatarProps {
  loggedUser: User;
  large?: boolean;
}

export default function AvatarComponent(props: AvatarProps) {
  return (
    <Link
      href={`/perfil/${props.loggedUser.username}`}
      className={`${props.large ? styles.avatarLarge : styles.avatarSmall}`}
    >
      <div className={`${styles.avatar}`}>
        <Image src={'/avatar.png'} alt='an avatar' fill />
      </div>
    </Link>
  );
}
