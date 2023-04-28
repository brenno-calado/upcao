import { UserProps } from '@/pages';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

export interface ScheduledDate {
  date: Date;
  event: string;
}

export default function ScheduleNotifications({
  scheduledDates,
}: {
  loggedUser: UserProps;
  scheduledDates: ScheduledDate[];
}) {
  return (
    <section className={`${styles.primarySection}`}>
      <h2 className={`${styles.secondary}`}>Bem vindo!</h2>
      <span>Vamos mudar o mundo?</span>
      <br />
      <p className={`${styles.centered} ${styles.mb2}`}>
        Ficamos felizes com sua presença por aqui. Agora já registra os dias que
        o coletor irá passar em sua rua:
      </p>
      <Image
        src={'/calendar.png'}
        alt='calendar example'
        width={300}
        height={250}
      />
      <h3>Aprenda como separar os seus resíduos sólidos:</h3>
      <p>Clique em um card para saber mais</p>
      <button className={`${styles.primaryButton}`}>
        Resíduo sólido reciclável
      </button>
      <button className={`${styles.grayButton}`}>Resíduo sólido comum</button>
      <button className={`${styles.secondaryButton}`}>
        Resíduo sólido especial
      </button>
    </section>
  );
}
