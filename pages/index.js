// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Header from '../components/header'
import Homes from '../components/homes'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

  const { data, error } = useSWR('/api/homes', fetcher)

  if (error) return <div>Failed to load houses.</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Header/>
      <div className="home-banner bg-purple-300">
        <h1 className="text-7xl text-center p-5">Find your dream home.</h1>
        <h5 className="text-2xl text-center p-5">View from our range:</h5>
      </div>
      <Homes homes={data}/>
      <Footer/>
    </>
  )
}
