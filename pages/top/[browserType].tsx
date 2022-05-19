import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '../../components/Layout'

const Demo: NextPage = () => {
  const router = useRouter()
  const browserType = router.query.browserType

  if (typeof window !== "undefined") {
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 2000)
  }

  return (
    <Layout title="Welcome to Our Page">
      <p className='text-xl'>{`Hello ${browserType} User`}</p>
    </Layout>
  )
}
export default Demo
