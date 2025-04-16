import { createFileRoute } from '@tanstack/react-router'
import GetBlizzardRealms from '@/components/getBlizzardRealm'

export const Route = createFileRoute('/(gameData)/gameData/realmstatus')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <h1>Realm Status</h1>
      <GetBlizzardRealms />
    </div>
  );
}
