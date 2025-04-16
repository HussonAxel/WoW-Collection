import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(gameData)/gameData/itemsearch')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(gameData)/gameData/itemsearch"!</div>
}
