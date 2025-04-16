import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(character)/character/talents')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(character)/character/talents"!</div>
}
