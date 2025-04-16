import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(character)/character/gear')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(character)/character/gear"!</div>
}
