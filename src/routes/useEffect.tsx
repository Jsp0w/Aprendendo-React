import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/useEffect')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/useEffect"!</div>
}
