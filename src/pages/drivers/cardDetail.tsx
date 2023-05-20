import { Driver } from 'src/types/Driver'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function CardDetail({ driver }: Driver) {
  const dataBrasileira = driver?.dateOfBirth.split('-').reverse().join('/')
  const router = useRouter()
  return (
    <div className="text-center">
      <button onClick={() => router.back()}>Voltar</button>
      <div className=" bg-slate-200 flex flex-col items-center p-3 my-3 rounded-xl shadow-slate-900 shadow-md">
        <Image
          src={`../../img/${driver?.givenName}.png`}
          width={350}
          height={100}
          alt="imagem"
          className="rounded-xl overflow-hidden bg-slate-400 mb-2"
        />
        <div className="w-auto flex flex-col px-2 items-center">
          <h3 className="font-bold text-3xl">
            {`${driver?.givenName} ${driver?.familyName}`}
          </h3>
          <h4 className="font-bold text-2xl">{driver?.permanentNumber}</h4>
          <h4>{driver?.nationality}</h4>
          <h4>{dataBrasileira}</h4>

          <a
            href={driver?.url}
            target="blank"
            className="bg-blue-400 px-4 py-2 hover:bg-blue-500 rounded-lg shadow-md mt-4"
          >
            {' '}
            Wikipedia
          </a>
        </div>
      </div>
    </div>
  )
}
