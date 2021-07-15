import Footer from '../../components/footer'
import Header from '../../components/header'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
  const router = useRouter()
  const { pid } = router.query

  const { data, error } = useSWR(`/api/homes/${pid}`, fetcher)

  if (error) return <div>Failed to load houses.</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <Header/>
      <div>
        <h1>{data ? data.name : "Error"}</h1>
        <h5>{data ? data.location : "TBC"}</h5>
      </div>
      <Footer/>
    </>
  )
}
