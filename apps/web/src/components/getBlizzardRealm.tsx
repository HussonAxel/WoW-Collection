
import { useState } from "react";
import { trpc } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query"; 


export default function getBlizzardRealms() {
  const [region, setRegion] = useState("eu"); 

  const realmIndexQuery = useQuery(
    trpc.blizzard.getRealmIndex.queryOptions(
      { region },
      {
        staleTime: 5 * 60 * 1000, 
      },
    ),
  );

  return (
    <div>
      <h1>WoW Collection</h1>

      <div>
        <label>
          Select Region:
          <select value={region} onChange={(e) => setRegion(e.target.value)}>
            <option value="us">US</option>
            <option value="eu">EU</option>
          </select>
        </label>
        <button
          onClick={() => realmIndexQuery.refetch()}
          disabled={realmIndexQuery.isFetching}
        >
          {realmIndexQuery.isFetching ? "Fetching..." : "Fetch Realms"}
        </button>
      </div>

      {realmIndexQuery.isLoading && <p>Loading realms...</p>}
      {realmIndexQuery.isError && (
        <p>Error loading realms: {realmIndexQuery.error.message}</p>
      )}
      {realmIndexQuery.isSuccess && ( // Use isSuccess for successful data
        <div>
          <h2>Realms ({region.toUpperCase()})</h2>
          <ul>
            {(realmIndexQuery.data as any)?.realms?.map((realm: any) => (
              <li key={realm.id}>
                {realm.name.fr_FR} ({realm.slug}) - ID: {realm.id}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
