import Footer from '../../components/footer'
import Header from '../../components/header'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { pid } = router.query
  return (
    <>
      <div>{pid}</div>
    </>
  )
}
