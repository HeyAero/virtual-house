// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Homes from '../components/homes'

const homes = [{name: 'Home 1', price: 250000, location: "Texas"}, {name: 'Home 2', price: 550000, location: "New York"}, {name: 'Home 3', location: "Florida"}, {name: 'Home 4', price: 1250000, location: "Texas"}, {name: 'Home 5', price: 5550000, location: "New York"}, {name: 'Home 6', price: 250000, location: "Florida"}]

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home-banner bg-purple-300">
        <h1 className="text-7xl text-center p-5">Find your dream home.</h1>
        <h5 className="text-2xl text-center p-5">View from our range:</h5>
      </div>
      <Homes homes={homes}/>
      <Footer/>
    </>
  )
}
