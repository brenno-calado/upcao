import styles from '@/styles/Home.module.css';
import { Menu } from '@mui/icons-material';

export default function MenuComponent() {
  return (
    <button className={`${styles.menuButton}`}>
      <Menu fontSize='large' htmlColor='#343A40' />
    </button>
  );
}
