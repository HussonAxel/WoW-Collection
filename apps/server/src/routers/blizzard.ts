import { z } from "zod";

import { router, publicProcedure } from "../lib/trpc";
import { getBlizzardAccessToken } from "src/utils/blizzardApi";
import { TRPCError } from "@trpc/server";

// Helper function to get the API base URL
function getApiBaseUrl(region: string): string {
  switch (region.toLowerCase()) {
    case "eu":
      return "https://eu.api.blizzard.com";
    case "kr":  
      return "https://kr.api.blizzard.com";
    case "tw":
      return "https://tw.api.blizzard.com";
    case "cn":
      return "https://gateway.battlenet.com.cn";
    case "us":
    default:
      return "https://us.api.blizzard.com";
  }
}

export const blizzardRouter = router({
  // Example procedure to get realm status
  getRealmIndex: publicProcedure
    .input(
      z
        .object({
          region: z.string().optional().default("us"), // Allow specifying region, default to 'us'
        })
        .optional(),
    )
    .query(async ({ input }) => {
      const region = input?.region ?? process.env.BLIZZARD_REGION ?? "us";
      const token = await getBlizzardAccessToken(region);

      const apiUrl = `${getApiBaseUrl(region)}/data/wow/realm/index`;
      const namespace = `dynamic-${region}`;

      console.log(`Fetching realm index from: ${apiUrl}`);

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Battlenet-Namespace": namespace,
          },
        });

        if (!response.ok) {
          const errorBody = await response.text();
          throw new Error(
            `Failed to fetch WoW Realm Index (${response.status} ${response.statusText}): ${errorBody}`,
          );
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error in getRealmIndex procedure:", error);
        throw error;
      }
    }),

  getPlayableClassesIndex: publicProcedure
    .input(
      z
        .object({
          region: z.string().optional().default("us"),
          locale: z.string().optional().default("en_US")
        })
        .optional(),
    )
    .query(async ({ input }) => {
      const region = input?.region ?? process.env.BLIZZARD_REGION ?? "us";
      const locale = input?.locale ?? "en_US"
      const token = await getBlizzardAccessToken(region)

      const apiUrl = `${getApiBaseUrl(region)}/data/wow/playable-class/index?locale=${locale}`;

      const namespace = `static-${region}`;

      console.log(`Fetching class index from ${apiUrl}`)

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Battlenet-Namespace": namespace,
          },
        });
        if (!response.ok) {
          const errorBody = await response.text()
          throw new Error(
            `Failed to fetch WoW class Index (${response.status} ${response.statusText}): ${errorBody}`
          );
        }
        const data = await response.json()
        return data
      }
      catch (error) {
        console.error("Error in getPlayableClassesIndex procedure: ", error)
        throw error;
      }
    }),

  getPlayableClassDetails: publicProcedure
    .input(
      z
        .object({
          classId: z.number(),
          region: z.string().optional().default("us"),
          locale: z.string().optional().default("en_US"),
        })
    )
    .query(async ({ input }) => {
      const { classId, region = "us", locale = "en_US" } = input;

      if (classId <= 0) {
        throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'Invalid Class ID provided.',
        });
    }
      const token = await getBlizzardAccessToken(region)

      const apiUrl = `${getApiBaseUrl(region)}/data/wow/playable-class/${classId}?locale=${locale}`;

      const namespace = `static-${region}`;

      console.log(`Fetching class details froml ${apiUrl}`)

      try {
        const response = await fetch(apiUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Battlenet-Namespace": namespace
          },
        });
        if (!response.ok) {
          const errorBody = await response.text()
          throw new Error(
            `Failed to fetch WoW class Index (${response.status} ${response.statusText}): ${errorBody}`
          );
        }
        const data = await response.json()
        return data
      }
      catch (error) {
        console.error("Error in getPlayableClassesIndex procedure: ", error)
        throw error;
      }
    })
});
