import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(collection)/collection/toys')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(collection)/collection/toys"!</div>
}
