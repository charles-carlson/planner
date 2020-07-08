import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div className='main'>
      <Head>
        <title>Home</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <div>
        <div>
          <h1 className="textWrapper">Welcome to TODO</h1>
          <p className="textWrapper">A NextJS/ExpressJS planner application</p>
          <p className="textWrapper">Developed by Charles Carlson</p>
        </div>
        <div className="buttonWrapper">
          <Link href="/signup">
            <button className="indexButton">Sign Up</button>
          </Link>
          <Link href="/login">
            <button className="indexButton">Login</button>
          </Link>
        </div> 
        </div>
    </div>
  )
}
