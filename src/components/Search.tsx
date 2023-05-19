type Props ={
  search:string,
  setSearch: (e: any)=>void
}


export default function Search({search, setSearch}: Props) {
  return (
    <div className='flex gap-2 items-center'>
      <h2>Pesquisar:</h2>
      <input 
      type="text" 
      placeholder='Pesquisar...'
      value={search} 
      onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setSearch(e.target.value)}
      className='rounded-md px-2 py-1 '
      />
    </div>
  );
}