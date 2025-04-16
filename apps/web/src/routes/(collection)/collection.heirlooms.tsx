import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(collection)/collection/heirlooms')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(collection)/collection/heirlooms"!</div>
}
