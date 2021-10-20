import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import First_Section from '../components/first_section'
import Second_Section from '../components/second_section'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div className="sec1_bg">
      <Head>
        <title>The Lotus Eater</title>
      </Head>
      <div className="px-9 sm:px-16 md:px-11 lg:px-0 max-w-screen-lg w-full mx-auto overflow-hidden ">
        <Navbar 
          uselogo 
          logosrc="https://ik.imagekit.io/icvij1rszoy/travel_agency/0012273862_10__1___3__AbercB-Jp.png?updatedAt=1634633949156"
          logoClass="w-20"  
        />
        <First_Section />
        <Second_Section />
        <Footer />
      </div>
    </div>

  )
}
