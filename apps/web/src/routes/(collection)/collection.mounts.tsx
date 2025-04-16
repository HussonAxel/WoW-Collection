import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(collection)/collection/mounts')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(collection)/collection/mounts"!</div>
}
