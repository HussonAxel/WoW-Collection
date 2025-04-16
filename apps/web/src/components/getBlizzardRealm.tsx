import { useState } from "react";
import { trpc } from "@/utils/trpc";
import { useQuery } from "@tanstack/react-query"; 

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";


export default function getBlizzardRealms() {
  const [region, setRegion] = useState("eu"); 

  const realmIndexQuery = useQuery({
    ...trpc.blizzard.getRealmIndex.queryOptions(
      { region },
      {
        staleTime: 5 * 60 * 1000,
      },
    ),
    enabled: true,
  });

  return (
    <div>
      <h1 className="mb-4 font-semibold text-2xl">Realm Status : </h1>
      <div className="flex justify-between mb-8">
        <label>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Server" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eu">EU</SelectItem>
            </SelectContent>
          </Select>
        </label>
        <Button onClick={() => realmIndexQuery.refetch()}>
          {realmIndexQuery.isFetched ? "Refetch" : "Fetching..."}
        </Button>
      </div>

      {realmIndexQuery.isLoading && <p>Loading realms...</p>}
      {realmIndexQuery.isError && (
        <p>Error loading realms: {realmIndexQuery.error.message}</p>
      )}
      {realmIndexQuery.isSuccess && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold text-lg">
                Realm Name
              </TableHead>
              <TableHead className="font-semibold text-lg">ID</TableHead>
              <TableHead className="font-semibold text-lg">
                Realm Slug
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {(realmIndexQuery.data as any)?.realms?.map((realm: any) => (
              <TableRow key={realm.id}>
                <TableCell>{realm.name.fr_FR}</TableCell>
                <TableCell>{realm.id}</TableCell>
                <TableCell>{realm.slug}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
