import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import Layout from 'src/components/layout'
import { Drivers } from 'src/types/Drivers'
import CardDetail from './cardDetail'

export default function Detail({ drivers }: Drivers) {
  return (
    <Layout>
      <div>
        {drivers &&
          drivers.map((driver, index) => (
            <div key={index}>
              <CardDetail key={index} driver={driver} />
            </div>
          ))}
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await fetch('http://ergast.com/api/f1/2023/drivers.json')
    const data = await res.json()
    const paths = data.MRData.DriverTable.Drivers.map(
      (drivers: Drivers, index: number) => {
        return {
          params: { driverId: drivers.drivers[index].driverId.toString() },
        }
      },
    )
    return {
      paths,
      fallback: false,
    }
  } catch (error) {
    return { paths: [], fallback: false }
  }
}
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const driverId = context.params?.driverId as string
  const res = await fetch(
    `http://ergast.com/api/f1/2023/drivers/${driverId}.json`,
  )
  const data = await res.json()
  return {
    props: {
      drivers: data.MRData.DriverTable.Drivers, // vem do json
    },
  }
}
