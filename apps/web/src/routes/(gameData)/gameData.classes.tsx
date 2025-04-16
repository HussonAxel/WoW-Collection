import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(gameData)/gameData/classes')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(gameData)/gameData/classes"!</div>
}
