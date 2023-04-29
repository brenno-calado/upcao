import style from '@/styles/Profile.module.css';
import { ProfileHead } from '@/components/ProfileHead';
import { userMock } from '@/mock/user.mock';
import { User } from '@/types/User';
import { Poppins } from 'next/font/google';
import { Mission } from '@/types/Mission';
import { Check, ChevronRight } from '@mui/icons-material';

interface UserPageProps {
  userProps: User;
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'],
});

export default function UserPage({ userProps }: UserPageProps) {
  return (
    <>
      <ProfileHead userProps={userProps} />
      <section className={`${poppins.className} ${style.primarySection}`}>
        <h3 className={`${style.centerText} ${style.fw600}`}>
          Missão da semana
        </h3>
        <ul className={`${style.missionList}`}>
          {userProps.missions
            .filter((m) => !m.hasExpired)
            .map((mission: Mission, index) => (
              <>
                <li
                  className={`${style.missionStep} ${
                    mission.hasWon ? style.hasWon : style.notWonYet
                  }`}
                >
                  <h4>
                    {mission.reward}
                    <img
                      src='/coin.svg'
                      className={`${style.mr2}`}
                      height={32}
                      width={32}
                    />
                    {mission.hasWon ? (
                      <Check htmlColor='#36aa00' fontSize='medium' />
                    ) : (
                      <ChevronRight fontSize='large' />
                    )}
                  </h4>
                  <span>{mission.goal}</span>
                </li>
              </>
            ))}
        </ul>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  // mocked request to server
  return {
    props: {
      userProps: userMock,
    },
  };
}
