import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(collection)/collection/battlepets')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(collection)/collection/battlepets"!</div>
}
