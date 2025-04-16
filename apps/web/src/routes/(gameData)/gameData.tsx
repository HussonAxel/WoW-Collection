import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(gameData)/gameData')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
