import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(gameData)/gameData/auctionhouse')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(gameData)/gameData/auctionhouse"!</div>
}
