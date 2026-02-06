import '@tanstack/react-query'
import { useQueries, useQuery, useQueryClient } from '@tanstack/react-query'
import { Asset } from '@tanstack/react-router'
import GitHubResponse from '../interfaces/GitHubResponse'

export default function FetchGitHub(){

    const {data, error, isLoading} = useQuery<GitHubResponse []>({queryKey:['github'],queryFn:async():Promise<GitHubResponse []> =>{
        const response = await fetch('https://api.github.com/users/Jsp0w/repos')
        const responseData = await response.json() as Promise<GitHubResponse []>
        return (await responseData).slice(0,4)
    }})

    if(isLoading){
        return <p>carregando</p>
    }

    if(error){
        return <p>error</p>
    }

    return (<>
        <ul className='flex ml-3'>
            {data?.map((repo:GitHubResponse)=><li className={'w-1/4 h-44 pb-4 flex flex-col justify-between center'}>
                 <h3 className='text-emerald-900 font-semibold'>
                     {repo.name}
                 </h3>
                 <p>{repo.description ? repo.description : 'no description'}</p>
                 <a href={repo.html_url} target='_blank'>clique aqui para acessar o repositório</a>
                </li>
            )}
        </ul>
    </>
    )
}