import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
    <h1>Welcome to TODO</h1>
    <p>A NextJS/ExpressJS planner application</p>
    <p>Developed by Charles Carlson</p>
      <div>
        <Link href="/signup">
          <button>Sign Up</button>
        </Link>
        <Link href="/login">
          <button>Login</button>
        </Link>
      </div> 
    </div>
  )
}
