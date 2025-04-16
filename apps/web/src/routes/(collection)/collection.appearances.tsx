import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(collection)/collection/appearances')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(collection)/collection/appearance"!</div>
}
