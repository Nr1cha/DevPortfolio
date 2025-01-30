import Head from 'next/Head';
const index = () => {
    return (
        <>
        <Head>
            {/* title name */}
            <title>
                Dev Portfolio
            </title>
            {/* adding more website information */}
            <meta charSet='UTF-8'/>
            <meta name='Nick Richards Developer Portfolio'/>
            <meta name='keywords' content='HTML, CSS, JavaScript, NextJS, React, Vercel'/>
            <meta name='author' content='Nick Richards'/>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
        </Head>
        <h1 style={{color: 'blue'}}>
            Nick Richards
        </h1>
        <h2>Applied Technology Major</h2>
        <p>I'm a student that does fullstack development including database languages and tools like SQL, PostgresQL, NoSQL and MongoDB.'</p>
        </>
    )
}

export default index;