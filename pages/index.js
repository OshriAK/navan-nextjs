import Head from 'next/head';
import HomePageContent from '../components/home-page/home-page-content';

function HomePage() {
  return (
    <>
      <Head>
        <title>Blog Application</title>
        <meta name="description" content="Next.js Interview Challenge:" />
      </Head>
      <HomePageContent />
    </>
  );
}

export default HomePage;
