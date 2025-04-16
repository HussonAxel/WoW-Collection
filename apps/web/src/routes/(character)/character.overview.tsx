import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(character)/character/overview')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(character)/character/overview"!</div>
}
