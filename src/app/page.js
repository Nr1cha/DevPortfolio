import Head from 'next/head';
import About from './components/aboutMe';
import Projects from './components/projects';
import UnderConstruction from './components/banner';
import StatePractice from './components/StatePractice';

export default function Home() {
  return (
    <>
      <UnderConstruction />

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
      <div className="page-content">
        <header>
          <About /> {/*this is the about me section within the header*/}
        </header>
        <main id='content'>
          <p className="collegeProjects">COLLEGE PROJECTS</p>
          <Projects />
          <div>hello</div>
          <StatePractice />
        </main>
      </div>
    </>
  );
}

// export default Home;