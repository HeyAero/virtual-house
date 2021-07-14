// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home-banner bg-purple-300">
        <h1 className="text-7xl text-center p-5">Find your dream home.</h1>
        <h5 className="text-2xl text-center p-5">View from our range:</h5>
      </div>
      <Footer/>
    </>
  )
}
