import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(character)/character')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(character)/character"!</div>
}
