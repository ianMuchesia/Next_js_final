import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List| Home</title>
      <link rel="icon" href="/favicon.ico" />
      <meta  name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <div >

     <h1 className={styles.title}>HomePage</h1>
     <p className={styles.text}>lorem dnvbjdvbd jkdvjdvbjbdk knkdvdjkbnnkdvnkdlnvdkkdlnvdklnvkdvnldndlsljijauielnalsch
        </p>
        <p className={styles.text}>lorem dnvbjdvbd jkdvjdvbjbdk knkdvdjkbnnkdvnkdlnvdkkdlnvdklnvkdvnldndlsljijauielnalsch
        </p>
       <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </div>
    </>
  )
}
