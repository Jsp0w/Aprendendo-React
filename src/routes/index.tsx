import { createFileRoute } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import FetchGitHub from '../services/FetchGitHub'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

  const coisasQueAprendi = [
    {
      name:'Use State',
      description:'Uma pagina para eu aplicar o meu conhecimento sobre o hook useState',
      url:'./useState'
    },
    {
      name:'Use Context',
      description:'Uma pagina para eu aplicar o meu conhecimento sobre o hook useContext',
      url:'./useContext'
    },
    {
      name:'Use Effect',
      description:'Uma pagina para eu aplicar o meu conhecimento sobre o hook useEffect',
      url:'./useEffect'
    },
    {
      name:'Use Query',
      description:'Uma pagina para eu aplicar o meu conhecimento sobre o hook useQuery da biblioteca tanstack query',
      url:'./useQuery'
    },
  ]

const OqueEuAprendi = coisasQueAprendi.slice(0,5).map(data=><li className='w-1/4 h-44 pb-4 flex flex-col justify-between'>
        <h3 className='text-emerald-900 font-semibold'>
            {data.name}
        </h3>
        <p>{data.description ? data.description : 'no description'}</p>
        <a href={data.url}>clique aqui para acessar a pagina</a>
</li>)

  const queryClinet = new QueryClient()

  return(
    <>
      <main className='mx-8'>
        <div className='my-56'>
          <p className='font-normal text-3xl max-sm:text-base'>Eu me chamo João Paulo</p>
          <h1 className='text-emerald-700 font-bold text-7xl w-2/3 max-sm:text-3xl'>Eu criei essa pagina web para estudar React</h1>
          <p className='font-normal text-xl mt-3 max-sm:text-base max-sm:w-2/3'>Bibliotecas usadas no Projeto: React, Vite, Tailwindcss, Tanstack route e Tanstack query</p>
        </div>
        <div>
          <h2 className='text-emerald-800 font-semibold text-3xl'>Coisas que eu Aprendi no React:</h2>
          <ul className='flex ml-3 max-sm:flex-col'>
            {OqueEuAprendi}
          </ul>
        </div>
        <div>
          <h2 className='text-emerald-800 font-semibold text-3xl'>Outros projetos:</h2>
          <QueryClientProvider client={queryClinet}>
            <FetchGitHub/>
          </QueryClientProvider>
        </div>
      </main>
    </>
  )
}
