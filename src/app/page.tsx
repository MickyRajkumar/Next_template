import type { NextPage } from 'next';
import { Landing } from '@/app/components/Landing';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const Home: NextPage = async () => {
  return (
    <>
      <Landing />
    </>
  );
};

export default Home;
