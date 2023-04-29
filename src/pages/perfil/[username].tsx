import { ProfileHead } from '@/components/ProfileHead';
import { userMock } from '@/mock/user.mock';
import { User } from '@/types/User';

interface UserPageProps {
  userProps: User;
}

export default function UserPage({ userProps }: UserPageProps) {
  return (
    <>
      <ProfileHead userProps={userProps} />
      <section>
        <h2>Missão da semana</h2>
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
