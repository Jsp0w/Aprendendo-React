import { createFileRoute } from '@tanstack/react-router'
import Pokemon from '../components/pokemon'

export const Route = createFileRoute('/aboutme')({
  component: RouteComponent,
})

function RouteComponent() {
  return(
    <>
      <div className={'text-blue-500 text-center'}>Hello "/aboutme"!</div>
      <Pokemon pokeID={1}/>
    </>
  )
}
