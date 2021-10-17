import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'
import First_Section from '../components/first_section'

export default function Home() {
  return (
    <div className="px-9 sm:px-16 md:px-11 lg:px-0 max-w-screen-lg w-full mx-auto overflow-hidden">
      <Navbar />
      <First_Section />
    </div>
  )
}
