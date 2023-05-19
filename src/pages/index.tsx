import Link from 'next/link'
import Layout from 'src/components/layout'

export default function Home() {
  return (
    <Layout>
      <div className=" bg-blue-300 p-3 rounded-xl">
        <Link href={'/drivers'}>Pilotos</Link>
      </div>
    </Layout>
  )
}
