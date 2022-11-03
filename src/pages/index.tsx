import type { NextPage } from 'next';
import Head from 'next/head';
import { Landing } from '../components/Landing';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Title</title>
        <meta name="description" content="hanou || Marketplace" />
      </Head>

      <main>
        <Landing />
      </main>
    </>
  );
};

export default Home;
