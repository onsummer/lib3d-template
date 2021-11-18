import dynamic from 'next/dynamic'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

const CesiumScene = dynamic(() => import('../components/CesiumScene'), {
  ssr: false,
})

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cesium With NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CesiumScene />
    </div>
  )
}

export default Home
