import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/useQuery')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/useQuery"!</div>
}
