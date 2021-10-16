import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div className="px-9 sm:px-16 md:px-11 lg:px-0 max-w-screen-lg w-full mx-auto">
      <Navbar />
    </div>
  )
}
