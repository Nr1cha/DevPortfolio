import Head from 'next/head';
import About from './components/about';
export default function Home() {
  return (
    <>
      <Head>
        {/* title name */}
        <title>
          Dev Portfolio
        </title>
        {/* adding more website information */}
        <meta charSet='UTF-8' />
        <meta name='Nick Richards Developer Portfolio' />
        <meta name='keywords' content='HTML, CSS, JavaScript, NextJS, React, Vercel' />
        <meta name='author' content='Nick Richards' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <header>
        <About />
      </header>
      <main id='content'>
        <p>This is inside of the main section</p>
      </main>
    </>
  );
}

// export default Home;