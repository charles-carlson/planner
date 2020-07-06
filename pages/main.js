import Head from 'next/head'

export default function Main() {
    

    const getCurrentDate = () =>{
        let currentDate = new Date();
        return currentDate.toDateString();
    }
    const today = getCurrentDate();
    return (
      <div>
        <Head>
          <title>Main</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
      <h1>TODO : {today}</h1>
        <div>
        </div>
      </div>
    )
  }