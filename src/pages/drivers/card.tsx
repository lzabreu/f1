import { Driver } from 'src/types/Driver'
import Image from 'next/image'
import Link from 'next/link'

export default function Card({ driver }: Driver) {
  return (
    <div className="h-40 bg-slate-300 flex rounded-xl items-center shadow-slate-900 shadow-md">
      <Image
        src={`/static/img/${driver?.givenName.toLowerCase()}.png`}
        width={100}
        height={100}
        alt="imagem"
        className="rounded-bl-xl rounded-tl-xl overflow-hidden bg-transparent h-full w-auto"
      />
      <div className="w-40 flex flex-col px-2 items-center gap-2">
        <h3 className="font-bold">
          {`${driver?.givenName as string} ${driver?.familyName}`}
        </h3>
        <h4>{driver?.permanentNumber}</h4>
        <h4>{driver?.nationality}</h4>
        <div className="text-green-700 mt-4">
          <Link href={`/drivers/${driver?.driverId.toLowerCase()}`}>
            Mais Informação
          </Link>
        </div>
      </div>
    </div>
  )
}
