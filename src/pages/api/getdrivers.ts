export async function getDrivers() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://ergast.com/api/f1/2023/drivers.json')
  // console.log(res)

  const data = await res.json()

  // console.log(data)
  return data
}
