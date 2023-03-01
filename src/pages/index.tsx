import type { NextPage } from 'next';
import Head from 'next/head';
import { Landing } from '../components/Landing';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NextJs Template</title>
        <meta
          name="description"
          content="NextJS starter template using TypeScript and Tailwind CSS, and includes VSCode + Prettier + ESLint."
        />
      </Head>

      <main>
        <Landing />
      </main>
    </>
  );
};

export default Home;
