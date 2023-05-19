import Card from 'src/pages/drivers/card'
import Layout from 'src/components/layout'
import Search from 'src/components/Search'
import { useState } from 'react'
import { Drivers } from 'src/types/Drivers'

export default function DriversPage({ drivers }: Drivers) {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('ASC')
  return (
    <Layout>
      <div className="flex justify-center gap-6 items-center mb-4">
        <Search search={search} setSearch={setSearch} />
        <div className="flex gap-6 items-center">
          Ordenar:
          <button
            className="bg-blue-200 p-2 px-4 rounded-xl"
            onClick={() => setSort('ASC')}
          >
            ASC
          </button>
          <button
            className="bg-blue-200 p-2 px-4 rounded-xl"
            onClick={() => setSort('DESC')}
          >
            DESC
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 overflow-scroll p-3">
        {drivers &&
          drivers
            .filter(
              (drivers) =>
                drivers.givenName
                  .toLowerCase()
                  .startsWith(search.toLowerCase()) ||
                drivers.familyName
                  .toLowerCase()
                  .startsWith(search.toLowerCase()),
            )
            .sort((a, b) =>
              sort === 'ASC'
                ? a.givenName.localeCompare(b.givenName)
                : b.givenName.localeCompare(a.givenName.toLowerCase()),
            )
            .map((driver, index) => <Card key={index} driver={driver} />)}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://ergast.com/api/f1/2023/drivers.json')
  const data = await res.json()
  return {
    props: {
      drivers: data.MRData.DriverTable.Drivers, // vem do json
    },
  }
}
