/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import First_Section from '../components/first_section'
import Second_Section from '../components/second_section'
import Third_Section from '../components/third_section'
import Fourth_Section from '../components/fourth_section'
import Testimon from '../components/fifth_section'
import Airlines from '../components/airlines_section'
import Subscribe_Section from '../components/subscribe_section'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="sec1_bg">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="XTrans Travel" />
        <meta property="og:description" content="XTrans Travel landing pages" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ik.imagekit.io/icvij1rszoy/travel_agency/New_Project__6_-min_3RmzOsxhN.png?updatedAt=1636457872153" />
        <title>XTrans Travel</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"
        />
      </Head>
      <div 
        className="px-9 sm:px-16 md:px-11 lg:px-0 max-w-screen-lg w-full mx-auto overflow-hidden"
        style={{ fontFamily: ['Nunito', 'sans-serif'], }}
      >
        <Navbar 
          uselogo 
          logosrc="https://ik.imagekit.io/icvij1rszoy/travel_agency/0012273862_10__1___3__AbercB-Jp.png?updatedAt=1634633949156"
          logoClass="w-16 md:w-20"  
        />
        <First_Section />
        <Second_Section />
        <Third_Section />
        <Fourth_Section />
        {/* <Testimon /> */}
        <Airlines />
        <Subscribe_Section />
        <Footer />
      </div>
    </div>

  )
}
